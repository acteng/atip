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
  import {
    hoverStateFilter,
    LineLayer,
    VectorTileSource,
  } from "svelte-maplibre";
  import { colors } from "../../colors";
  import OsOglLicense from "../OsOglLicense.svelte";

  let name = "national_cycle_network";
  let color = colors.national_cycle_network;

  let show = false;
</script>

<Checkbox id={name} bind:checked={show}>
  <ColorLegend {color} />
  National Cycle Network
  <span slot="right">
    <HelpButton>
      <p>
        Data from Sustrans about the <ExternalLink
          href="https://data-sustrans-uk.opendata.arcgis.com/"
        >
          National Cycle Network
        </ExternalLink>, downloaded on 22/01/2024.
      </p>
      <OsOglLicense />
    </HelpButton>
  </span>
</Checkbox>

<VectorTileSource
  url={`pmtiles://${publicResourceBaseUrl()}/v1/${name}.pmtiles`}
>
  <LineLayer
    {...layerId(name)}
    sourceLayer={name}
    manageHoverState
    eventsIfTopMost
    paint={{
      "line-color": color,
      "line-width": 4,
      "line-opacity": hoverStateFilter(1.0, 0.5),
    }}
    layout={{
      visibility: show ? "visible" : "none",
    }}
  >
    <Popup let:props>
      <ul>
        {#if props.Desc_}
          <li>
            Description: <b>{props.Desc_}</b>
          </li>
        {/if}
        {#if props.Greenway}
          <li>
            Is greenway: <b>{props.Greenway}</b>
          </li>
        {/if}
        {#if props.RouteType}
          <li>
            Route type: <b>{props.RouteType}</b>
          </li>
        {/if}
        {#if props.RouteNo}
          <li>
            Route number: <b>{props.RouteNo}</b>
          </li>
        {/if}
        {#if props.RouteCat}
          <li>
            Route Category: <b>{props.RouteCat}</b>
          </li>
        {/if}
        {#if props.OpenStatus}
          <li>
            Open Status: <b>{props.OpenStatus}</b>
          </li>
        {/if}
        {#if props.Surface}
          <li>
            Surface: <b>{props.Surface}</b>
          </li>
        {/if}
        {#if props.Quality}
          <li>
            Quality: <b>{props.Quality}</b>
          </li>
        {/if}
        {#if props.RoadClass}
          <li>
            Road Class: <b>{props.RoadClass}</b>
          </li>
        {/if}
      </ul>
    </Popup>
  </LineLayer>
</VectorTileSource>
