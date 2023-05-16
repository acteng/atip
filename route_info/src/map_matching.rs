use anyhow::Result;
use geom::{Distance, LonLat, Pt2D};

use super::{RawRouteWaypoint, RouteInfo, Waypoint};

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

    pub(crate) fn parse_waypoints(
        &self,
        raw_waypoints: Vec<RawRouteWaypoint>,
    ) -> Result<Vec<Waypoint>> {
        // Naively match snapped waypoints up with this StreetNetwork's intersections. If
        // route-snapper is using a graph built from the same version of OSM data as the current
        // StreetNetwork, everything should be fine.
        let threshold = Distance::meters(100.0);
        let mut waypoints = Vec::new();
        for waypt in raw_waypoints {
            let pt = LonLat::new(waypt.lon, waypt.lat).to_pt(&self.network.gps_bounds);
            if waypt.snapped {
                let (i, _) = self
                    .closest_intersection
                    .closest_pt(pt, threshold)
                    .ok_or_else(|| anyhow!("no intersection close to waypoint"))?;
                waypoints.push(Waypoint::Snapped(pt, i));
            } else {
                waypoints.push(Waypoint::Free(pt));
            }
        }
        Ok(waypoints)
    }
}
