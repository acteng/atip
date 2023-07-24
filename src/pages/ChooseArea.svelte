<script lang="ts">
  import "../style/main.css";
  import type { FeatureCollection } from "geojson";
  // @ts-ignore no declarations
  import { initAll } from "govuk-frontend";
  import { Map } from "maplibre-gl";
  import { onMount } from "svelte";
  import {
    DefaultButton,
    ErrorMessage,
    FormElement,
    Radio,
    SecondaryButton,
  } from "../lib/govuk";
  import "maplibre-gl/dist/maplibre-gl.css";
  import { FileInput, MapTooltips } from "../lib/common";
  import { getAuthoritiesGeoJson } from "../lib/common/data_getter";
  import About from "../lib/sidebar/About.svelte";
  import { bbox } from "../maplibre_helpers";
  import { map as mapStore } from "../stores";
  import type { Schema } from "../types";

  let showAbout = false;
  const params = new URLSearchParams(window.location.search);
  let pageErrorMessage: string = params.get("error") || "";
  let uploadErrorMessage: string = "";

  let inputValue: string;
  let dataList: HTMLDataListElement;
  let authoritySet: Set<string> = new Set();
  $: validEntry = authoritySet.has(inputValue);

  let loadedMap: Map | null = null;
  let source = "boundary";
  let layer = "boundary-layer";

  let showBoundaries: "TA" | "LAD" = "TA";
  function changeBoundaries() {
    loadedMap?.setFilter(layer, ["==", ["get", "level"], showBoundaries]);
  }

  onMount(async () => {
    // For govuk components. Must happen here.
    initAll();

    const json: FeatureCollection = await getAuthoritiesGeoJson();
    for (let feature of json.features) {
      let option = document.createElement("option");
      option.value = feature.properties!.name;
      dataList.appendChild(option);
      authoritySet.add(feature.properties!.name);
    }

    let map = new Map({
      container: "map",
      style:
        "https://api.maptiler.com/maps/streets/style.json?key=MZEJTanw3WpxRvt7qDfo",
    });
    // Use map within onMount, so it's guaranteed to exist
    loadedMap = map;
    mapStore.set(loadedMap);

    let hoverId: number | null = null;
    function unhover() {
      if (hoverId !== null) {
        map.setFeatureState({ source, id: hoverId }, { hover: false });
      }
    }

    map.on("load", function () {
      map.fitBounds(bbox(json), {
        padding: 20,
        animate: false,
      });

      map.addSource(source, {
        type: "geojson",
        data: json,
        generateId: true,
      });
      map.addLayer({
        id: layer,
        source: source,
        filter: ["==", ["get", "level"], showBoundaries],
        type: "fill",
        paint: {
          "fill-color": "rgb(200, 100, 240)",
          "fill-outline-color": "rgb(200, 100, 240)",
          "fill-opacity": [
            "case",
            ["boolean", ["feature-state", "hover"], false],
            0.8,
            0.4,
          ],
        },
      });

      map.on("mousemove", layer, (e) => {
        if (e.features!.length > 0) {
          unhover();
          hoverId = e.features![0].id as number;
          map.setFeatureState({ source: source, id: hoverId }, { hover: true });
        }
      });
      map.on("mouseleave", layer, () => {
        unhover();
        hoverId = null;
      });

      map.on("click", layer, function (e) {
        let name = e.features![0].properties!.name;
        window.location.href = `scheme.html?authority=${name}`;
      });
    });
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
      for (let schema of ["planning", "v2", "criticals"]) {
        if (props && schema in props) {
          return schema as Schema;
        }
      }
    }
    return "v1";
  }

  function start() {
    window.location.href = `scheme.html?authority=${inputValue}`;
  }

  function tooltip(props: { [name: string]: any }): string {
    return `<div class="govuk-prose"><p>${props.name}</p></div>`;
  }
</script>

<div class="govuk-grid-row">
  <div class="govuk-grid-column-one-half left">
    <h1 class="govuk-heading-l">Welcome to ATIP v2</h1>
    <SecondaryButton on:click={() => (showAbout = !showAbout)}>
      About
    </SecondaryButton>
    {#if pageErrorMessage}
      <ErrorMessage errorMessage={pageErrorMessage} />
    {/if}

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
      on:change={changeBoundaries}
    />

    <hr />

    {#if uploadErrorMessage}
      <ErrorMessage errorMessage={uploadErrorMessage} />
    {/if}
    <FileInput
      label="Or upload an ATIP GeoJSON file"
      {loadFile}
      id="load-geojson"
    />
  </div>
  <div class="govuk-grid-column-one-half">
    <div id="map" />
  </div>
  {#if loadedMap}
    <MapTooltips layers={[layer]} contents={tooltip} />
  {/if}
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
