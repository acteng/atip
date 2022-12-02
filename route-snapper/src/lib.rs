use std::collections::BTreeMap;

use geom::{Circle, Distance, FindClosest, GPSBounds, LonLat, PolyLine, Pt2D};
use petgraph::graphmap::UnGraphMap;
use serde::{Deserialize, Serialize};
use wasm_bindgen::prelude::*;

const NODE_RADIUS: Distance = Distance::const_meters(10.0);

type Graph = UnGraphMap<NodeID, EdgeID>;

#[wasm_bindgen]
pub struct JsRouteSnapper {
    // TODO Blurring the line where state lives, all of this needs a re-work
    map: RouteSnapperMap,
    graph: Graph,
    snap_to_nodes: FindClosest<NodeID>,
    route: Route,
    mode: Mode,
}

#[derive(Clone)]
struct Route {
    // These've been explicitly set or dragged
    waypoints: Vec<NodeID>,
    // The full sequence of nodes. Waypoints are a subset
    full_path: Vec<NodeID>,
    // All edges, in order. They lack direction.
    edges: Vec<EdgeID>,
}

#[derive(Clone, PartialEq)]
enum Mode {
    Neutral,
    Hovering(NodeID),
    Dragging { idx: usize, at: NodeID },
}

#[wasm_bindgen]
impl JsRouteSnapper {
    #[wasm_bindgen(constructor)]
    pub fn new(map_bytes: &[u8]) -> Result<JsRouteSnapper, JsValue> {
        // Panics shouldn't happen, but if they do, console.log them.
        console_error_panic_hook::set_once();

        web_sys::console::log_1(&format!("Got {} bytes, deserializing", map_bytes.len()).into());

        let mut map: RouteSnapperMap =
            bincode::deserialize(map_bytes).map_err(|err| JsValue::from_str(&err.to_string()))?;
        for edge in &mut map.edges {
            edge.length = edge.geometry.length();
        }

        web_sys::console::log_1(&"Finalizing JsRouteSnapper".into());

        let mut graph: Graph = UnGraphMap::new();
        for (idx, r) in map.edges.iter().enumerate() {
            graph.add_edge(r.node1, r.node2, EdgeID(idx as u32));
        }

        let mut snap_to_nodes = FindClosest::new(&map.gps_bounds.to_bounds());
        for (idx, pt) in map.nodes.iter().enumerate() {
            // TODO Time to rethink FindClosest. It can't handle a single point, it needs something
            // with a real bbox
            snap_to_nodes.add_polygon(
                NodeID(idx as u32),
                &Circle::new(*pt, NODE_RADIUS).to_polygon(),
            );
        }

        Ok(Self {
            map,
            graph,
            snap_to_nodes,
            route: Route::new(),
            mode: Mode::Neutral,
        })
    }

    #[wasm_bindgen(js_name = renderGeojson)]
    pub fn render_geojson(&self) -> String {
        let draw_node = |n: NodeID, label: &str| {
            let mut props = serde_json::Map::new();
            props.insert("type".to_string(), label.to_string().into());
            (
                self.map.node(n).to_geojson(Some(&self.map.gps_bounds)),
                props,
            )
        };
        let draw_edge = |e: EdgeID| {
            (
                self.map
                    .edge(&e)
                    .geometry
                    .to_geojson(Some(&self.map.gps_bounds)),
                serde_json::Map::new(),
            )
        };

        let mut result = Vec::new();

        // Overlapping circles don't work, so override colors in here. Use these styles:
        //
        // 1) "hovered": Something under the cursor
        // 2) "important": A waypoint, or something being dragged
        // 3) "unimportant": A draggable node on the route
        // 4) "preview": A node on a route if the user chooses to click and confirm
        let mut draw_nodes = BTreeMap::new();

        // Draw the confirmed route
        for e in &self.route.edges {
            result.push(draw_edge(*e));
        }
        for i in self.route.full_path.clone() {
            draw_nodes.insert(i, "unimportant");
        }
        for i in self.route.waypoints.clone() {
            draw_nodes.insert(i, "important");
        }

        // Draw the current operation
        if let Mode::Hovering(hover) = self.mode {
            draw_nodes.insert(hover, "hovered");
            if let Some(last) = self.route.waypoints.last() {
                // If we're trying to drag a point, don't show this preview
                if !self.route.full_path.contains(&hover) {
                    if let Some((edges, nodes)) = self.map.pathfind(&self.graph, *last, hover) {
                        for e in edges {
                            result.push(draw_edge(e));
                        }
                        for i in nodes {
                            // Don't overwrite anything existing
                            draw_nodes.entry(i).or_insert("preview");
                        }
                    }
                }
            }
        }
        if let Mode::Dragging { at, .. } = self.mode {
            draw_nodes.insert(at, "hovered");
        }

        // Partially overlapping circles cover each other up, so make sure the important ones are
        // drawn last
        let mut draw_nodes: Vec<(NodeID, &'static str)> = draw_nodes.into_iter().collect();
        draw_nodes.sort_by_key(|(_, style)| match *style {
            "hovered" => 3,
            "important" => 2,
            "unimportant" => 1,
            "preview" => 0,
            _ => unreachable!(),
        });

        for (n, style) in draw_nodes {
            result.push(draw_node(n, style));
        }

        let obj = geom::geometries_with_properties_to_geojson(result);
        serde_json::to_string_pretty(&obj).unwrap()
    }

    #[wasm_bindgen(js_name = toFinalFeature)]
    pub fn to_final_feature(&self) -> Option<String> {
        if self.route.edges.is_empty() {
            return None;
        }
        let mut pts = Vec::new();
        let mut last_node = None;
        for r in &self.route.edges {
            let edge = self.map.edge(r);
            let mut add_pts = edge.geometry.clone().into_points();
            // The edge is oriented one way, so maybe reverse these points
            match last_node {
                Some(node) => {
                    if edge.node1 == node {
                        last_node = Some(edge.node2);
                    } else {
                        add_pts.reverse();
                        last_node = Some(edge.node1);
                    }
                }
                None => {
                    if let Some(next) = self.route.edges.get(1) {
                        let next_edge = self.map.edge(next);
                        if edge.node1 == next_edge.node1 || edge.node1 == next_edge.node2 {
                            add_pts.reverse();
                            last_node = Some(edge.node1);
                        } else {
                            last_node = Some(edge.node2);
                        }
                    } else {
                        // Route with only one node doesn't matter
                    }
                }
            }
            pts.extend(add_pts);
        }
        pts.dedup();
        let pl = PolyLine::unchecked_new(pts);
        let feature = geojson::Feature {
            bbox: None,
            geometry: Some(pl.to_geojson(Some(&self.map.gps_bounds))),
            id: None,
            properties: None,
            foreign_members: None,
        };
        Some(serde_json::to_string_pretty(&feature).unwrap())
    }

    // True if something has changed
    #[wasm_bindgen(js_name = onMouseMove)]
    pub fn on_mouse_move(&mut self, lon: f64, lat: f64, circle_radius_meters: f64) -> bool {
        let pt = LonLat::new(lon, lat).to_pt(&self.map.gps_bounds);
        let circle_radius = Distance::meters(circle_radius_meters);

        match self.mode {
            Mode::Neutral => {
                if let Some(node) = self.mouseover_node(pt, circle_radius) {
                    self.mode = Mode::Hovering(node);
                    return true;
                }
            }
            Mode::Hovering(_) => {
                if let Some(node) = self.mouseover_node(pt, circle_radius) {
                    self.mode = Mode::Hovering(node);
                } else {
                    self.mode = Mode::Neutral;
                }
                return true;
            }
            Mode::Dragging { idx, at } => {
                if let Some(node) = self.mouseover_node(pt, circle_radius) {
                    if node != at {
                        let new_idx = self.route.move_waypoint(&self.map, &self.graph, idx, node);
                        self.mode = Mode::Dragging {
                            idx: new_idx,
                            at: node,
                        };
                        return true;
                    }
                }
            }
        }

        false
    }

    #[wasm_bindgen(js_name = onClick)]
    pub fn on_click(&mut self) {
        if let Mode::Hovering(i) = self.mode {
            if let Some(idx) = self.route.waypoints.iter().position(|x| *x == i) {
                // If we click on an existing waypoint and it's not the first or last, delete it
                if !self.route.waypoints.is_empty()
                    && idx != 0
                    && idx != self.route.waypoints.len() - 1
                {
                    self.route.waypoints.remove(idx);
                    self.route.recalculate_full_path(&self.map, &self.graph);
                }
            } else {
                self.route.add_waypoint(&self.map, &self.graph, i);
            }
        }
    }

    // True if we should hijack the drag controls
    #[wasm_bindgen(js_name = onDragStart)]
    pub fn on_drag_start(&mut self) -> bool {
        if let Mode::Hovering(i) = self.mode {
            if let Some(idx) = self.route.idx(i) {
                self.mode = Mode::Dragging { idx, at: i };
                return true;
            }
        }
        false
    }

    // True if we're done dragging
    #[wasm_bindgen(js_name = onMouseUp)]
    pub fn on_mouse_up(&mut self) -> bool {
        if let Mode::Dragging { at, .. } = self.mode {
            self.mode = Mode::Hovering(at);
            return true;
        }
        false
    }

    #[wasm_bindgen(js_name = clearState)]
    pub fn clear_state(&mut self) {
        self.route = Route::new();
        self.mode = Mode::Neutral;
    }
}

impl JsRouteSnapper {
    fn mouseover_node(&self, pt: Pt2D, circle_radius: Distance) -> Option<NodeID> {
        // TODO I can't figure out how, but the hitbox detection is off.
        let (node, _) = self.snap_to_nodes.closest_pt(pt, circle_radius)?;
        Some(node)
    }
}

impl Route {
    fn new() -> Route {
        Route {
            waypoints: Vec::new(),
            full_path: Vec::new(),
            edges: Vec::new(),
        }
    }

    fn add_waypoint(&mut self, map: &RouteSnapperMap, graph: &Graph, i: NodeID) {
        if self.waypoints.is_empty() {
            self.waypoints.push(i);
            assert!(self.full_path.is_empty());
            self.full_path.push(i);
        } else {
            self.waypoints.push(i);
            let orig = self.clone();
            if !self.recalculate_full_path(map, graph) {
                *self = orig;
            }
        }
    }

    fn idx(&self, i: NodeID) -> Option<usize> {
        self.full_path.iter().position(|x| *x == i)
    }

    // Returns the new full_path index
    fn move_waypoint(
        &mut self,
        map: &RouteSnapperMap,
        graph: &Graph,
        full_idx: usize,
        new_node: NodeID,
    ) -> usize {
        let old_node = self.full_path[full_idx];

        // Edge case when we've placed just one point, then try to drag it
        if self.waypoints.len() == 1 {
            assert_eq!(self.waypoints[0], old_node);
            self.waypoints = vec![new_node];
            self.full_path = vec![new_node];
            return 0;
        }

        let orig = self.clone();

        // Move an existing waypoint?
        if let Some(way_idx) = self.waypoints.iter().position(|x| *x == old_node) {
            self.waypoints[way_idx] = new_node;
        } else {
            // Find the next waypoint after this node
            for node in &self.full_path[full_idx..] {
                if let Some(way_idx) = self.waypoints.iter().position(|x| x == node) {
                    // Insert a new waypoint before this
                    self.waypoints.insert(way_idx, new_node);
                    break;
                }
            }
        }

        if !self.recalculate_full_path(map, graph) {
            // Moving the waypoint broke the path, just revert.
            *self = orig;
            return full_idx;
        }
        self.idx(new_node).unwrap()
    }

    // It might be possible for callers to recalculate something smaller, but it's not worth the
    // complexity
    //
    // Returns true on success. If false, the Route is in an invalid state and should be rolled
    // back entirely
    fn recalculate_full_path(&mut self, map: &RouteSnapperMap, graph: &Graph) -> bool {
        self.full_path.clear();
        self.edges.clear();
        for pair in self.waypoints.windows(2) {
            if let Some((edges, nodes)) = map.pathfind(graph, pair[0], pair[1]) {
                self.full_path.pop();
                self.full_path.extend(nodes);
                self.edges.extend(edges);
            } else {
                return false;
            }
        }
        true
    }
}

// TODO Copied from abstreet-to-atip. We need... a third repo, just for this plugin.

#[derive(Serialize, Deserialize)]
struct RouteSnapperMap {
    gps_bounds: GPSBounds,
    nodes: Vec<Pt2D>,
    edges: Vec<Edge>,
}

#[derive(Serialize, Deserialize)]
struct Edge {
    node1: NodeID,
    node2: NodeID,
    geometry: PolyLine,
    #[serde(skip_serializing, skip_deserializing)]
    length: Distance,
}

#[derive(Serialize, Deserialize, Clone, Copy, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub struct EdgeID(u32);
#[derive(Serialize, Deserialize, Clone, Copy, PartialEq, Eq, PartialOrd, Ord, Hash, Debug)]
pub struct NodeID(u32);

impl RouteSnapperMap {
    fn edge(&self, id: &EdgeID) -> &Edge {
        &self.edges[id.0 as usize]
    }
    fn node(&self, id: NodeID) -> Pt2D {
        self.nodes[id.0 as usize]
    }

    fn pathfind(
        &self,
        graph: &Graph,
        node1: NodeID,
        node2: NodeID,
    ) -> Option<(Vec<EdgeID>, Vec<NodeID>)> {
        let node2_pt = self.node(node2);

        let (_, path) = petgraph::algo::astar(
            graph,
            node1,
            |i| i == node2,
            |(_, _, e)| self.edge(e).length,
            |i| self.node(i).dist_to(node2_pt),
        )?;
        let edges: Vec<EdgeID> = path
            .windows(2)
            .map(|pair| *graph.edge_weight(pair[0], pair[1]).unwrap())
            .collect();
        Some((edges, path))
    }
}
