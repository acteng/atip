<script lang="ts">
  import { circleRadius } from "colors";
  import type { Feature } from "geojson";
  import {
    ColorLegend,
    ExternalLink,
    HelpButton,
    publicResourceBaseUrl,
  } from "lib/common";
  import { Checkbox } from "lib/govuk";
  import { CircleLayer, GeoJSON, Popup } from "svelte-maplibre";
  import { colors } from "../../colors";
  import OsmLicense from "../OsmLicense.svelte";

  let name = "railway_stations";
  let color = colors.railway_stations;

  let show = false;

  function tooltip(feature: Feature): string {
    return feature.properties.name ?? "Unnamed railway station";
  }
</script>

<Checkbox id={name} bind:checked={show}>
  <ColorLegend {color} />
  Railway Stations
  <span slot="right">
    <HelpButton>
      <p>
        This shows <ExternalLink
          href="https://wiki.openstreetmap.org/wiki/Tag:railway%3Dstation"
        >
          railway station
        </ExternalLink> data from OpenStreetMap (as of 9 August 2023).
      </p>
      <OsmLicense />
    </HelpButton>
  </span>
</Checkbox>

<GeoJSON data={`${publicResourceBaseUrl()}/v1/${name}.geojson`}>
  <CircleLayer
    id={name}
    paint={{
      "circle-color": color,
      "circle-radius": circleRadius / 2,
    }}
    layout={{
      visibility: show ? "visible" : "none",
    }}
  >
    <Popup openOn="hover" let:features>
      <p>{tooltip(features[0])}</p>
    </Popup>
  </CircleLayer>
</GeoJSON>
