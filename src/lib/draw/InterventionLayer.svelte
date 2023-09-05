<script lang="ts">
  import { circleRadius, colors, lineWidth } from "colors";
  import {
    isLine,
    isPoint,
    isPolygon,
    overwriteCircleLayer,
    overwriteLineLayer,
    overwritePolygonLayer,
    overwriteSource,
  } from "lib/maplibre";
  import type {
    DataDrivenPropertyValueSpecification,
    FilterSpecification,
    GeoJSONSource,
  } from "maplibre-gl";
  import { gjScheme, map } from "stores";

  export let colorInterventions: DataDrivenPropertyValueSpecification<string>;

  let source = "interventions";

  overwriteSource($map, source, $gjScheme);
  // Keep the final data synced to what's drawn here
  $: {
    let copy = JSON.parse(JSON.stringify($gjScheme));
    // Add points for the ends of every LineString
    let endpoints = [];
    for (let f of copy.features) {
      if (f.geometry.type == "LineString" && !f.properties.hide_while_editing) {
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

  const hideWhileEditing: FilterSpecification = [
    "!=",
    "hide_while_editing",
    true,
  ];
  const notEndpoint: FilterSpecification = ["!=", "endpoint", true];

  overwriteCircleLayer($map, {
    id: "interventions-points",
    source,
    filter: [
      "all",
      isPoint,
      hideWhileEditing,
      notEndpoint,
    ] as FilterSpecification,
    color: colorInterventions,
    radius: circleRadius,
    // TODO Outline?
  });

  overwriteLineLayer($map, {
    id: "interventions-lines",
    source,
    filter: ["all", isLine, hideWhileEditing] as FilterSpecification,
    color: colorInterventions,
    width: lineWidth,
  });
  // Draw endpoints to emphasize where two LineStrings meet
  overwriteCircleLayer($map, {
    id: "interventions-lines-endpoints",
    source,
    filter: ["==", "endpoint", true],
    radius: 0.5 * lineWidth,
    opacity: 0.0,
    strokeColor: colors.lineEndpointColor,
    strokeWidth: 2.0,
  });

  overwritePolygonLayer($map, {
    id: "interventions-polygons",
    source,
    filter: ["all", isPolygon, hideWhileEditing] as FilterSpecification,
    color: colorInterventions,
    opacity: 0.2,
  });
  overwriteLineLayer($map, {
    id: "interventions-polygon-outlines",
    source,
    filter: ["all", isPolygon, hideWhileEditing] as FilterSpecification,
    color: colorInterventions,
    opacity: 0.5,
    width: 0.7 * lineWidth,
  });
</script>
