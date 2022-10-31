use std::collections::HashMap;

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
    waypoints: Vec<IntersectionID>,
    full_path: Vec<IntersectionID>,
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

        let map: RouteSnapperMap =
            abstutil::from_binary(map_bytes).map_err(|err| JsValue::from_str(&err.to_string()))?;

        web_sys::console::log_1(&"Finalizing JsRouteSnapper".into());

        let mut graph: Graph = UnGraphMap::new();
        for (idx, r) in map.roads.iter().enumerate() {
            graph.add_edge(r.i1, r.i2, RoadID(idx));
        }

        let mut snap_to_intersections = FindClosest::new(&map.gps_bounds.to_bounds());
        for (idx, pt) in map.intersections.iter().enumerate() {
            // TODO Time to rethink FindClosest. It can't handle a single point, it needs something
            // with a real bbox
            snap_to_intersections.add_polygon(
                IntersectionID(idx),
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
        let mut pairs = Vec::new();

        let gps_bounds = Some(&self.map.gps_bounds);

        // Draw the confirmed route
        for pair in self.route.full_path.windows(2) {
            // TODO Why would it fail?
            if let Some(road) = self.map.get_r(pair) {
                pairs.push((
                    road.center_pts.to_geojson(gps_bounds),
                    make_props("type", "confirmed route"),
                ));
            }
        }
        for i in &self.route.full_path {
            pairs.push((
                self.map.intersections[i.0].to_geojson(gps_bounds),
                make_props("type", "confirmed route intersection"),
            ));
        }

        // Draw the current operation
        if let Mode::Hovering(i) = self.mode {
            pairs.push((
                self.map.intersections[i.0].to_geojson(gps_bounds),
                make_props("type", "hovering intersection"),
            ));
            if self.route.waypoints.len() == 1 {
                if let Some((roads, intersections)) =
                    self.map.pathfind(&self.graph, self.route.waypoints[0], i)
                {
                    for r in roads {
                        pairs.push((
                            self.map.roads[r.0].center_pts.to_geojson(gps_bounds),
                            make_props("type", "preview route leg"),
                        ));
                    }
                    for i in intersections {
                        pairs.push((
                            self.map.intersections[i.0].to_geojson(gps_bounds),
                            make_props("type", "preview intersection"),
                        ));
                    }
                }
            }
        }
        if let Mode::Dragging { at, .. } = self.mode {
            pairs.push((
                self.map.intersections[at.0].to_geojson(gps_bounds),
                make_props("type", "drag intersection"),
            ));
        }

        let obj = geom::geometries_with_properties_to_geojson(pairs);
        serde_json::to_string_pretty(&obj).unwrap()
    }

    #[wasm_bindgen(js_name = toFinalFeature)]
    pub fn to_final_feature(&self) -> Option<String> {
        let mut pts = Vec::new();
        for pair in self.route.full_path.windows(2) {
            // TODO Why would it fail?
            if let Some(road) = self.map.get_r(pair) {
                pts.extend(road.center_pts.clone().into_points());
            }
        }
        let pl = PolyLine::deduping_new(pts).ok()?;
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
        // After we have a path started, only snap to points on the path to drag them
        if self.route.waypoints.len() > 1
            && !matches!(self.mode, Mode::Dragging { .. })
            && !self.route.full_path.contains(&i)
        {
            return None;
        }
        Some(i)
    }
}

impl Route {
    fn new() -> Route {
        Route {
            waypoints: Vec::new(),
            full_path: Vec::new(),
        }
    }

    fn add_waypoint(&mut self, map: &RouteSnapperMap, graph: &Graph, i: IntersectionID) {
        if self.waypoints.is_empty() {
            self.waypoints.push(i);
            assert!(self.full_path.is_empty());
            self.full_path.push(i);
        } else if self.waypoints.len() == 1 && i != self.waypoints[0] {
            // Route for cars, because we're doing this to transform roads meant for cars. We could
            // equivalently use Bike in most cases, except for highways where biking is currently
            // banned. This tool could be used to carve out space and allow that.
            if let Some((_, intersections)) = map.pathfind(graph, self.waypoints[0], i) {
                self.waypoints.push(i);
                assert_eq!(self.full_path.len(), 1);
                self.full_path = intersections;
            }
        }
        // If there's already two waypoints, can't add more -- can only drag things.
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

        // Recalculate the full path. We could be more efficient and just fix up the part that's
        // changed, but eh.
        self.full_path.clear();
        for pair in self.waypoints.windows(2) {
            if let Some((_, intersections)) = map.pathfind(graph, pair[0], pair[1]) {
                self.full_path.pop();
                self.full_path.extend(intersections);
            } else {
                // Moving the waypoint broke the path, just revert.
                *self = orig;
                return full_idx;
            }
        }
        self.idx(new_i).unwrap()
    }
}

fn make_props(key: &str, value: &str) -> serde_json::Map<String, serde_json::Value> {
    let mut props = serde_json::Map::new();
    props.insert(key.to_string(), value.to_string().into());
    props
}

// TODO Copied from abstreet-to-atip. We need... a third repo, just for this plugin.

#[derive(Serialize, Deserialize)]
struct RouteSnapperMap {
    gps_bounds: GPSBounds,
    intersections: Vec<Pt2D>,
    roads: Vec<Road>,
    road_lookup: HashMap<(IntersectionID, IntersectionID), RoadID>,
}

#[derive(Serialize, Deserialize)]
struct Road {
    i1: IntersectionID,
    i2: IntersectionID,
    center_pts: PolyLine,
    length: Distance,
}

#[derive(Serialize, Deserialize, Clone, Copy, PartialEq, Eq, PartialOrd, Ord, Hash)]
struct RoadID(usize);
#[derive(Serialize, Deserialize, Clone, Copy, PartialEq, Eq, PartialOrd, Ord, Hash, Debug)]
struct IntersectionID(usize);

impl RouteSnapperMap {
    fn pathfind(
        &self,
        graph: &Graph,
        i1: IntersectionID,
        i2: IntersectionID,
    ) -> Option<(Vec<RoadID>, Vec<IntersectionID>)> {
        let (_, path) = petgraph::algo::astar(
            graph,
            i1,
            |i| i == i2,
            |(_, _, r)| self.roads[r.0].length,
            |_| Distance::ZERO,
        )?;
        let roads: Vec<RoadID> = path
            .windows(2)
            .map(|pair| *graph.edge_weight(pair[0], pair[1]).unwrap())
            .collect();
        Some((roads, path))
    }

    // TODO Inefficient!
    fn get_r(&self, pair: &[IntersectionID]) -> Option<&Road> {
        let id = self.road_lookup.get(&(pair[0], pair[1]))?;
        Some(&self.roads[id.0])
    }
}
