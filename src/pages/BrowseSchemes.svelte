<script lang="ts">
  import type { GeoJSON } from "geojson";
  import Map from "../lib/Map.svelte";
  import Layout from "../lib/common/Layout.svelte";
  import FileInput from "../lib/common/FileInput.svelte";
  import InterventionLayer from "../lib/draw/InterventionLayer.svelte";
  import { map, gjScheme } from "../stores";
  import MapTooltips from "../lib/common/MapTooltips.svelte";
  import CollapsibleCard from "../lib/common/CollapsibleCard.svelte";
  import BaselayerSwitcher from "../lib/BaselayerSwitcher.svelte";
  import Legend from "../lib/Legend.svelte";
  import { bbox } from "../maplibre_helpers";

  const params = new URLSearchParams(window.location.search);
  let style: string = params.get("style") || "streets";
  const schema = "v1";

  interface Scheme {
    file_name: string;
    authority_code: string;
    authority_name: string;
    internal_scheme_id: string;
    scheme_priority: number;
    num_features: number;
  }

  let schemes: Scheme[] = [];

  function loadFile(text: string) {
    try {
      let gj = JSON.parse(text);
      gjScheme.set(gj);
      addSchemeToSidebar(gj);

      $map?.fitBounds(bbox(gj), { padding: 20, animate: false });
    } catch (err) {
      window.alert(`Couldn't load schemes from a file: ${err}`);
    }
  }

  function addSchemeToSidebar(gj: GeoJSON) {
    let byFilename = {};

    for (let feature of gj.features) {
      let p = feature.properties;
      byFilename[p.atip_file_name] ||= {
        file_name: p.atip_file_name,
        authority_code: p.authority_code,
        authority_name: p.authority_name,
        internal_scheme_id: p.internal_scheme_id,
        scheme_priority: p.scheme_priority,
        num_features: 0,
      };
      byFilename[p.atip_file_name].num_features++;
    }

    schemes = Object.values(byFilename);
  }

  function tooltip(props: { [name: string]: any }): string {
    return JSON.stringify(props);
  }

  function showScheme(scheme: Scheme) {
    // TODO Highlight on the map? Or fade everything else?
    let gj = {
      type: "FeatureCollection",
      features: $gjScheme.features.filter(
        (f) => f.properties.atip_file_name == scheme.file_name
      ),
    };
    $map?.fitBounds(bbox(gj), { padding: 20, animate: false });
  }

  function editScheme(scheme: Scheme) {
    let gj = {
      type: "FeatureCollection",
      features: $gjScheme.features.filter(
        (f) => f.properties.atip_file_name == scheme.file_name
      ),
    };
    let filename = scheme.authority_name;
    // Assuming the schema is always v1

    // Put the file in local storage, so it'll be loaded from the next page
    window.localStorage.setItem(filename, JSON.stringify(gj));
    window.open(`scheme.html?authority=${scheme.authority_name}`, "_blank");
  }
</script>

<Layout>
  <div slot="sidebar">
    <button type="button" on:click={() => window.open("index.html")}>
      Home</button
    >
    <h1>Browse schemes</h1>
    <FileInput label="Load from GeoJSON" uniqueId="load_geojson" {loadFile} />

    <ul>
      {#each schemes as scheme}
        <CollapsibleCard
          label={`${scheme.internal_scheme_id}: ${scheme.num_features} features`}
        >
          <ul>
            <li>Filename: {scheme.file_name}</li>
            <li>Priority: {scheme.scheme_priority}</li>
            <li>
              Authority: {scheme.authority_name} ({scheme.authority_code})
            </li>
            <li>
              <button type="button" on:click={() => showScheme(scheme)}
                >Show on map</button
              >
            </li>
            <li>
              <button type="button" on:click={() => editScheme(scheme)}
                >Edit scheme</button
              >
            </li>
          </ul>
        </CollapsibleCard>
      {/each}
    </ul>
  </div>
  <div slot="main">
    <Map {style}>
      <InterventionLayer {schema} />
      <BaselayerSwitcher {style} />
      <Legend {schema} />
      <MapTooltips
        layers={[
          "interventions-points",
          "interventions-lines",
          "interventions-polygons",
        ]}
        contents={tooltip}
      />
    </Map>
  </div>
</Layout>
