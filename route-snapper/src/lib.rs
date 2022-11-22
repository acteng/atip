use std::collections::BTreeMap;

use geom::{Circle, Distance, FindClosest, GPSBounds, LonLat, PolyLine, Pt2D};
use petgraph::graphmap::UnGraphMap;
use serde::{Deserialize, Serialize};
use wasm_bindgen::prelude::*;

const INTERSECTON_RADIUS: Distance = Distance::const_meters(10.0);

type Graph = UnGraphMap<IntersectionID, RoadID>;

#[wasm_bindgen]
pub struct JsRouteSnapper {
    // TODO Blurring the line where state lives, all of this needs a re-work
    map: RouteSnapperMap,
    graph: Graph,
    snap_to_intersections: FindClosest<IntersectionID>,
    route: Route,
    mode: Mode,
}

#[derive(Clone, PartialEq)]
struct Route {
    // These've been explicitly set or dragged
    waypoints: Vec<IntersectionID>,
    // The full sequence of intersections. Waypoints are a subset
    full_path: Vec<IntersectionID>,
    // All roads, in order. They lack direction.
    roads: Vec<RoadID>,
}

#[derive(Clone, PartialEq)]
enum Mode {
    Neutral,
    Hovering(IntersectionID),
    Dragging { idx: usize, at: IntersectionID },
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
        for road in &mut map.roads {
            road.length = road.center_pts.length();
        }

        web_sys::console::log_1(&"Finalizing JsRouteSnapper".into());

        let mut graph: Graph = UnGraphMap::new();
        for (idx, r) in map.roads.iter().enumerate() {
            graph.add_edge(r.i1, r.i2, RoadID(idx as u32));
        }

        let mut snap_to_intersections = FindClosest::new(&map.gps_bounds.to_bounds());
        for (idx, pt) in map.intersections.iter().enumerate() {
            // TODO Time to rethink FindClosest. It can't handle a single point, it needs something
            // with a real bbox
            snap_to_intersections.add_polygon(
                IntersectionID(idx as u32),
                &Circle::new(*pt, INTERSECTON_RADIUS).to_polygon(),
            );
        }

        Ok(Self {
            map,
            graph,
            snap_to_intersections,
            route: Route::new(),
            mode: Mode::Neutral,
        })
    }

    #[wasm_bindgen(js_name = renderGeojson)]
    pub fn render_geojson(&self) -> String {
        let draw_intersection = |i: IntersectionID, label: &str| {
            let mut props = serde_json::Map::new();
            props.insert("type".to_string(), label.to_string().into());
            (
                self.map
                    .intersection(i)
                    .to_geojson(Some(&self.map.gps_bounds)),
                props,
            )
        };
        let draw_road = |r: RoadID| {
            (
                self.map
                    .road(&r)
                    .center_pts
                    .to_geojson(Some(&self.map.gps_bounds)),
                serde_json::Map::new(),
            )
        };

        let mut result = Vec::new();

        // Overlapping circles don't work, so override colors in here. Use these styles:
        //
        // 1) "important": A waypoint, or something being dragged / hovered on
        // 2) "unimportant": A draggable intersection on the route
        // 3) "preview": An intersection on a route if the user chooses to click and confirm
        let mut draw_intersections = BTreeMap::new();

        // Draw the confirmed route
        for r in &self.route.roads {
            result.push(draw_road(*r));
        }
        for i in self.route.full_path.clone() {
            draw_intersections.insert(i, "unimportant");
        }
        for i in self.route.waypoints.clone() {
            draw_intersections.insert(i, "important");
        }

        // Draw the current operation
        if let Mode::Hovering(hover) = self.mode {
            draw_intersections.insert(hover, "important");
            if let Some(last) = self.route.waypoints.last() {
                // If we're trying to drag a point, don't show this preview
                if !self.route.full_path.contains(&hover) {
                    if let Some((roads, intersections)) =
                        self.map.pathfind(&self.graph, *last, hover)
                    {
                        for r in roads {
                            result.push(draw_road(r));
                        }
                        for i in intersections {
                            // Don't overwrite anything existing
                            draw_intersections.entry(i).or_insert("preview");
                        }
                    }
                }
            }
        }
        if let Mode::Dragging { at, .. } = self.mode {
            draw_intersections.insert(at, "important");
        }

        // Partially overlapping circles cover each other up, so make sure the important ones are
        // drawn last
        let mut draw_intersections: Vec<(IntersectionID, &'static str)> =
            draw_intersections.into_iter().collect();
        draw_intersections.sort_by_key(|(_, style)| match *style {
            "important" => 2,
            "unimportant" => 1,
            "preview" => 0,
            _ => unreachable!(),
        });

        for (i, style) in draw_intersections {
            result.push(draw_intersection(i, style));
        }

        let obj = geom::geometries_with_properties_to_geojson(result);
        serde_json::to_string_pretty(&obj).unwrap()
    }

    #[wasm_bindgen(js_name = toFinalFeature)]
    pub fn to_final_feature(&self) -> Option<String> {
        if self.route.roads.is_empty() {
            return None;
        }
        let mut pts = Vec::new();
        let mut last_i = None;
        for r in &self.route.roads {
            let road = self.map.road(r);
            let mut add_pts = road.center_pts.clone().into_points();
            // The road is oriented one way, so maybe reverse these points
            match last_i {
                Some(i) => {
                    if road.i1 == i {
                        last_i = Some(road.i2);
                    } else {
                        add_pts.reverse();
                        last_i = Some(road.i1);
                    }
                }
                None => {
                    if let Some(next) = self.route.roads.get(1) {
                        let next_road = self.map.road(next);
                        if road.i1 == next_road.i1 || road.i1 == next_road.i2 {
                            add_pts.reverse();
                            last_i = Some(road.i1);
                        } else {
                            last_i = Some(road.i2);
                        }
                    } else {
                        // Route with only route doesn't matter
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
                if let Some(i) = self.mouseover_i(pt, circle_radius) {
                    self.mode = Mode::Hovering(i);
                    return true;
                }
            }
            Mode::Hovering(_) => {
                if let Some(i) = self.mouseover_i(pt, circle_radius) {
                    self.mode = Mode::Hovering(i);
                } else {
                    self.mode = Mode::Neutral;
                }
                return true;
            }
            Mode::Dragging { idx, at } => {
                if let Some(i) = self.mouseover_i(pt, circle_radius) {
                    if i != at {
                        let new_idx = self.route.move_waypoint(&self.map, &self.graph, idx, i);
                        self.mode = Mode::Dragging {
                            idx: new_idx,
                            at: i,
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
            self.route.add_waypoint(&self.map, &self.graph, i);
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
    fn mouseover_i(&self, pt: Pt2D, circle_radius: Distance) -> Option<IntersectionID> {
        // TODO I can't figure out how, but the hitbox detection is off.
        let (i, _) = self.snap_to_intersections.closest_pt(pt, circle_radius)?;
        Some(i)
    }
}

impl Route {
    fn new() -> Route {
        Route {
            waypoints: Vec::new(),
            full_path: Vec::new(),
            roads: Vec::new(),
        }
    }

    fn add_waypoint(&mut self, map: &RouteSnapperMap, graph: &Graph, i: IntersectionID) {
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

    fn idx(&self, i: IntersectionID) -> Option<usize> {
        self.full_path.iter().position(|x| *x == i)
    }

    // Returns the new full_path index
    fn move_waypoint(
        &mut self,
        map: &RouteSnapperMap,
        graph: &Graph,
        full_idx: usize,
        new_i: IntersectionID,
    ) -> usize {
        let old_i = self.full_path[full_idx];

        // Edge case when we've placed just one point, then try to drag it
        if self.waypoints.len() == 1 {
            assert_eq!(self.waypoints[0], old_i);
            self.waypoints = vec![new_i];
            self.full_path = vec![new_i];
            return 0;
        }

        let orig = self.clone();

        // Move an existing waypoint?
        if let Some(way_idx) = self.waypoints.iter().position(|x| *x == old_i) {
            self.waypoints[way_idx] = new_i;
        } else {
            // Find the next waypoint after this intersection
            for i in &self.full_path[full_idx..] {
                if let Some(way_idx) = self.waypoints.iter().position(|x| x == i) {
                    // Insert a new waypoint before this
                    self.waypoints.insert(way_idx, new_i);
                    break;
                }
            }
        }

        if !self.recalculate_full_path(map, graph) {
            // Moving the waypoint broke the path, just revert.
            *self = orig;
            return full_idx;
        }
        self.idx(new_i).unwrap()
    }

    // It might be possible for callers to recalculate something smaller, but it's not worth the
    // complexity
    //
    // Returns true on success. If false, the Route is in an invalid state and should be rolled
    // back entirely
    fn recalculate_full_path(&mut self, map: &RouteSnapperMap, graph: &Graph) -> bool {
        self.full_path.clear();
        self.roads.clear();
        for pair in self.waypoints.windows(2) {
            if let Some((roads, intersections)) = map.pathfind(graph, pair[0], pair[1]) {
                self.full_path.pop();
                self.full_path.extend(intersections);
                self.roads.extend(roads);
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
    intersections: Vec<Pt2D>,
    roads: Vec<Road>,
}

#[derive(Serialize, Deserialize)]
struct Road {
    i1: IntersectionID,
    i2: IntersectionID,
    center_pts: PolyLine,
    #[serde(skip_serializing, skip_deserializing)]
    length: Distance,
}

#[derive(Serialize, Deserialize, Clone, Copy, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub struct RoadID(u32);
#[derive(Serialize, Deserialize, Clone, Copy, PartialEq, Eq, PartialOrd, Ord, Hash, Debug)]
pub struct IntersectionID(u32);

impl RouteSnapperMap {
    fn road(&self, id: &RoadID) -> &Road {
        &self.roads[id.0 as usize]
    }
    fn intersection(&self, id: IntersectionID) -> Pt2D {
        self.intersections[id.0 as usize]
    }

    fn pathfind(
        &self,
        graph: &Graph,
        i1: IntersectionID,
        i2: IntersectionID,
    ) -> Option<(Vec<RoadID>, Vec<IntersectionID>)> {
        let i2_pt = self.intersection(i2);

        let (_, path) = petgraph::algo::astar(
            graph,
            i1,
            |i| i == i2,
            |(_, _, r)| self.road(r).length,
            |i| self.intersection(i).dist_to(i2_pt),
        )?;
        let roads: Vec<RoadID> = path
            .windows(2)
            .map(|pair| *graph.edge_weight(pair[0], pair[1]).unwrap())
            .collect();
        Some((roads, path))
    }
}
