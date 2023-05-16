#[macro_use]
extern crate anyhow;
#[macro_use]
extern crate log;

mod map_matching;

use std::collections::BTreeSet;

use geojson::Feature;
use geom::{Distance, FindClosest, PolyLine, Pt2D};
use osm2streets::{Direction, IntersectionID, LaneType, StreetNetwork};
use serde::Deserialize;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub struct RouteInfo {
    network: StreetNetwork,
    closest_intersection: FindClosest<IntersectionID>,
}

#[wasm_bindgen]
impl RouteInfo {
    /// Call with bincoded bytes of a StreetNetwork
    #[wasm_bindgen(constructor)]
    pub fn new(input_bytes: &[u8]) -> Result<RouteInfo, JsValue> {
        // Panics shouldn't happen, but if they do, console.log them.
        console_error_panic_hook::set_once();
        console_log::init_with_level(log::Level::Info).unwrap();

        info!("Got {} bytes, deserializing", input_bytes.len());

        let network: StreetNetwork = bincode::deserialize(input_bytes).map_err(err_to_js)?;

        let mut closest_intersection = FindClosest::new();
        for i in network.intersections.values() {
            closest_intersection.add_polygon(i.id, &i.polygon);
        }

        Ok(RouteInfo {
            network,
            closest_intersection,
        })
    }

    // TODO How can we glue up anyhow?
    // TODO Can we take geojson::Feature so that it shows up in TS?
    /// Given a GeoJSON LineString, generate a name based on the roads at each endpoint
    #[wasm_bindgen(js_name = nameForRoute)]
    pub fn name_for_route(&self, raw_line_string: JsValue) -> Result<String, JsValue> {
        let feature: geojson::Feature = serde_wasm_bindgen::from_value(raw_line_string)?;
        let (pt1, pt2) = self.linestring_endpoints(&feature).map_err(err_to_js)?;

        // Find the closest intersections to the route endpoints
        let threshold = Distance::meters(100.0);
        let (i1, _) = self
            .closest_intersection
            .closest_pt(pt1, threshold)
            .ok_or_else(|| err_to_js("no intersection close to first pt"))?;
        let (i2, _) = self
            .closest_intersection
            .closest_pt(pt2, threshold)
            .ok_or_else(|| err_to_js("no intersection close to last pt"))?;

        let i1_name = self.name_intersection(i1);
        let i2_name = self.name_intersection(i2);
        Ok(format!("Route from {i1_name} to {i2_name}"))
    }

    fn name_intersection(&self, i: IntersectionID) -> String {
        // TODO When the name is missing, we could fallback on other OSM tags. See
        // map_model::Road::get_name.
        let road_names = self.network.intersections[&i]
            .roads
            .iter()
            .map(|r| {
                self.network.roads[r]
                    .name
                    .clone()
                    .unwrap_or_else(|| "???".to_string())
            })
            .collect::<BTreeSet<_>>();
        abstutil::plain_list_names(road_names)
    }

    /// Given the JSON waypoints array produced by route-snapper, generate GeoJSON LineStrings,
    /// covering the entire route, each with a `speed_limit` property.
    #[wasm_bindgen(js_name = speedLimitForRoute)]
    pub fn speed_limit_for_route(&self, raw_waypoints: JsValue) -> Result<String, JsValue> {
        let raw_waypoints: Vec<RawRouteWaypoint> = serde_wasm_bindgen::from_value(raw_waypoints)?;
        let waypoints = self.parse_waypoints(raw_waypoints).map_err(err_to_js)?;

        // Generate output LineStrings in order, covering the whole route. For snapped sections,
        // chop it up whenever the speed limit changes.
        let mut output = Vec::new();
        for pair in waypoints.windows(2) {
            if let (Waypoint::Snapped(_, i1), Waypoint::Snapped(_, i2)) = (&pair[0], &pair[1]) {
                // TODO Use new pathfinding
                if let Some(path) =
                    self.network
                        .simple_path(*i1, *i2, &[LaneType::Driving, LaneType::Biking])
                {
                    // Walk along the path, building up a LineString as long as the speed limit is
                    // the same
                    let mut pts = Vec::new();
                    let mut osm_ids = Vec::new();

                    for (r, dir) in path {
                        let road = &self.network.roads[&r];
                        let mut road_pts = road.reference_line.clone().into_points();
                        if dir == Direction::Back {
                            road_pts.reverse();
                        }

                        // TODO Need to add speed_limit to osm2streets! For now, actually split
                        // when the OSM ID changes, just to wire something up
                        if road.osm_ids == osm_ids {
                            pts.extend(road_pts);
                        } else {
                            // Start a new segment
                            if !pts.is_empty() {
                                let mut feature = Feature::from(
                                    PolyLine::deduping_new(std::mem::take(&mut pts))
                                        .map_err(err_to_js)?
                                        .to_geojson(Some(&self.network.gps_bounds)),
                                );
                                feature.set_property("type", "snapped");
                                feature.set_property("osm_ids", abstutil::to_json(&osm_ids));
                                output.push(feature);
                            }
                            osm_ids = road.osm_ids.clone();
                        }
                    }

                    // Handle the end
                    if !pts.is_empty() {
                        let mut feature = Feature::from(
                            PolyLine::deduping_new(std::mem::take(&mut pts))
                                .map_err(err_to_js)?
                                .to_geojson(Some(&self.network.gps_bounds)),
                        );
                        feature.set_property("type", "snapped");
                        feature.set_property("osm_ids", abstutil::to_json(&osm_ids));
                        output.push(feature);
                    }
                } else {
                    return Err(err_to_js("no path between two waypoints"));
                }
            } else {
                let mut feature = Feature::from(
                    PolyLine::new(vec![pair[0].pt(), pair[1].pt()])
                        .map_err(err_to_js)?
                        .to_geojson(Some(&self.network.gps_bounds)),
                );
                feature.set_property("type", "free");
                output.push(feature);
            }
        }

        let gj = geojson::GeoJson::from(geojson::FeatureCollection {
            bbox: None,
            features: output,
            foreign_members: None,
        });
        Ok(abstutil::to_json(&gj))
    }
}

fn err_to_js<E: std::fmt::Display>(err: E) -> JsValue {
    JsValue::from_str(&err.to_string())
}

// Defined by https://github.com/dabreegster/route_snapper/blob/main/route-snapper/src/lib.rs. Too
// simple to take a dependency.
#[derive(Deserialize)]
struct RawRouteWaypoint {
    lon: f64,
    lat: f64,
    snapped: bool,
}

enum Waypoint {
    Free(Pt2D),
    Snapped(Pt2D, IntersectionID),
}

impl Waypoint {
    fn pt(&self) -> Pt2D {
        match self {
            Waypoint::Free(pt) => *pt,
            Waypoint::Snapped(pt, _) => *pt,
        }
    }
}
