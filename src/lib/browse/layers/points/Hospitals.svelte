<script lang="ts">
  import LayerControl from "../LayerControl.svelte";
  import { ColorLegend, Popup, publicResourceBaseUrl } from "lib/common";
  import { layerId } from "lib/maplibre";
  import {
    FillLayer,
    hoverStateFilter,
    VectorTileSource,
  } from "svelte-maplibre";
  import { colors } from "../../colors";
  import { showHideLayer } from "../url";
  import { ExternalLink } from "lib/common";
  import OsmLicense from "../OsmLicense.svelte";

  let name = "hospitals";
  let title = "Hospitals";

  let show = showHideLayer(name);
</script>

<LayerControl {name} {title} bind:show={$show}>
  <span slot="icon"><ColorLegend color={colors.hospitals} /></span>
  <span slot="help">
    <p>
      This shows <ExternalLink
        href="https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dhospital"
      >
        hospital
      </ExternalLink> data from OpenStreetMap (as of 9 August 2023). It doesn't include
      outpatient clinics or individual doctor's offices.
    </p>
    <OsmLicense />
  </span>
</LayerControl>

<VectorTileSource
  url={`pmtiles://${publicResourceBaseUrl()}/v1/${name}.pmtiles`}
>
  <FillLayer
    {...layerId(name)}
    sourceLayer={name}
    paint={{
      "fill-color": colors.hospitals,
      "fill-opacity": hoverStateFilter(0.7, 1.0),
    }}
    layout={{
      visibility: $show ? "visible" : "none",
    }}
    manageHoverState
    eventsIfTopMost
  >
    <Popup let:props>
      <p>{props.name ?? "Unnamed hospital"}</p>
    </Popup>
  </FillLayer>
</VectorTileSource>
