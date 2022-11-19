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

export const mapStyle = [
  // Around the study area
  {
    id: "boundary",
    source: "boundary",
    type: "line",
    paint: {
      "line-color": "black",
      "line-opacity": 0.5,
      "line-width": 3,
    },
  },
  {
    id: "hover-polygons",
    source: "hover",
    filter: isPolgon,
    type: "fill",
    paint: {
      "fill-color": hoverColor,
      "fill-opacity": 0.5,
    },
  },
  {
    id: "hover-lines",
    source: "hover",
    filter: isLine,
    type: "line",
    paint: {
      "line-color": hoverColor,
      "line-opacity": 1.0,
      "line-width": lineWidth,
    },
  },
  {
    id: "hover-points",
    source: "hover",
    filter: isPoint,
    type: "circle",
    paint: {
      "circle-radius": 1.5 * circleRadius,
      "circle-color": hoverColor,
      "circle-opacity": 0.5,
    },
  },
  {
    id: "editing-polygons",
    source: "editing",
    filter: isPolgon,
    type: "line",
    paint: {
      "line-color": editingColor,
      "line-width": lineWidth,
    },
  },
  {
    id: "editing-lines",
    source: "editing",
    filter: isLine,
    type: "line",
    paint: {
      "line-color": editingColor,
      "line-width": lineWidth,
    },
  },
  {
    id: "editing-points",
    source: "editing",
    filter: isPoint,
    type: "circle",
    paint: {
      "circle-radius": 1.5 * circleRadius,
      "circle-color": editingColor,
    },
  },
];

export const drawControlsStyle = defaultStyle.concat([
  {
    id: "base-points",
    filter: ["all", isPoint, ["==", "meta", "feature"]],
    type: "circle",
    paint: {
      "circle-radius": circleRadius,
      "circle-color": baseColor,
    },
  },
  {
    id: "base-line",
    filter: isLine,
    type: "line",
    layout: roundedLine,
    paint: {
      "line-color": baseColor,
      "line-width": lineWidth,
    },
  },
  {
    id: "base-polygon-fill",
    filter: isPolgon,
    type: "fill",
    paint: {
      "fill-color": baseColor,
      "fill-opacity": 0.1,
    },
  },
  {
    id: "base-polygon-outline",
    filter: isPolgon,
    type: "line",
    layout: roundedLine,
    paint: {
      "line-color": baseColor,
      "line-width": lineWidth / 2.0,
    },
  },
]);
