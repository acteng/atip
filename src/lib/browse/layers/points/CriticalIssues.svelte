<script lang="ts">
  import { CollapsibleCard, ColorLegend, Popup } from "lib/common";
  import {
    Checkbox,
    CheckboxGroup,
    ErrorMessage,
    FormElement,
  } from "lib/govuk";
  import { emptyGeojson, layerId } from "lib/maplibre";
  import type { GeoJSONSource } from "maplibre-gl";
  import { map } from "stores";
  import {
    CircleLayer,
    GeoJSON,
    hoverStateFilter,
    SymbolLayer,
    type LayerClickInfo,
  } from "svelte-maplibre";
  import { parseCriticalIssuesExcel } from "../../data";

  let fileInput: HTMLInputElement;

  let source = "criticals";
  let color = "red";
  let show = true;
  let numberIssues = 0;
  let errorMessage = "";

  let gj = emptyGeojson();

  async function onChange(e: Event) {
    try {
      gj = await parseCriticalIssuesExcel(fileInput.files![0]);
      numberIssues = gj.features.length;
      errorMessage = "";
    } catch (err) {
      errorMessage = `The file you loaded is broken: ${err}`;
    }
  }

  function clickCluster(e: CustomEvent<LayerClickInfo>) {
    ($map.getSource(source) as GeoJSONSource).getClusterExpansionZoom(
      e.detail.features[0].properties!.cluster_id,
      (err, zoom) => {
        if (!err) {
          $map.easeTo({
            // @ts-ignore We know this is a point
            center: e.detail.features[0].geometry.coordinates,
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

<GeoJSON
  id={source}
  data={gj}
  cluster={{
    radius: 500,
    maxZoom: 14,
  }}
>
  <CircleLayer
    {...layerId(`${source}-clusters`)}
    applyToClusters
    paint={{
      "circle-color": color,
      "circle-opacity": 0.9,
      // 20 pixels for clusters with < 15 points, 30 pixels for < 30 points, and 40 pixels for more
      "circle-radius": ["step", ["get", "point_count"], 20, 15, 30, 30, 40],
    }}
    layout={{
      visibility: show ? "visible" : "none",
    }}
    hoverCursor="pointer"
    on:click={clickCluster}
  />
  <SymbolLayer
    {...layerId(`${source}-counts`)}
    applyToClusters
    layout={{
      "text-field": "{point_count_abbreviated}",
      visibility: show ? "visible" : "none",
    }}
  />
  <CircleLayer
    {...layerId(`${source}-points`)}
    applyToClusters={false}
    manageHoverState
    eventsIfTopMost
    paint={{
      "circle-color": color,
      "circle-opacity": hoverStateFilter(0.9, 0.5),
      "circle-radius": 15,
      "circle-stroke-color": "black",
      "circle-stroke-width": 3,
    }}
    layout={{
      visibility: show ? "visible" : "none",
    }}
  >
    <Popup let:props>
      <div style="max-width: 30vw;">
        <h2>{props.critical_type}</h2>
        <p>
          <u>Location</u>
          : {props.location_description}
        </p>
        <p>
          <u>Notes</u>
          : {props.notes}
        </p>
        <hr />
        <p>
          Critical issue ID: <b>{props.id}</b>
        </p>
        <p>
          Submitted by <b>{props.inspector ?? "???"}</b>
          at
          <b>{props.submission_time}</b>
        </p>
        <p>
          For scheme <b>{props.scheme_reference}</b>
          in stage
          <b>{props.current_design_stage}</b>
        </p>
      </div>
    </Popup>
  </CircleLayer>
</GeoJSON>
