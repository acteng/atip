use anyhow::Result;
use geom::{LonLat, Pt2D};

use super::RouteInfo;

impl RouteInfo {
    /// Extract the endpoints of a LineString in map-space.
    pub(crate) fn linestring_endpoints(&self, feature: &geojson::Feature) -> Result<(Pt2D, Pt2D)> {
        // TODO Duplicate non-adjacent points; make a more permissive version of PolyLine.
        //let polyline = PolyLine::from_geojson(feature, Some(&self.network.gps_bounds))?;

        if let Some(geojson::Geometry {
            value: geojson::Value::LineString(ref pts),
            ..
        }) = feature.geometry
        {
            let pt1 = LonLat::new(pts[0][0], pts[0][1]);
            let last = pts.last().unwrap();
            let pt2 = LonLat::new(last[0], last[1]);
            Ok((
                pt1.to_pt(&self.network.gps_bounds),
                pt2.to_pt(&self.network.gps_bounds),
            ))
        } else {
            bail!("not a LineString");
        }
    }
}
