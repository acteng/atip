<script lang="ts">
  import "../style/main.css";
  import type { FeatureCollection } from "geojson";
  // @ts-ignore no declarations
  import { initAll } from "govuk-frontend";
  import {
    DefaultButton,
    ErrorMessage,
    FormElement,
    Radio,
    SecondaryButton,
  } from "lib/govuk";
  import { onMount } from "svelte";
  import "maplibre-gl/dist/maplibre-gl.css";
  import {
    appVersion,
    FileInput,
    getAuthoritiesGeoJson,
    LoggedIn,
    MapLibreMap,
    Popup,
  } from "lib/common";
  import { emptyGeojson } from "lib/maplibre";
  import About from "lib/sidebar/About.svelte";
  import { map } from "stores";
  import {
    FillLayer,
    GeoJSON,
    hoverStateFilter,
    type LayerClickInfo,
  } from "svelte-maplibre";
  import type { Schema } from "types";

  let authoritiesGj = emptyGeojson();

  let showAbout = false;
  const params = new URLSearchParams(window.location.search);
  let pageErrorMessage: string = params.get("error") || "";
  let uploadErrorMessage: string = "";

  let inputValue: string;
  let dataList: HTMLDataListElement;
  let authoritySet: Set<string> = new Set();
  $: validEntry = authoritySet.has(inputValue);

  let showBoundaries: "TA" | "LAD" = "TA";
  // TODO Upstream svelte-maplibre support for this
  $: $map?.setFilter("boundaries", ["==", ["get", "level"], showBoundaries]);

  onMount(async () => {
    // For govuk components. Must happen here.
    initAll();

    authoritiesGj = await getAuthoritiesGeoJson();
    for (let feature of authoritiesGj.features) {
      let option = document.createElement("option");
      option.value = feature.properties!.name;
      dataList.appendChild(option);
      authoritySet.add(feature.properties!.name);
    }
  });

  function loadFile(text: string) {
    try {
      let gj = JSON.parse(text);
      if (!gj.authority) {
        throw new Error(
          `File doesn't have an authority set; is it an ATIP file?`
        );
      }
      if (!authoritySet.has(gj.authority)) {
        throw new Error(`Unknown authority ${gj.authority}`);
      }

      let filename = gj.authority;
      let schema = detectSchema(gj);
      if (schema != "v1") {
        filename += `_${schema}`;
      }

      // Put the file in local storage, so it'll be loaded from the next page
      window.localStorage.setItem(filename, JSON.stringify(gj));
      window.location.href = `scheme.html?authority=${gj.authority}&schema=${schema}`;
    } catch (err) {
      pageErrorMessage = `Couldn't load scheme from a file: ${err}`;
    }
  }

  function detectSchema(gj: FeatureCollection): Schema {
    if (gj.features.length > 0) {
      let props = gj.features[0].properties;
      for (let schema of ["planning", "v2"]) {
        if (props && schema in props) {
          return schema as Schema;
        }
      }
    }
    return "v1";
  }

  function onClick(e: CustomEvent<LayerClickInfo>) {
    window.location.href = `scheme.html?authority=${
      e.detail.features[0].properties!.name
    }`;
  }

  function start() {
    window.location.href = `scheme.html?authority=${inputValue}`;
  }
</script>

<div class="govuk-grid-row">
  <div class="govuk-grid-column-one-half left">
    <h1 class="govuk-heading-l">Welcome to ATIP Scheme Sketcher v2</h1>
    <p>App version: {appVersion()}</p>
    <LoggedIn />
    <SecondaryButton on:click={() => (showAbout = !showAbout)}>
      About
    </SecondaryButton>
    <ErrorMessage errorMessage={pageErrorMessage} />

    <FormElement
      label="Select Transport Authority or Local Authority District"
      id="inputValue"
    >
      <input
        class="govuk-input govuk-input--width-20"
        id="inputValue"
        data-testid="transport-authority"
        list="authorities-list"
        bind:value={inputValue}
      />
      <datalist id="authorities-list" bind:this={dataList} />
    </FormElement>
    <DefaultButton on:click={start} disabled={!validEntry}>Start</DefaultButton>

    <hr />

    <Radio
      legend="Or pick from the map"
      id="showBoundaries"
      choices={[
        ["TA", "Transport Authorities"],
        ["LAD", "Local Authority Districts"],
      ]}
      inlineSmall
      bind:value={showBoundaries}
    />

    <hr />

    <ErrorMessage errorMessage={uploadErrorMessage} />
    <FileInput
      label="Or upload an ATIP GeoJSON file"
      {loadFile}
      id="load-geojson"
    />
  </div>
  <div class="govuk-grid-column-one-half">
    <div id="map">
      <MapLibreMap style="streets" startBounds={[-5.96, 49.89, 2.31, 55.94]}>
        <GeoJSON data={authoritiesGj} generateId>
          <FillLayer
            id="boundaries"
            filter={["==", ["get", "level"], showBoundaries]}
            paint={{
              "fill-color": "rgb(200, 100, 240)",
              "fill-outline-color": "rgb(200, 100, 240)",
              "fill-opacity": hoverStateFilter(0.4, 0.8),
            }}
            manageHoverState
            hoverCursor="pointer"
            on:click={onClick}
          >
            <Popup let:props>
              <p>{props.name}</p>
            </Popup>
          </FillLayer>
        </GeoJSON>
      </MapLibreMap>
    </div>
  </div>
</div>
<About bind:open={showAbout} />

<style>
  :global(body) {
    margin: 0;
    padding: 0;
  }

  .left {
    margin: 10px;
  }

  #map {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    width: 50%;
  }
</style>
