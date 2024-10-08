<script lang="ts">
  import LayerControl from "../LayerControl.svelte";
  import {
    ExternalLink,
    HelpButton,
    Popup,
    publicResourceBaseUrl,
  } from "lib/common";
  import { Checkbox } from "govuk-svelte";
  import { layerId } from "lib/maplibre";
  import { SymbolLayer, VectorTileSource } from "svelte-maplibre";
  import cycleParking from "../../../../../assets/bicycle_parking.png?url";
  import OsmLicense from "../OsmLicense.svelte";
  import { showHideLayer } from "../url";

  let name = "cycle_parking";

  let show = showHideLayer(name);
</script>

<LayerControl {name}>
  <Checkbox bind:checked={$show}>
    <img src={cycleParking} alt="a logo representing cycle parking" />
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
        <p>
          Icon from <ExternalLink
            href="https://github.com/gravitystorm/openstreetmap-carto"
          >
            OpenStreetMap Carto
          </ExternalLink>
        </p>
        <OsmLicense />
      </HelpButton>
    </span>
  </Checkbox>
</LayerControl>

<VectorTileSource
  url={`pmtiles://${publicResourceBaseUrl()}/v1/${name}.pmtiles`}
>
  <SymbolLayer
    {...layerId(name)}
    sourceLayer={name}
    layout={{
      "icon-image": "cycle_parking",
      "icon-size": 1.0,
      "icon-allow-overlap": true,
      visibility: $show ? "visible" : "none",
    }}
  >
    <Popup let:props>
      <p>
        Capacity: <b>{props.capacity ?? "unknown"}</b>
      </p>
    </Popup>
  </SymbolLayer>
</VectorTileSource>
