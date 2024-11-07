<script lang="ts">
  import "../style/main.css";
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
  import { type AuthorityBoundaries } from "boundaries";
  import {
    getAuthoritiesGeoJson,
    LoggedIn,
    Alpha,
    MapLibreMap,
    Popup,
    describeAuthority,
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
  import {
    importFile,
    importOldFiles,
    countFilesPerAuthority,
  } from "lib/common/files";

  let authoritiesGj: AuthorityBoundaries = {
    type: "FeatureCollection",
    features: [],
  };

  let showAbout = false;
  const params = new URLSearchParams(window.location.search);
  let pageErrorMessage = params.get("error") || "";
  let uploadErrorMessage = "";

  let inputValue: string;
  let authoritySet: Set<string> = new Set();
  $: validEntry = authoritySet.has(inputValue);

  let showBoundaries: "TA" | "LAD" = "TA";

  let filesPerAuthority: [string, number][] = [];

  onMount(async () => {
    // For govuk components. Must happen here.
    initAll();

    authoritiesGj = await getAuthoritiesGeoJson();
    for (let feature of authoritiesGj.features) {
      authoritySet.add(feature.properties.full_name);
      importOldFiles(feature.properties.full_name);
    }

    filesPerAuthority = countFilesPerAuthority();
  });

  function onClick(e: CustomEvent<LayerClickInfo>) {
    window.location.href = `files.html?authority=${
      e.detail.features[0].properties!.full_name
    }&schema=${$schemaStore}`;
  }

  function start() {
    window.location.href = `files.html?authority=${inputValue}&schema=${$schemaStore}`;
  }

  function loadFile(filename: string, text: string) {
    try {
      window.location.href = importFile(filename, text, authoritiesGj);
    } catch (err) {
      uploadErrorMessage = `Couldn't import file: ${err}`;
    }
  }
</script>

<div class="govuk-grid-row">
  <div class="govuk-grid-column-one-half govuk-prose left-scroll">
    <Header />

    <div class="left">
      <Alpha />
      <div style="border-bottom: 1px solid #b1b4b6">
        <LoggedIn />
      </div>

      <div style="display: flex; justify-content: space-between">
        <h1>Scheme Sketcher</h1>

        <SecondaryButton on:click={() => (showAbout = !showAbout)}>
          About
        </SecondaryButton>
      </div>

      <ErrorMessage errorMessage={pageErrorMessage} />

      <div style="display: flex; justify-content: space-between">
        {#if authoritiesGj.features.length > 0}
          <AutocompleteTextInput
            label="Select Transport Authority or Local Authority District"
            bind:value={inputValue}
            options={authoritiesGj.features.map((f) => [
              f.properties.full_name,
              describeAuthority(f.properties.full_name),
            ])}
          />
        {/if}

        <DefaultButton on:click={start} disabled={!validEntry}>
          Start
        </DefaultButton>
      </div>

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
      <FileInput label="Or import a GeoJSON file" onLoad={loadFile} />

      {#if filesPerAuthority.length > 0}
        <hr />

        <p>Or choose an area with existing files</p>
        <table>
          <thead>
            <tr>
              <th>Area</th>
              <th>Number of files</th>
            </tr>
          </thead>
          <tbody>
            {#each filesPerAuthority as [authority, count]}
              <tr>
                <td>
                  <a
                    href={`files.html?authority=${authority}&schema=${$schemaStore}`}
                  >
                    {describeAuthority(authority)}
                  </a>
                </td>
                <td>{count}</td>
              </tr>
            {/each}
          </tbody>
        </table>
      {/if}
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
              <p>{describeAuthority(props.full_name)}</p>
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

  .left-scroll {
    height: 100vh;
    overflow: auto;
  }

  #map {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    width: 50%;
  }
</style>
