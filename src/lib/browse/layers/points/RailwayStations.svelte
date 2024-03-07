<script lang="ts">
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

  let name = "railway_stations";

  let show = false;
</script>

<Checkbox bind:checked={show}>
  <img src={railwayStation} alt="A logo representing a train" />
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
      <p>
        Icon from <ExternalLink href="https://www.nationalrail.co.uk/">
          National Rail
        </ExternalLink>. (Note that not all stations shown are National Rail.)
      </p>
      <OsmLicense />
    </HelpButton>
  </span>
</Checkbox>

<GeoJSON data={`${publicResourceBaseUrl()}/v1/${name}.geojson`}>
  <SymbolLayer
    {...layerId(name)}
    layout={{
      "icon-image": "railway_station",
      "icon-size": 1,
      "icon-allow-overlap": true,
      visibility: show ? "visible" : "none",
    }}
  >
    <Popup let:props>
      <p>{props.name ?? "Unnamed railway station"}</p>
    </Popup>
  </SymbolLayer>
</GeoJSON>
