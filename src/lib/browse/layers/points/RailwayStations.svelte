<script lang="ts">
  import { ExternalLink, Popup, publicResourceBaseUrl } from "lib/common";
  import { layerId } from "lib/maplibre";
  import { GeoJSON, SymbolLayer } from "svelte-maplibre";
  import railwayStation from "../../../../../assets/railway_station.png?url";
  import LayerControl from "../LayerControl.svelte";
  import OsmLicense from "../OsmLicense.svelte";
  import { showHideLayer } from "../url";

  let name = "railway_stations";
  let title = "Railway stations";

  let show = showHideLayer(name);
</script>

<LayerControl {name} {title} bind:show={$show}>
  <img slot="icon" src={railwayStation} alt="A logo representing a train" />
  <div slot="help">
    <p>
      This shows <ExternalLink
        href="https://wiki.openstreetmap.org/wiki/Tag:railway%3Dstation"
      >
        railway station
      </ExternalLink> data from OpenStreetMap (as of 20 October 2024).
    </p>
    <p>
      Icon from <ExternalLink href="https://www.nationalrail.co.uk/">
        National Rail
      </ExternalLink>. (Note that not all stations shown are National Rail.)
    </p>
    <OsmLicense />
  </div>
</LayerControl>

<GeoJSON data={`${publicResourceBaseUrl()}/v1/${name}.geojson`}>
  <SymbolLayer
    {...layerId(name)}
    layout={{
      "icon-image": "railway_station",
      "icon-size": 1,
      "icon-allow-overlap": true,
      visibility: $show ? "visible" : "none",
    }}
  >
    <Popup let:props>
      <p>{props.name ?? "Unnamed railway station"}</p>
    </Popup>
  </SymbolLayer>
</GeoJSON>
