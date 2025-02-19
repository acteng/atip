<script lang="ts">
  import { ColorLegend, ExternalLink, publicResourceBaseUrl } from "lib/common";
  import { layerId } from "lib/maplibre";
  import { LineLayer, VectorTileSource } from "svelte-maplibre";
  import { colors } from "../../colors";
  import LayerControl from "../LayerControl.svelte";
  import OsmLicense from "../OsmLicense.svelte";
  import { showHideLayer } from "../url";

  let name = "cycle_routes";
  let title = "Cycle routes";

  let show = showHideLayer(name);
</script>

<LayerControl {name} {title} bind:show={$show}>
  <span slot="icon"><ColorLegend color={colors.cycle_route} /></span>
  <span slot="help">
    <p>
      This shows all roads with at least one cycle route crossing them,
      according to <ExternalLink
        href="https://wiki.openstreetmap.org/wiki/Tag:route%3Dbicycle"
      >
        OpenStreetMap
      </ExternalLink> (as of 20 October 2024). The quality of the route or infrastructure
      along it is not shown here.
    </p>
    <OsmLicense />
  </span>
</LayerControl>

<VectorTileSource
  url={`pmtiles://${publicResourceBaseUrl()}/v1/${name}.pmtiles`}
>
  <LineLayer
    {...layerId(name)}
    sourceLayer={name}
    paint={{
      "line-color": colors.cycle_route,
      "line-width": 8,
    }}
    layout={{
      visibility: $show ? "visible" : "none",
    }}
  />
</VectorTileSource>
