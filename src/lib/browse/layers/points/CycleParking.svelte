<script lang="ts">
  import {
    ColorLegend,
    ExternalLink,
    HelpButton,
    Popup,
    publicResourceBaseUrl,
  } from "lib/common";
  import { Checkbox } from "lib/govuk";
  import { layerId } from "lib/maplibre";
  import { CircleLayer, VectorTileSource } from "svelte-maplibre";
  import { colors } from "../../colors";
  import OsmLicense from "../OsmLicense.svelte";

  let name = "cycle_parking";
  let color = colors.cycle_parking;

  let show = false;
</script>

<Checkbox id={name} bind:checked={show}>
  <ColorLegend {color} />
  Cycle parking
  <span slot="right">
    <HelpButton>
      <p>
        Cycle parking, according to <ExternalLink
          href="https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dbicycle_parking"
        >
          OpenStreetMap
        </ExternalLink> (as of 9 August 2023). The type of parking, public/private
        access, and whether it's covered are not shown.
      </p>
      <OsmLicense />
    </HelpButton>
  </span>
</Checkbox>

<VectorTileSource
  url={`pmtiles://${publicResourceBaseUrl()}/v1/${name}.pmtiles`}
>
  <CircleLayer
    {...layerId(name)}
    sourceLayer={name}
    paint={{
      "circle-color": color,
      "circle-radius": [
        "interpolate",
        ["linear"],
        ["zoom"],
        1,
        2,
        8,
        3,
        13,
        10,
      ],
    }}
    layout={{
      visibility: show ? "visible" : "none",
    }}
    manageHoverState
    eventsIfTopMost
  >
    <Popup let:props>
      <p>
        Capacity: <b>{props.capacity ?? "unknown"}</b>
      </p>
    </Popup>
  </CircleLayer>
</VectorTileSource>
