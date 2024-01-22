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
      "line-width": 7,
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
            Description: {props.Desc_}
          </li>
        {/if}
        {#if props.Greenway}
          <li>
            Is greenway: {props.Greenway}
          </li>
        {/if}
        {#if props.RouteType}
          <li>
            Route type: {props.RouteType}
          </li>
        {/if}
        {#if props.RouteNo}
          <li>
            Route number: {props.RouteNo}
          </li>
        {/if}
        {#if props.RouteCat}
          <li>
            Route Category: {props.RouteCat}
          </li>
        {/if}
        {#if props.OpenStatus}
          <li>
            Open Status: {props.OpenStatus}
          </li>
        {/if}
        {#if props.Surface}
          <li>
            Surface: {props.Surface}
          </li>
        {/if}
        {#if props.Quality}
          <li>
            Quality: {props.Quality}
          </li>
        {/if}
        {#if props.RoadClass}
          <li>
            Road Class: {props.RoadClass}
          </li>
        {/if}
      </ul>
    </Popup>
  </LineLayer>
</VectorTileSource>
