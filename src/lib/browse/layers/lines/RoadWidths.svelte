<script lang="ts">
  import {
    ExternalLink,
    HelpButton,
    InteractiveLayer,
    privateResourceBaseUrl,
  } from "lib/common";
  import { Checkbox } from "lib/govuk";
  import {
    hoveredToggle,
    makeColorRamp,
    overwriteLineLayer,
    overwritePmtilesSource,
  } from "lib/maplibre";
  import type { MapGeoJSONFeature } from "maplibre-gl";
  import { map } from "stores";
  import { colors, denseLineWidth } from "../../colors";
  import SequentialLegend from "../SequentialLegend.svelte";

  let name = "road_widths";
  let colorScale = colors.sequential_low_to_high;
  let limits = [0, 5, 10, 15, 20, 100];

  overwritePmtilesSource(
    $map,
    name,
    `${privateResourceBaseUrl()}/v1/${name}.pmtiles`
  );

  overwriteLineLayer($map, {
    id: name,
    source: name,
    sourceLayer: name,
    color: makeColorRamp(["get", "average"], limits, colorScale),
    // TODO Try showing the actual width, in meters and not pixels
    width: denseLineWidth,
    opacity: hoveredToggle(0.5, 1.0),
  });

  let show = false;

  function tooltip(feature: MapGeoJSONFeature): string {
    let x = `<p>Average width: ${feature.properties.average} meters</p>`;
    x += `<p>Minimum width: ${feature.properties.minimum} meters</p>`;
    return x;
  }
</script>

<Checkbox id={name} bind:checked={show}>
  OS Road widths
  <span slot="right">
    <HelpButton>
      <p>
        This is average and minimum road carriageway width (in meters) from
        Ordnance Survey. The coloring shows the average width, and the line
        thickness has no meaning. Be careful interpreting the data near dual
        carriageways and crossing islands.
      </p>
      <p>Data valid as of 1 September, 2023</p>
      <p>
        License: Contains OS data &copy; Crown copyright and database right
        2023. Made available under the <ExternalLink
          href="https://www.ordnancesurvey.co.uk/documents/licensing/psga-member-licence.pdf"
        >
          Public Sector Geospatial Agreement
        </ExternalLink>.
      </p>
    </HelpButton>
  </span>
</Checkbox>
{#if show}
  <SequentialLegend {colorScale} {limits} />
{/if}

<InteractiveLayer layer={name} {tooltip} {show} clickable={false} />
