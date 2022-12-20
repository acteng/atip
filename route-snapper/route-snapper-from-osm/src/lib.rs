use std::collections::HashMap;

use osm2streets::StreetNetwork;

use route_snapper_graph::{Edge, NodeID, RouteSnapperMap};

pub fn streets_to_route_graph(streets: &StreetNetwork) -> RouteSnapperMap {
    let mut map = RouteSnapperMap {
        gps_bounds: streets.gps_bounds.clone(),
        nodes: Vec::new(),
        edges: Vec::new(),
    };

    let mut id_lookup = HashMap::new();
    for i in streets.intersections.values() {
        map.nodes.push(i.point);
        id_lookup.insert(i.id, NodeID(id_lookup.len() as u32));
    }
    for r in streets.roads.values() {
        map.edges.push(Edge {
            node1: id_lookup[&r.src_i],
            node2: id_lookup[&r.dst_i],
            geometry: r.reference_line.clone(),
            length: r.reference_line.length(),
        });
    }

    map
}
