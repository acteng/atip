<script lang="ts">
  import chroma from "chroma-js";
  import type { MapGeoJSONFeature } from "maplibre-gl";
  import {
    hoveredToggle,
    overwriteLineLayer,
    overwritePmtilesSource,
    overwritePolygonLayer,
  } from "../../maplibre_helpers";
  import { map } from "../../stores";
  import {
    ColorLegend,
    ExternalLink,
    HelpButton,
    InteractiveLayer,
  } from "../common";
  import { Checkbox, Select } from "../govuk";

  // TODO Rename, no abbreviations
  let name = "census_oa";
  let outlineLayer = `${name}-outline`;

  let colorScale = chroma
    .scale(["rgba(222,235,247,1)", "rgba(49,130,189,1)"])
    .mode("lch")
    .colors(10);
  let colorBy = "Pcnt HH With Car Bands";

  overwritePmtilesSource(
    $map,
    name,
    `https://atip.uk/layers/v1/${name}.pmtiles`
  );

  overwritePolygonLayer($map, {
    id: name,
    source: name,
    sourceLayer: name,
    color: colorRamp(),
    opacity: hoveredToggle(0.5, 0.9),
  });
  overwriteLineLayer($map, {
    id: outlineLayer,
    source: name,
    sourceLayer: name,
    color: "black",
    width: 0.5,
  });

  let show = false;
  // InteractiveLayer manages the polygon layer, but we also need to control the outline
  $: {
    if ($map.getLayer(outlineLayer)) {
      $map.setLayoutProperty(
        outlineLayer,
        "visibility",
        show ? "visible" : "none"
      );
    }
  }

  function tooltip(feature: MapGeoJSONFeature): string {
    let key = {
      "Pcnt HH With Car Bands": "Pcnt HH With Car",
      "Avg Cars per HH Bands": "Avg Cars per HH",
      pop_density_deciles: "pop_density",
    }[colorBy];
    return `<p>${feature.properties[key]}</p>`;
  }

  function onClick(e: CustomEvent<MapGeoJSONFeature>) {
    window.alert(JSON.stringify(e.detail.properties, "  ", null));
  }

  function colorRamp(): any[] {
    let fillColor = ["step", ["get", colorBy]];
    for (let band = 0; band < 10; band++) {
      fillColor.push(colorScale[band]);
      fillColor.push(band);
    }
    // TODO Unused?
    fillColor.push("red");
    console.log(fillColor);
    return fillColor;
  }

  function changeStyle() {
    $map.setPaintProperty(name, "fill-color", colorRamp());
  }
</script>

<Checkbox id={name} bind:checked={show}>
  Census OA
  <span slot="right">
    <HelpButton>
      <p>TODO!</p>
    </HelpButton>
  </span>
</Checkbox>

{#if show}
  <div>
    {#each colorScale as color}
      <ColorLegend {color} />
    {/each}
  </div>

  <Select
    label="OA color by"
    id="colorBy"
    choices={[
      ["Pcnt HH With Car Bands", "Percent of households with a car"],
      ["Avg Cars per HH Bands", "Average cars per household"],
      ["pop_density_deciles", "Population density"],
    ]}
    bind:value={colorBy}
    on:change={changeStyle}
  />
{/if}

<InteractiveLayer layer={name} {tooltip} {show} on:click={onClick} />
