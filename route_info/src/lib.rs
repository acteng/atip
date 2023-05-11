use std::collections::BTreeSet;

use geom::{Distance, FindClosest, LonLat};
use osm2streets::{IntersectionID, StreetNetwork};
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

        web_sys::console::log_1(&format!("Got {} bytes, deserializing", input_bytes.len()).into());

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
        // TODO Duplicate non-adjacent points; make a more permissive version of PolyLine.
        //let polyline = PolyLine::from_geojson(&feature, Some(self.network.gps_bounds)).map_err(err_to_js)?;
        let (pt1, pt2) = if let Some(geojson::Geometry {
            value: geojson::Value::LineString(ref pts),
            ..
        }) = feature.geometry
        {
            let pt1 = LonLat::new(pts[0][0], pts[0][1]);
            let last = pts.last().unwrap();
            let pt2 = LonLat::new(last[0], last[1]);
            (
                pt1.to_pt(&self.network.gps_bounds),
                pt2.to_pt(&self.network.gps_bounds),
            )
        } else {
            return Err(err_to_js("couldn't get line-string"));
        };

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
}

fn err_to_js<E: std::fmt::Display>(err: E) -> JsValue {
    JsValue::from_str(&err.to_string())
}
