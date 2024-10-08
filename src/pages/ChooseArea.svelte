<script lang="ts">
  import type { Schema } from "types";
  import "../style/main.css";
  import type { FeatureCollection } from "geojson";
  // @ts-expect-error no declarations
  import { initAll } from "govuk-frontend";
  import {
    DefaultButton,
    ErrorMessage,
    FileInput,
    Radio,
    SecondaryButton,
    AutocompleteTextInput,
  } from "govuk-svelte";
  import { onMount } from "svelte";
  import "maplibre-gl/dist/maplibre-gl.css";
  import { findSmallestAuthority, type AuthorityBoundaries } from "boundaries";
  import {
    appVersion,
    getAuthoritiesGeoJson,
    LoggedIn,
    Alpha,
    MapLibreMap,
    Popup,
    setLocalStorageItem,
  } from "lib/common";
  import About from "lib/sketch/About.svelte";
  import { schema as schemaStore } from "stores";
  import {
    FillLayer,
    GeoJSON,
    hoverStateFilter,
    LineLayer,
    type LayerClickInfo,
  } from "svelte-maplibre";
  import Header from "./ChooseAreaHeader.svelte";

  let authoritiesGj: AuthorityBoundaries = {
    type: "FeatureCollection",
    features: [],
  };

  let showAbout = false;
  const params = new URLSearchParams(window.location.search);
  let pageErrorMessage: string = params.get("error") || "";
  let uploadErrorMessage: string = "";

  let inputValue: string;
  let authoritySet: Set<string> = new Set();
  $: validEntry = authoritySet.has(inputValue);

  let showBoundaries: "TA" | "LAD" = "TA";

  onMount(async () => {
    // For govuk components. Must happen here.
    initAll();

    authoritiesGj = await getAuthoritiesGeoJson();
    for (let feature of authoritiesGj.features) {
      authoritySet.add(feature.properties.full_name);
    }
  });

  function loadFile(filename: string, text: string) {
    try {
      let gj = JSON.parse(text);

      let smallestAuthority = findSmallestAuthority(gj.features, authoritiesGj);
      if (!smallestAuthority) {
        throw new Error(
          "Can't figure out the authority boundary that fully contains this scheme",
        );
      }
      // Ignore the authority that the file has set; always use the calculated boundary
      // TODO Will that ever be annoying? Keep the pre-set value if it's valid?
      gj.authority = smallestAuthority;

      let filename = gj.authority;
      let schema = detectSchema(gj);
      if (schema != "v1") {
        filename += `_${schema}`;
      }

      // Put the file in local storage, so it'll be loaded from the next page
      setLocalStorageItem(filename, JSON.stringify(gj));
      window.location.href = `scheme.html?authority=${gj.authority}&schema=${schema}`;
    } catch (err) {
      pageErrorMessage = `Couldn't load scheme from a file: ${err}`;
    }
  }

  function detectSchema(gj: FeatureCollection): Schema {
    if (gj.features.length > 0) {
      let props = gj.features[0].properties;
      for (let schema of ["pipeline"]) {
        if (props && schema in props) {
          return schema as Schema;
        }
      }
    }

    // The file itself doesn't have any data saying what schema it belongs to.
    // Trust the URL instead.
    return $schemaStore;
  }

  function onClick(e: CustomEvent<LayerClickInfo>) {
    window.location.href = `scheme.html?authority=${
      e.detail.features[0].properties!.full_name
    }&schema=${$schemaStore}`;
  }

  function start() {
    window.location.href = `scheme.html?authority=${inputValue}&schema=${$schemaStore}`;
  }
</script>

<div class="govuk-grid-row">
  <div class="govuk-grid-column-one-half govuk-prose">
    <Header />

    <div class="left">
      <Alpha />
      <div style="border-bottom: 1px solid #b1b4b6">
        <LoggedIn />
        <p>App version: {appVersion()}</p>
      </div>

      <h1>Scheme Sketcher</h1>

      <SecondaryButton on:click={() => (showAbout = !showAbout)}>
        About
      </SecondaryButton>
      <ErrorMessage errorMessage={pageErrorMessage} />

      {#if authoritiesGj.features.length > 0}
        <AutocompleteTextInput
          label="Select Transport Authority or Local Authority District"
          bind:value={inputValue}
          options={authoritiesGj.features.map((f) => [
            f.properties.full_name,
            `${f.properties.name} (${f.properties.level})`,
          ])}
        />
      {/if}

      <DefaultButton on:click={start} disabled={!validEntry}>
        Start
      </DefaultButton>

      <hr />

      <Radio
        label="Or pick from the map"
        choices={[
          ["TA", "Transport Authorities"],
          ["LAD", "Local Authority Districts"],
        ]}
        inlineSmall
        bind:value={showBoundaries}
      />

      <hr />

      <ErrorMessage errorMessage={uploadErrorMessage} />
      <FileInput label="Or upload an ATIP GeoJSON file" onLoad={loadFile} />
    </div>
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
              "fill-opacity": hoverStateFilter(0.0, 0.5),
            }}
            manageHoverState
            hoverCursor="pointer"
            on:click={onClick}
          >
            <Popup let:props>
              <p>{props.name} ({props.level})</p>
            </Popup>
          </FillLayer>
          <LineLayer
            id="boundaries-outline"
            filter={["==", ["get", "level"], showBoundaries]}
            paint={{
              "line-color": "rgb(200, 100, 240)",
              "line-width": 2.5,
            }}
            manageHoverState
          />
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
