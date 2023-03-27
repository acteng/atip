// Helpers for https://maplibre.org/maplibre-gl-js-docs/style-spec/

const roundedLine = {
  "line-cap": "round",
  "line-join": "round",
};

export const isPolygon = ["==", "$type", "Polygon"];
export const isLine = ["==", "$type", "LineString"];
export const isPoint = ["==", "$type", "Point"];

export function drawLine(color, width, opacity = 1.0) {
  return {
    type: "line",
    layout: roundedLine,
    paint: {
      "line-color": color,
      "line-width": width,
      "line-opacity": opacity,
    },
  };
}

export function drawPolygon(color, opacity) {
  return {
    type: "fill",
    paint: {
      "fill-color": color,
      "fill-opacity": opacity,
    },
  };
}

export function drawCircle(color, radius, opacity = 1.0) {
  return {
    type: "circle",
    paint: {
      "circle-radius": radius,
      "circle-color": color,
      "circle-opacity": opacity,
    },
  };
}

// MapLibre's API isn't idempotent; you can't overwrite an existing source or
// layer. This complicates Vite's hot-reload feature, unless every component
// correctly tears down all sources and layers. These methods workaround that
// lifetime management hassle by overwriting if necessary.
export function overwriteSource(map, id, source) {
  if (map.getSource(id)) {
    // First remove all layers using this source
    let layers = [];
    for (let layer of map.getStyle().layers) {
      if (layer.source == id) {
        layers.push(layer.id);
      }
    }
    for (let layer of layers) {
      map.removeLayer(layer);
    }

    map.removeSource(id);
  }
  map.addSource(id, source);
}

export function overwriteLayer(map, layer) {
  if (map.getLayer(layer.id)) {
    map.removeLayer(layer.id);
  }
  map.addLayer(layer);
}
