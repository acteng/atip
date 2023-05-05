use geom::{Distance, FindClosest, LonLat};
use map_model::{IntersectionID, Map};
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub struct Helper {
    map: Map,
    closest_intersection: FindClosest<IntersectionID>,
}

#[wasm_bindgen]
impl Helper {
    #[wasm_bindgen(constructor)]
    pub fn new(map_bytes: &[u8]) -> Result<Helper, JsValue> {
        // Panics shouldn't happen, but if they do, console.log them.
        console_error_panic_hook::set_once();

        web_sys::console::log_1(&format!("Got {} bytes, deserializing", map_bytes.len()).into());

        let map: Map = bincode::deserialize(map_bytes).map_err(err_to_js)?;

        let mut closest_intersection = FindClosest::new();
        for i in map.all_intersections() {
            closest_intersection.add_polygon(i.id, &i.polygon);
        }

        Ok(Helper {
            map,
            closest_intersection,
        })
    }

    // TODO How can we glue up anyhow?
    // TODO Can we take geojson::Feature so that it shows up in TS?
    #[wasm_bindgen(js_name = nameForRoute)]
    pub fn name_for_route(&self, raw_line_string: JsValue) -> Result<String, JsValue> {
        let feature: geojson::Feature = serde_wasm_bindgen::from_value(raw_line_string)?;
        // TODO Duplicate non-adjacent points; make a more permissive version of PolyLine.
        //let polyline = PolyLine::from_geojson(&feature, Some(self.map.get_gps_bounds())).map_err(err_to_js)?;
        let (pt1, pt2) = if let Some(geojson::Geometry {
            value: geojson::Value::LineString(ref pts),
            ..
        }) = feature.geometry
        {
            let pt1 = LonLat::new(pts[0][0], pts[0][1]);
            let last = pts.last().unwrap();
            let pt2 = LonLat::new(last[0], last[1]);
            (
                pt1.to_pt(self.map.get_gps_bounds()),
                pt2.to_pt(self.map.get_gps_bounds()),
            )
        } else {
            return Err(err_to_js("couldn't get line-string"));
        };

        // Find the closest intersections to the route endpoints
        let threshold = Distance::meters(100.0);
        let lang = None;
        let (i1, _) = self
            .closest_intersection
            .closest_pt(pt1, threshold)
            .ok_or_else(|| err_to_js("no intersection close to first pt"))?;
        let (i2, _) = self
            .closest_intersection
            .closest_pt(pt2, threshold)
            .ok_or_else(|| err_to_js("no intersection close to last pt"))?;
        let i1_name = self.map.get_i(i1).name(lang, &self.map);
        let i2_name = self.map.get_i(i2).name(lang, &self.map);

        Ok(format!("Route from {i1_name} to {i2_name}"))
    }
}

fn err_to_js<E: std::fmt::Display>(err: E) -> JsValue {
    JsValue::from_str(&err.to_string())
}
