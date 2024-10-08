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
  import { GeoJSON, SymbolLayer } from "svelte-maplibre";
  import railwayStation from "../../../../../assets/railway_station.png?url";
  import OsmLicense from "../OsmLicense.svelte";
  import { showHideLayer } from "../url";

  let name = "railway_stations";

  let show = showHideLayer(name);
</script>

<Checkbox bind:checked={$show}>Railway stations</Checkbox>

<LayerControl {name}>
  <Checkbox bind:checked={$show}>
    <img src={railwayStation} alt="A logo representing a train" />
    Railway stations
    <span slot="right">
      <HelpButton>
        <p>
          This shows <ExternalLink
            href="https://wiki.openstreetmap.org/wiki/Tag:railway%3Dstation"
          >
            railway station
          </ExternalLink> data from OpenStreetMap (as of 9 August 2023).
        </p>
        <p>
          Icon from <ExternalLink href="https://www.nationalrail.co.uk/">
            National Rail
          </ExternalLink>. (Note that not all stations shown are National Rail.)
        </p>
        <OsmLicense />
      </HelpButton>
    </span>
  </Checkbox>
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
