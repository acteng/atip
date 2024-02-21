<script lang="ts">
  import { circleRadius } from "colors";
  import {
    ColorLegend,
    ExternalLink,
    HelpButton,
    Popup,
    publicResourceBaseUrl,
  } from "lib/common";
  import { Checkbox } from "govuk-svelte";
  import { layerId } from "lib/maplibre";
  import { CircleLayer, GeoJSON } from "svelte-maplibre";
  import { colors } from "../../colors";
  import OsmLicense from "../OsmLicense.svelte";

  let name = "railway_stations";
  let color = colors.railway_stations;

  let show = false;
</script>

<Checkbox bind:checked={show}>
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
    {...layerId(name)}
    paint={{
      "circle-color": color,
      "circle-radius": circleRadius / 2,
    }}
    layout={{
      visibility: show ? "visible" : "none",
    }}
  >
    <Popup let:props>
      <p>{props.name ?? "Unnamed railway station"}</p>
    </Popup>
  </CircleLayer>
</GeoJSON>
