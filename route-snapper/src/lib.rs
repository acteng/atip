use std::collections::BTreeMap;

use geom::{Circle, Distance, FindClosest, GPSBounds, LonLat, PolyLine, Pt2D};
use petgraph::graphmap::DiGraphMap;
use serde::{Deserialize, Serialize};
use wasm_bindgen::prelude::*;

const NODE_RADIUS: Distance = Distance::const_meters(10.0);

type Graph = DiGraphMap<NodeID, DirectedEdge>;

#[wasm_bindgen]
pub struct JsRouteSnapper {
    // TODO Blurring the line where state lives, all of this needs a re-work
    map: RouteSnapperMap,
    graph: Graph,
    snap_to_nodes: FindClosest<NodeID>,
    route: Route,
    mode: Mode,
}

#[derive(Clone, PartialEq)]
enum Waypoint {
    Snapped(NodeID),
    Free(Pt2D),
}

#[derive(Clone, PartialEq)]
enum PathEntry {
    SnappedPoint(NodeID),
    FreePoint(Pt2D),
    Edge(DirectedEdge),
    // Note we don't need to represent a straight line between snapped or free points here. As we
    // build up the line-string, they'll happen anyway.
}

#[derive(Clone)]
struct Route {
    // Something explicitly manipulated by the user
    waypoints: Vec<Waypoint>,

    // The full route, expanded. This can be calculated purely from waypoints.
    full_path: Vec<PathEntry>,
}

type Direction = bool;
const FORWARDS: Direction = true;
const BACKWARDS: Direction = false;

#[derive(Clone, Copy, PartialEq)]
struct DirectedEdge(EdgeID, Direction);

#[derive(Clone, PartialEq)]
enum Mode {
    Neutral,
    Hovering(NodeID),
    // idx into waypoints
    // TODO We'll need to be able to drag free points too
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

        let mut graph: Graph = DiGraphMap::new();
        for (idx, e) in map.edges.iter().enumerate() {
            let id = EdgeID(idx as u32);
            graph.add_edge(e.node1, e.node2, DirectedEdge(id, FORWARDS));
            graph.add_edge(e.node2, e.node1, DirectedEdge(id, BACKWARDS));
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

    #[wasm_bindgen(js_name = toFinalFeature)]
    pub fn to_final_feature(&self) -> Option<String> {
        let geometry = self.entire_line_string()?;
        let feature = geojson::Feature {
            bbox: None,
            geometry: Some(geometry),
            id: None,
            properties: None,
            foreign_members: None,
        };
        Some(serde_json::to_string_pretty(&feature).unwrap())
    }

    #[wasm_bindgen(js_name = renderGeojson)]
    pub fn render_geojson(&self) -> String {
        let mut result = Vec::new();

        let mut draw_free_points = Vec::new();
        // Overlapping circles don't work, so override colors in here. Use these styles:
        //
        // 1) "hovered": Something under the cursor
        // 2) "important": A waypoint, or something being dragged
        // 3) "unimportant": A draggable node on the route
        // 4) "preview": A node on a route if the user chooses to click and confirm
        let mut draw_nodes = BTreeMap::new();

        // Draw the confirmed route
        if let Some(geometry) = self.entire_line_string() {
            result.push((geometry, serde_json::Map::new()));
        }
        for entry in &self.route.full_path {
            match entry {
                PathEntry::SnappedPoint(node) => {
                    draw_nodes.insert(*node, "unimportant");
                }
                PathEntry::FreePoint(pt) => {
                    draw_free_points.push(*pt);
                }
                PathEntry::Edge(_) => {}
            }
        }
        for waypt in &self.route.waypoints {
            if let Waypoint::Snapped(node) = waypt {
                draw_nodes.insert(*node, "important");
            }
        }

        // Draw the current operation
        if let Mode::Hovering(hover) = self.mode {
            draw_nodes.insert(hover, "hovered");
            if let Some(Waypoint::Snapped(last)) = self.route.waypoints.last() {
                // If we're trying to drag a point, don't show this preview
                if !self
                    .route
                    .full_path
                    .contains(&PathEntry::SnappedPoint(hover))
                {
                    if let Some(entries) = self.map.pathfind(&self.graph, *last, hover) {
                        for entry in entries {
                            match entry {
                                PathEntry::SnappedPoint(node) => {
                                    // Don't overwrite anything existing
                                    draw_nodes.entry(node).or_insert("preview");
                                }
                                PathEntry::FreePoint(_) => unreachable!(),
                                PathEntry::Edge(dir_edge) => {
                                    let pl =
                                        PolyLine::unchecked_new(self.map.edge_geometry(dir_edge));
                                    result.push((
                                        pl.to_geojson(Some(&self.map.gps_bounds)),
                                        serde_json::Map::new(),
                                    ));
                                }
                            }
                        }
                    }
                }
            }
            // TODO Preview freehand thing
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

        for (n, label) in draw_nodes {
            let mut props = serde_json::Map::new();
            props.insert("type".to_string(), label.to_string().into());
            result.push((
                self.map.node(n).to_geojson(Some(&self.map.gps_bounds)),
                props,
            ));
        }

        let obj = geom::geometries_with_properties_to_geojson(result);
        serde_json::to_string_pretty(&obj).unwrap()
    }

    // True if something has changed
    #[wasm_bindgen(js_name = onMouseMove)]
    pub fn on_mouse_move(
        &mut self,
        lon: f64,
        lat: f64,
        circle_radius_meters: f64,
        snap_mode: bool,
    ) -> bool {
        let pt = LonLat::new(lon, lat).to_pt(&self.map.gps_bounds);
        let circle_radius = Distance::meters(circle_radius_meters);

        match self.mode {
            Mode::Neutral => {
                if snap_mode {
                    if let Some(node) = self.mouseover_node(pt, circle_radius) {
                        self.mode = Mode::Hovering(node);
                        return true;
                    }
                }
            }
            Mode::Hovering(_) => {
                if snap_mode {
                    if let Some(node) = self.mouseover_node(pt, circle_radius) {
                        self.mode = Mode::Hovering(node);
                    } else {
                        self.mode = Mode::Neutral;
                    }
                    return true;
                }
            }
            Mode::Dragging { idx, at } => {
                // TODO Assuming snap mode
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
            if let Some(idx) = self
                .route
                .waypoints
                .iter()
                .position(|x| *x == Waypoint::Snapped(i))
            {
                // If we click on an existing waypoint and it's not the first or last, delete it
                if !self.route.waypoints.is_empty()
                    && idx != 0
                    && idx != self.route.waypoints.len() - 1
                {
                    self.route.waypoints.remove(idx);
                    self.route.recalculate_full_path(&self.map, &self.graph);
                }
            } else {
                self.route
                    .add_waypoint(&self.map, &self.graph, Waypoint::Snapped(i));
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

    fn entire_line_string(&self) -> Option<geojson::Geometry> {
        if self.route.full_path.is_empty() {
            return None;
        }
        let mut pts = Vec::new();

        for entry in &self.route.full_path {
            match entry {
                // There'll be an adjacent Edge that contributes geometry
                PathEntry::SnappedPoint(_) => {}
                PathEntry::FreePoint(pt) => {
                    pts.push(*pt);
                }
                PathEntry::Edge(dir_edge) => {
                    pts.extend(self.map.edge_geometry(*dir_edge));
                }
            }
        }

        pts.dedup();
        let pl = PolyLine::unchecked_new(pts);
        Some(pl.to_geojson(Some(&self.map.gps_bounds)))
    }
}

impl Route {
    fn new() -> Route {
        Route {
            waypoints: Vec::new(),
            full_path: Vec::new(),
        }
    }

    fn add_waypoint(&mut self, map: &RouteSnapperMap, graph: &Graph, waypt: Waypoint) {
        if self.waypoints.is_empty() {
            self.waypoints.push(waypt);
            assert!(self.full_path.is_empty());
            // TODO Do we need to have the one PathEntry?
        } else {
            self.waypoints.push(waypt);
            let orig = self.clone();
            if !self.recalculate_full_path(map, graph) {
                *self = orig;
            }
        }
    }

    fn idx(&self, i: NodeID) -> Option<usize> {
        self.full_path
            .iter()
            .position(|x| *x == PathEntry::SnappedPoint(i))
    }

    // Returns the new full_path index
    fn move_waypoint(
        &mut self,
        map: &RouteSnapperMap,
        graph: &Graph,
        full_idx: usize,
        new_node: NodeID,
    ) -> usize {
        full_idx
        /*let old_waypt = self.full_path[full_idx];

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
        self.idx(new_node).unwrap()*/
    }

    // It might be possible for callers to recalculate something smaller, but it's not worth the
    // complexity
    //
    // Returns true on success. If false, the Route is in an invalid state and should be rolled
    // back entirely
    fn recalculate_full_path(&mut self, map: &RouteSnapperMap, graph: &Graph) -> bool {
        self.full_path.clear();
        for pair in self.waypoints.windows(2) {
            if let Waypoint::Free(pt) = pair[0] {
                self.full_path.push(PathEntry::FreePoint(pt));
            }

            if let [Waypoint::Snapped(node1), Waypoint::Snapped(node2)] = pair {
                if let Some(entries) = map.pathfind(graph, *node1, *node2) {
                    self.full_path.extend(entries);
                } else {
                    return false;
                }
            }
        }
        if let Some(Waypoint::Free(pt)) = self.waypoints.last() {
            self.full_path.push(PathEntry::FreePoint(*pt));
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
    fn edge(&self, id: EdgeID) -> &Edge {
        &self.edges[id.0 as usize]
    }
    fn edge_geometry(&self, dir_edge: DirectedEdge) -> Vec<Pt2D> {
        let mut pts = self.edge(dir_edge.0).geometry.clone().into_points();
        if dir_edge.1 == BACKWARDS {
            pts.reverse();
        }
        pts
    }
    fn node(&self, id: NodeID) -> Pt2D {
        self.nodes[id.0 as usize]
    }

    // Returns a sequence of (SnappedPoint, Edge, SnappedPoint, Edge..., SnappedPoint)
    fn pathfind(&self, graph: &Graph, node1: NodeID, node2: NodeID) -> Option<Vec<PathEntry>> {
        let node2_pt = self.node(node2);

        let (_, path) = petgraph::algo::astar(
            graph,
            node1,
            |i| i == node2,
            |(_, _, dir_edge)| self.edge(dir_edge.0).length,
            |i| self.node(i).dist_to(node2_pt),
        )?;

        let mut entries = Vec::new();
        for pair in path.windows(2) {
            entries.push(PathEntry::SnappedPoint(pair[0]));
            entries.push(PathEntry::Edge(
                *graph.edge_weight(pair[0], pair[1]).unwrap(),
            ));
        }
        entries.push(PathEntry::SnappedPoint(*path.last().unwrap()));
        assert!(entries[0] == PathEntry::SnappedPoint(node1));
        assert!(*entries.last().unwrap() == PathEntry::SnappedPoint(node2));
        Some(entries)
    }
}
