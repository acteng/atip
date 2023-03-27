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
