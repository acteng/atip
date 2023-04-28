<script lang="ts">
  import type {
    GeoJSONSource,
    DataDrivenPropertyValueSpecification,
  } from "maplibre-gl";
  import {
    drawLine,
    isPolygon,
    isPoint,
    isLine,
    drawCircle,
    drawPolygon,
    overwriteSource,
    overwriteLayer,
  } from "../../maplibre_helpers";
  import { colors, circleRadius, lineWidth } from "../../colors";
  import { gjScheme, map } from "../../stores";
  import type { Schema } from "../../types";

  export let schema: Schema;

  // TODO Document here the z-ordering between all the layers defined
  // everywhere. Or maybe even pass a list to overwriteLayer and have it figure
  // things out!

  let source = "interventions";

  overwriteSource($map, source, {
    type: "geojson",
    data: $gjScheme,
  });
  // Keep the final data synced to what's drawn here
  $: {
    let copy = JSON.parse(JSON.stringify($gjScheme));
    // Add points for the ends of every LineString
    let endpoints = [];
    for (let f of copy.features) {
      if (f.geometry.type == "LineString") {
        for (let pt of [
          f.geometry.coordinates[0],
          f.geometry.coordinates[f.geometry.coordinates.length - 1],
        ]) {
          endpoints.push({
            type: "Feature",
            properties: {
              endpoint: true,
            },
            geometry: {
              type: "Point",
              coordinates: pt,
            },
          });
        }
      }
    }
    copy.features = copy.features.concat(endpoints);

    ($map.getSource(source) as GeoJSONSource).setData(copy);
  }

  // The fallback white should never be used in practice
  const colorByInterventionType: DataDrivenPropertyValueSpecification<string> =
    [
      "match",
      ["get", "intervention_type"],
      "area",
      colors.area,
      "route",
      colors.route,
      "crossing",
      colors.crossing,
      "other",
      colors.other,
      "white",
    ];
  // For planning mode
  const colorByReferenceType: DataDrivenPropertyValueSpecification<string> = [
    "match",
    ["get", "reference_type", ["get", "planning"]],
    "preapp",
    colors.preapp,
    "outline",
    colors.outline,
    "reserved matters",
    colors["reserved matters"],
    "local plan",
    colors["local plan"],
    "white",
  ];

  const hideWhileEditing = ["!=", "hide_while_editing", true];
  const notEndpoint = ["!=", "endpoint", true];

  overwriteLayer($map, {
    id: "interventions-points",
    source,
    filter: ["all", isPoint, hideWhileEditing, notEndpoint],
    ...drawCircle(colorByInterventionType, circleRadius),
    // TODO Outline?
  });

  // Draw underneath the route tool
  // TODO Also want this to be beneath route-points, but we can only specify one
  // TODO Also draw beneath draw-split-route
  overwriteLayer(
    $map,
    {
      id: "interventions-lines",
      source,
      filter: ["all", isLine, hideWhileEditing],
      ...drawLine(colorByInterventionType, lineWidth),
    },
    "route-lines"
  );
  // Draw endpoints to emphasize where two LineStrings meet
  overwriteLayer($map, {
    id: "interventions-lines-endpoints",
    source,
    filter: ["==", "endpoint", true],
    type: "circle",
    paint: {
      "circle-radius": 0.5 * lineWidth,
      "circle-opacity": 0.0,
      "circle-stroke-color": colors.lineEndpointColor,
      "circle-stroke-width": 2.0,
    },
  });

  overwriteLayer(
    $map,
    {
      id: "interventions-polygons",
      source,
      filter: ["all", isPolygon, hideWhileEditing],
      ...drawPolygon(
        schema == "planning" ? colorByReferenceType : colorByInterventionType,
        0.5
      ),
      // TODO Outline too?
    },
    "hover-polygons"
  );
</script>
