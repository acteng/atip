<script lang="ts">
  import { SecondaryButton } from "lib/govuk";
  import { mode, pointTool, polygonTool, routeTool } from "stores";
  import imageIcon from "../../../assets/image.svg";
  import pointIcon from "../../../assets/point.svg";
  import polygonFreehandIcon from "../../../assets/polygon_freehand.svg";
  import polygonSnappedIcon from "../../../assets/polygon_snapped.svg";
  import routeIcon from "../../../assets/route.svg";
  import splitRouteIcon from "../../../assets/split_route.svg";
  import streetViewIcon from "../../../assets/street_view.svg";
  import HoverLayer from "./HoverLayer.svelte";
</script>

<HoverLayer />

<div class="top govuk-prose">
  <SecondaryButton
    on:click={() => mode.set({ mode: "new-point" })}
    disabled={!$pointTool}
  >
    <img src={pointIcon} alt="New point" />
    New point
  </SecondaryButton>
  <SecondaryButton
    on:click={() => mode.set({ mode: "new-route" })}
    disabled={!$routeTool}
  >
    <img src={routeIcon} alt="New route" />
    New route
  </SecondaryButton>
  <SecondaryButton
    on:click={() => mode.set({ mode: "new-freehand-polygon" })}
    disabled={!$polygonTool}
  >
    <img src={polygonFreehandIcon} alt="New polygon (freehand)" />
    New polygon (freehand)
  </SecondaryButton>
  <SecondaryButton
    on:click={() => mode.set({ mode: "new-snapped-polygon" })}
    disabled={!$routeTool}
  >
    <img src={polygonSnappedIcon} alt="New polygon (snapped)" />
    New polygon (snapped)
  </SecondaryButton>
  <SecondaryButton on:click={() => mode.set({ mode: "split-route" })}>
    <img src={splitRouteIcon} alt="Split route" />
    Split route
  </SecondaryButton>
  <SecondaryButton on:click={() => mode.set({mode:"merge-routes"})}>
    <img src={splitRouteIcon} alt="Merge route" />
    Merge routes
  </SecondaryButton>
  <SecondaryButton on:click={() => mode.set({ mode: "set-image" })}>
    <!-- svelte-ignore a11y-img-redundant-alt -->
    <img src={imageIcon} alt="Georeference image" />
    Georeference image
  </SecondaryButton>
  <SecondaryButton on:click={() => mode.set({ mode: "streetview" })}>
    <img src={streetViewIcon} alt="StreetView" />
    StreetView
  </SecondaryButton>
</div>

<style>
  .top {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 90%;
    background-color: white;
    border: 1px solid black;
    padding: 16px;

    display: flex;
    justify-content: space-between;
  }
</style>
