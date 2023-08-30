<script lang="ts">
  import type { GeoJSON, GeoJSONSource } from "maplibre-gl";
  import readXlsxFile from "read-excel-file";
  import { map } from "../../../stores";
  import { CollapsibleCard, ColorLegend, InteractiveLayer } from "../../common";
  import { Checkbox, CheckboxGroup, FormElement } from "../../govuk";
  import {
    cleanupSource,
    emptyGeojson,
    overwriteCircleLayer,
    setPrecision,
  } from "../../maplibre";

  let fileInput: HTMLInputElement;

  let source = "criticals";
  let color = "red";
  let show = true;
  let numberIssues = 0;

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
    radius: 15,
    strokeColor: "black",
    strokeWidth: 3,
  });
  $map.addLayer({
    id: `${source}-counts`,
    source,
    type: "symbol",
    filter: ["has", "point_count"],
    layout: {
      "text-field": "{point_count_abbreviated}",
      "text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
      "text-size": 12,
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

  async function parseExcel(): Promise<GeoJSON> {
    let mapping = {
      ID: "id",
      Inspector: "inspector",
      "Submission Time": "submission_time",
      "Please enter the Scheme Reference number, (e.g. ATF2_WYO_01)":
        "scheme_reference",
      "Please enter current Design Stage": "current_design_stage",
      "Select Critical Issue type below:": "critical_type",
      "Please Enter Latitude and Longitude \n(Right click on location in Google, left click on information to copy to clipboard, paste below)":
        "lat_lon",
      Column1: "location_description",
      "Enter any additional information (e.g. any comments or notes about this critical issue)":
        "notes",
    };

    let { rows } = await readXlsxFile(fileInput.files![0], {
      map: mapping,
      sheet: "Form Input",
    });

    let gj = {
      type: "FeatureCollection",
      features: [],
    };
    for (let row of rows) {
      let coordinates = setPrecision(
        row.lat_lon.split(",").map(parseFloat).reverse()
      );
      row.submission_time = row.submission_time.toLocaleString();
      gj.features.push({
        type: "Feature",
        properties: row,
        geometry: {
          type: "Point",
          coordinates,
        },
        id: gj.features.length + 1,
      });
    }
    return gj;
  }

  async function onChange(e: Event) {
    let gj = await parseExcel();
    ($map.getSource(source) as GeoJSONSource).setData(gj);
    numberIssues = gj.features.length;
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
    $map
      .getSource(source)
      .getClusterExpansionZoom(e.detail.properties.cluster_id, (err, zoom) => {
        if (!err) {
          $map.easeTo({
            center: e.detail.geometry.coordinates,
            zoom,
          });
        }
      });
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
/>
