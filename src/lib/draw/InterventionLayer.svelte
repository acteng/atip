<script lang="ts">
  import { circleRadius, colors, lineWidth } from "colors";
  import type { FeatureCollection } from "geojson";
  import { isLine, isPoint, isPolygon } from "lib/maplibre";
  import type {
    DataDrivenPropertyValueSpecification,
    FilterSpecification,
  } from "maplibre-gl";
  import { gjScheme } from "stores";
  import { CircleLayer, FillLayer, GeoJSON, LineLayer } from "svelte-maplibre";

  export let colorInterventions: DataDrivenPropertyValueSpecification<string>;

  $: gj = renderWithEndpoints($gjScheme);
  function renderWithEndpoints(input: FeatureCollection): FeatureCollection {
    let copy = JSON.parse(JSON.stringify(input));
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
    return copy;
  }

  const hideWhileEditing: FilterSpecification = [
    "!=",
    "hide_while_editing",
    true,
  ];
  const notEndpoint: FilterSpecification = ["!=", "endpoint", true];
</script>

<GeoJSON data={gj}>
  <CircleLayer
    id="interventions-points"
    filter={["all", isPoint, hideWhileEditing, notEndpoint]}
    paint={{
      "circle-color": colorInterventions,
      "circle-radius": circleRadius,
    }}
  />

  <LineLayer
    id="interventions-lines"
    filter={["all", isLine, hideWhileEditing]}
    paint={{
      "line-color": colorInterventions,
      "line-width": lineWidth,
    }}
  />
  <CircleLayer
    id="interventions-lines-endpoints"
    filter={["==", "endpoint", true]}
    paint={{
      "circle-radius": 0.5 * lineWidth,
      "circle-opacity": 0,
      "circle-stroke-color": colors.lineEndpointColor,
      "circle-stroke-width": 2.0,
    }}
  />

  <FillLayer
    id="interventions-polygons"
    filter={["all", isPolygon, hideWhileEditing]}
    paint={{
      "fill-color": colorInterventions,
      "fill-opacity": 0.2,
    }}
  />
  <LineLayer
    id="interventions-polygons-outlines"
    filter={["all", isPolygon, hideWhileEditing]}
    paint={{
      "line-color": colorInterventions,
      "line-opacity": 0.5,
      "line-width": 0.7 * lineWidth,
    }}
  />
</GeoJSON>
