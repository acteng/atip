<script lang="ts">
  import LayerControl from "../LayerControl.svelte";
  import { ExternalLink, Popup, publicResourceBaseUrl } from "lib/common";
  import { layerId } from "lib/maplibre";
  import { SymbolLayer, VectorTileSource } from "svelte-maplibre";
  import cycleParking from "../../../../../assets/bicycle_parking.png?url";
  import OsmLicense from "../OsmLicense.svelte";
  import { showHideLayer } from "../url";

  let name = "cycle_parking";
  let title = "Cycle parking";

  let show = showHideLayer(name);
</script>

<LayerControl {name} {title} bind:show={$show}>
  <img slot="icon" src={cycleParking} alt="a logo representing cycle parking" />
  <span slot="help">
    <p>
      Cycle parking, according to <ExternalLink
        href="https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dbicycle_parking"
      >
        OpenStreetMap
      </ExternalLink> (as of 20 October 2024). The type of parking, public/private
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
  </span>
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
