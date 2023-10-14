<script lang="ts">
  import { SecondaryButton } from "lib/govuk";
  import { mode } from "stores";
  import pointIcon from "../../../assets/point.svg";
  import polygonFreehandIcon from "../../../assets/polygon_freehand.svg";
  import polygonSnappedIcon from "../../../assets/polygon_snapped.svg";
  import routeIcon from "../../../assets/route.svg";
  import splitRouteIcon from "../../../assets/split_route.svg";
  import streetViewIcon from "../../../assets/street_view.svg";
  import HoverLayer from "./HoverLayer.svelte";
  import { RouteTool } from "./route/route_tool";

  export let routeTool: RouteTool | null = null;
</script>

<HoverLayer />

<SecondaryButton on:click={() => mode.set({ mode: "new-point" })}>
  <img src={pointIcon} alt="New point" />
  New point
</SecondaryButton>
<SecondaryButton
  on:click={() => mode.set({ mode: "new-route" })}
  disabled={!routeTool}
>
  <img src={routeIcon} alt="New route" />
  New route
</SecondaryButton>
<SecondaryButton on:click={() => mode.set({ mode: "new-freehand-polygon" })}>
  <img src={polygonFreehandIcon} alt="New polygon (freehand)" />
  New polygon (freehand)
</SecondaryButton>
<SecondaryButton
  on:click={() => mode.set({ mode: "new-snapped-polygon" })}
  disabled={!routeTool}
>
  <img src={polygonSnappedIcon} alt="New polygon (snapped)" />
  New polygon (snapped)
</SecondaryButton>
<SecondaryButton on:click={() => mode.set({ mode: "split-route" })}>
  <img src={splitRouteIcon} alt="Split route" />
  Split route
</SecondaryButton>
<SecondaryButton on:click={() => mode.set({ mode: "streetview" })}>
  <img src={streetViewIcon} alt="StreetView" />
  StreetView
</SecondaryButton>
