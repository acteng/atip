<script lang="ts">
  import type { GeoJSONSource, MapGeoJSONFeature } from "maplibre-gl";
  import { map } from "../../../stores";
  import { CollapsibleCard, ColorLegend, InteractiveLayer } from "../../common";
  import {
    Checkbox,
    CheckboxGroup,
    ErrorMessage,
    FormElement,
  } from "../../govuk";
  import {
    cleanupSource,
    emptyGeojson,
    overwriteCircleLayer,
  } from "../../maplibre";
  import { parseCriticalIssuesExcel } from "../data";

  let fileInput: HTMLInputElement;

  let source = "criticals";
  let color = "red";
  let show = true;
  let numberIssues = 0;
  let errorMessage = "";

  cleanupSource($map, source);
  $map.addSource(source, {
    type: "geojson",
    data: emptyGeojson(),
    cluster: true,
    clusterMaxZoom: 14,
    clusterRadius: 50,
  });

  // Render clusters
  overwriteCircleLayer($map, {
    id: `${source}-clusters`,
    source,
    filter: ["has", "point_count"],
    color,
    opacity: 0.9,
    // 20 pixels for clusters with < 15 points, 30 pixels for < 30 points, and 40 pixels for more
    radius: ["step", ["get", "point_count"], 20, 15, 30, 30, 40],
  });
  $map.addLayer({
    id: `${source}-counts`,
    source,
    type: "symbol",
    filter: ["has", "point_count"],
    layout: {
      "text-field": "{point_count_abbreviated}",
    },
  });

  // Render individual criticals
  overwriteCircleLayer($map, {
    id: `${source}-points`,
    source,
    filter: ["!", ["has", "point_count"]],
    color,
    opacity: 0.9,
    radius: 15,
    strokeColor: "black",
    strokeWidth: 3,
  });

  // InteractiveLayers don't manage one layer
  $: {
    if ($map.getLayer(`${source}-counts`)) {
      $map.setLayoutProperty(
        `${source}-counts`,
        "visibility",
        show ? "visible" : "none"
      );
    }
  }

  async function onChange(e: Event) {
    try {
      let gj = await parseCriticalIssuesExcel(fileInput.files![0]);
      ($map.getSource(source) as GeoJSONSource).setData(gj);
      numberIssues = gj.features.length;
      errorMessage = "";
    } catch (err) {
      errorMessage = `The file you loaded is broken: ${err}`;
    }
  }

  function tooltip(feature: MapGeoJSONFeature): string {
    let x = `<div style="max-width: 30vw;">`;
    x += `<h2>${feature.properties.critical_type}</h2>`;
    x += `<p><u>Location</u>: ${feature.properties.location_description}</p>`;
    x += `<p><u>Notes</u>: ${feature.properties.notes}</p>`;
    x += `<hr />`;
    x += `<p>Critical issue ID: <b>${feature.properties.id}</b></p>`;
    x += `<p>Submitted by <b>${
      feature.properties.inspector ?? "???"
    }</b> at <b>${feature.properties.submission_time}</b></p>`;
    x += `<p>For scheme <b>${feature.properties.scheme_reference}</b> in stage <b>${feature.properties.current_design_stage}</b></p>`;
    x += `</div>`;
    return x;
  }

  function clickCluster(e: CustomEvent<MapGeoJSONFeature>) {
    ($map.getSource(source) as GeoJSONSource).getClusterExpansionZoom(
      e.detail.properties.cluster_id,
      (err, zoom) => {
        if (!err) {
          $map.easeTo({
            // @ts-ignore Something's wrong with MapGeoJSONFeature types
            center: e.detail.geometry.coordinates,
            zoom: zoom as number,
          });
        }
      }
    );
  }
</script>

<CollapsibleCard label="Critical Issues">
  <FormElement label="Load from .xlsx" id="load-criticals">
    <input
      bind:this={fileInput}
      on:change={onChange}
      class="govuk-file-upload"
      id="load-criticals"
      type="file"
    />
  </FormElement>
  <ErrorMessage {errorMessage} />
  {#if numberIssues > 0}
    <CheckboxGroup small>
      <Checkbox id="show-criticals" bind:checked={show}>
        <ColorLegend {color} />
        Show {numberIssues.toLocaleString()} issues
      </Checkbox>
    </CheckboxGroup>
  {/if}
</CollapsibleCard>

<InteractiveLayer
  layer={source + "-points"}
  {tooltip}
  {show}
  clickable={false}
/>
<InteractiveLayer
  layer={source + "-clusters"}
  {show}
  clickable
  on:click={clickCluster}
  ignoreHigherLayers={[source + "-counts"]}
/>
