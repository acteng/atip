use geom::{Circle, Distance, FindClosest, LonLat, PolyLine, Pt2D};
use map_model::{IntersectionID, Map, PathConstraints, RoadID};
use wasm_bindgen::prelude::*;

const INTERSECTON_RADIUS: Distance = Distance::const_meters(10.0);

#[wasm_bindgen]
pub struct JsRouteSnapper {
    map: Map,
    snap_to_intersections: FindClosest<IntersectionID>,
    route: Route,
    mode: Mode,
}

#[derive(Clone, PartialEq)]
struct Route {
    waypoints: Vec<IntersectionID>,
    full_path: Vec<IntersectionID>,
}

#[derive(Clone, PartialEq, Debug)]
enum Mode {
    Neutral,
    Hovering(IntersectionID),
    Dragging { idx: usize, at: IntersectionID },
}

#[wasm_bindgen]
impl JsRouteSnapper {
    #[wasm_bindgen(constructor)]
    pub fn new() -> Result<JsRouteSnapper, JsValue> {
        // Panics shouldn't happen, but if they do, console.log them.
        console_error_panic_hook::set_once();

        let map: Map = abstutil::from_binary(include_bytes!(
            "/home/dabreegster/abstreet/data/system/gb/bristol/maps/east.bin"
        ))
        .map_err(|err| JsValue::from_str(&err.to_string()))?;

        let mut snap_to_intersections = FindClosest::new(map.get_bounds());
        for i in map.all_intersections() {
            snap_to_intersections.add_polygon(i.id, &i.polygon);
        }

        Ok(Self {
            map,
            snap_to_intersections,
            route: Route::new(),
            mode: Mode::Neutral,
        })
    }

    #[wasm_bindgen(js_name = renderGeojson)]
    pub fn render_geojson(&self) -> String {
        let mut pairs = Vec::new();

        let gps_bounds = Some(self.map.get_gps_bounds());

        // Draw the confirmed route
        for pair in self.route.full_path.windows(2) {
            // TODO Inefficient!
            let r = self
                .map
                .get_r(self.map.find_road_between(pair[0], pair[1]).unwrap());
            pairs.push((
                r.center_pts.to_geojson(gps_bounds),
                make_props("type", "confirmed route"),
            ));
        }
        for i in &self.route.full_path {
            pairs.push((
                Circle::new(self.map.get_i(*i).polygon.center(), INTERSECTON_RADIUS)
                    .to_polygon()
                    .to_geojson(gps_bounds),
                make_props("type", "confirmed route intersection"),
            ));
        }

        // Draw the current operation
        if let Mode::Hovering(i) = self.mode {
            pairs.push((
                Circle::new(self.map.get_i(i).polygon.center(), INTERSECTON_RADIUS)
                    .to_polygon()
                    .to_geojson(gps_bounds),
                make_props("type", "hovering intersection"),
            ));
            if self.route.waypoints.len() == 1 {
                if let Some((roads, intersections)) =
                    self.map
                        .simple_path_btwn_v2(self.route.waypoints[0], i, PathConstraints::Car)
                {
                    for r in roads {
                        let r = self.map.get_r(r);
                        pairs.push((
                            r.center_pts.to_geojson(gps_bounds),
                            make_props("type", "preview route leg"),
                        ));
                    }
                    for i in intersections {
                        pairs.push((
                            Circle::new(self.map.get_i(i).polygon.center(), INTERSECTON_RADIUS)
                                .to_polygon()
                                .to_geojson(gps_bounds),
                            make_props("type", "preview intersection"),
                        ));
                    }
                }
            }
        }
        if let Mode::Dragging { at, .. } = self.mode {
            pairs.push((
                Circle::new(self.map.get_i(at).polygon.center(), INTERSECTON_RADIUS)
                    .to_polygon()
                    .to_geojson(gps_bounds),
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
            let r = self
                .map
                .get_r(self.map.find_road_between(pair[0], pair[1]).unwrap());
            pts.extend(r.center_pts.clone().into_points());
        }
        let pl = PolyLine::deduping_new(pts).ok()?;
        let feature = geojson::Feature {
            bbox: None,
            geometry: Some(pl.to_geojson(Some(self.map.get_gps_bounds()))),
            id: Some(geojson::feature::Id::String("snappy-route".to_string())),
            properties: None,
            foreign_members: None,
        };
        Some(serde_json::to_string_pretty(&feature).unwrap())
    }

    // True if something has changed
    #[wasm_bindgen(js_name = onMouseMove)]
    pub fn on_mouse_move(&mut self, lon: f64, lat: f64) -> bool {
        let pt = LonLat::new(lon, lat).to_pt(self.map.get_gps_bounds());

        //web_sys::console::log_1(&format!("got {}, mode {:?}", pt, self.mode).into());

        match self.mode {
            Mode::Neutral => {
                if let Some(i) = self.mouseover_i(pt) {
                    self.mode = Mode::Hovering(i);
                    return true;
                }
            }
            Mode::Hovering(_) => {
                if let Some(i) = self.mouseover_i(pt) {
                    self.mode = Mode::Hovering(i);
                } else {
                    self.mode = Mode::Neutral;
                }
                return true;
            }
            Mode::Dragging { idx, at } => {
                if let Some(i) = self.mouseover_i(pt) {
                    if i != at {
                        let new_idx = self.route.move_waypoint(&self.map, idx, i);
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
            self.route.add_waypoint(&self.map, i);
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
}

impl JsRouteSnapper {
    fn mouseover_i(&self, pt: Pt2D) -> Option<IntersectionID> {
        // When zoomed really far out, it's harder to click small intersections, so snap more
        // aggressively. Note this should always be a larger hitbox than how the waypoint circles
        // are drawn.
        //let threshold = Distance::meters(30.0) / ctx.canvas.cam_zoom;
        let threshold = Distance::meters(30.0);
        let (i, _) = self.snap_to_intersections.closest_pt(pt, threshold)?;
        // After we have a path started, only snap to points on the path to drag them
        if self.route.waypoints.len() > 1
            && !matches!(self.mode, Mode::Dragging { .. })
            && !self.route.full_path.contains(&i)
        {
            return None;
        }
        Some(i)
    }

    pub fn all_roads(&self) -> Vec<RoadID> {
        let mut roads = Vec::new();
        for pair in self.route.full_path.windows(2) {
            // TODO Inefficient!
            roads.push(self.map.find_road_between(pair[0], pair[1]).unwrap());
        }
        roads
    }

    /// Has the user even picked a start point?
    pub fn is_route_started(&self) -> bool {
        !self.route.waypoints.is_empty()
    }

    /// Has the user specified a full route?
    pub fn is_route_valid(&self) -> bool {
        self.route.waypoints.len() > 1
    }
}

impl Route {
    fn new() -> Route {
        Route {
            waypoints: Vec::new(),
            full_path: Vec::new(),
        }
    }

    fn add_waypoint(&mut self, map: &Map, i: IntersectionID) {
        if self.waypoints.is_empty() {
            self.waypoints.push(i);
            assert!(self.full_path.is_empty());
            self.full_path.push(i);
        } else if self.waypoints.len() == 1 && i != self.waypoints[0] {
            // Route for cars, because we're doing this to transform roads meant for cars. We could
            // equivalently use Bike in most cases, except for highways where biking is currently
            // banned. This tool could be used to carve out space and allow that.
            if let Some((_, intersections)) =
                map.simple_path_btwn_v2(self.waypoints[0], i, PathConstraints::Car)
            {
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
    fn move_waypoint(&mut self, map: &Map, full_idx: usize, new_i: IntersectionID) -> usize {
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
            if let Some((_, intersections)) =
                map.simple_path_btwn_v2(pair[0], pair[1], PathConstraints::Car)
            {
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
