<script lang="ts">
  import type { GeoJSON } from "geojson";
  import Map from "../lib/Map.svelte";
  import Layout from "../lib/common/Layout.svelte";
  import FileInput from "../lib/common/FileInput.svelte";
  import {
    emptyGeojson,
    overwriteSource,
    overwriteCircleLayer,
    overwriteLineLayer,
    overwritePolygonLayer,
    isPoint,
    isLine,
    isPolygon,
  } from "../maplibre_helpers";
  import { map } from "../stores";
  import { circleRadius, lineWidth } from "../colors";
  import MapTooltips from "../lib/common/MapTooltips.svelte";
  import CollapsibleCard from "../lib/common/CollapsibleCard.svelte";

  const source = "all-schemes";
  const color = "black";

  interface Scheme {
    file_name: string;
    authority_code: string;
    internal_scheme_id: string;
    scheme_priority: number;
    num_features: number;
  }

  let schemes: Scheme[] = [];

  function loadFile(e: Event) {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        let gj = JSON.parse(e.target!.result as string);
        addSchemeToMap(gj);
        addSchemeToSidebar(gj);
      } catch (err) {
        window.alert(`Couldn't load schemes from a file: ${err}`);
      }
    };
    let files = (e.target as HTMLInputElement).files!;
    reader.readAsText(files[0]);
  }

  function addSchemeToMap(gj: GeoJSON) {
    // TODO Assuming the map is loaded by now!
    overwriteSource($map, source, gj);

    overwritePolygonLayer($map, {
      // TODO This is reusing layer IDs from a component in the main app to get
      // z-ordering correct. The global list is for one page only...
      id: "interventions-polygons",
      source,
      filter: isPolygon,
      color,
      opacity: 0.5,
    });
    overwriteLineLayer($map, {
      id: "interventions-lines",
      source,
      filter: isLine,
      color,
      width: lineWidth,
    });
    overwriteCircleLayer($map, {
      id: "interventions-points",
      source,
      filter: isPoint,
      color,
      radius: circleRadius,
    });
  }

  function addSchemeToSidebar(gj: GeoJSON) {
    let byFilename = {};

    for (let feature of gj.features) {
      let p = feature.properties;
      byFilename[p.atip_file_name] ||= {
        file_name: p.atip_file_name,
        authority_code: p.authority_code,
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
</script>

<Layout>
  <div slot="nav">
    <button type="button" on:click={() => window.open("index.html")}>
      Home</button
    >
  </div>
  <div slot="sidebar">
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
            <li>Authority code: {scheme.authority_code}</li>
          </ul>
        </CollapsibleCard>
      {/each}
    </ul>
  </div>
  <div slot="main">
    <Map style="streets">
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
