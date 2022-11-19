// https://github.com/mapbox/mapbox-gl-draw/blob/main/docs/EXAMPLES.md as
// reference

import defaultStyle from "./base_style.js";

const baseColor = "black";
const hoverColor = "yellow";
const editingColor = "red";

const circleRadius = 7;
const lineWidth = 10;

const roundedLine = {
  "line-cap": "round",
  "line-join": "round",
};

const isPolgon = ["==", "$type", "Polygon"];
const isLine = ["==", "$type", "LineString"];
const isPoint = ["==", "$type", "Point"];

function drawLine(color, width, opacity = 1.0) {
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

function drawPolygon(color, opacity) {
  return {
    type: "fill",
    paint: {
      "fill-color": color,
      "fill-opacity": opacity,
    },
  };
}

function drawCircle(color, radius, opacity = 1.0) {
  return {
    type: "circle",
    paint: {
      "circle-radius": radius,
      "circle-color": color,
      "circle-opacity": opacity,
    },
  };
}

export const mapStyle = [
  // Around the study area
  {
    id: "boundary",
    source: "boundary",
    ...drawLine("black", 3, 0.5),
  },
  {
    id: "hover-polygons",
    source: "hover",
    filter: isPolgon,
    ...drawPolygon(hoverColor, 0.5),
  },
  {
    id: "hover-lines",
    source: "hover",
    filter: isLine,
    // TODO I'd like to cover up the base layers, but I can't figure out how to z-order on top of drawControls.
    ...drawLine(hoverColor, 1.5 * lineWidth, 1.0),
  },
  {
    id: "hover-points",
    source: "hover",
    filter: isPoint,
    ...drawCircle(hoverColor, 1.5 * circleRadius, 0.5),
  },
  {
    id: "editing-polygons",
    source: "editing",
    filter: isPolgon,
    ...drawPolygon(editingColor, 0.5),
  },
  {
    id: "editing-lines",
    source: "editing",
    filter: isLine,
    ...drawLine(editingColor, 1.5 * lineWidth),
  },
  {
    id: "editing-points",
    source: "editing",
    filter: isPoint,
    ...drawCircle(editingColor, 1.5 * circleRadius),
  },
];

export const drawControlsStyle = defaultStyle.concat([
  {
    id: "base-points",
    filter: ["all", isPoint, ["==", "meta", "feature"]],
    ...drawCircle(baseColor, circleRadius),
  },
  {
    id: "draggable-points",
    filter: ["all", isPoint, ["!=", "meta", "feature"]],
    // TODO The 1.5 is bulky and ugly, but I can't figure out how to get z-ordering working
    ...drawCircle("blue", 1.5 * circleRadius),
  },
  {
    id: "base-line",
    filter: isLine,
    ...drawLine(baseColor, lineWidth),
  },
  {
    id: "base-polygon-fill",
    filter: isPolgon,
    ...drawPolygon(baseColor, 0.1),
  },
  {
    id: "base-polygon-outline",
    filter: isPolgon,
    ...drawLine(baseColor, lineWidth / 2.0),
  },
]);
