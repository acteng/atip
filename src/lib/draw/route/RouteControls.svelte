<script lang="ts">
  import { userSettings } from "../../../stores";
  import { CollapsibleCard } from "../../common";
  import {
    Checkbox,
    CheckboxGroup,
    DefaultButton,
    SecondaryButton,
  } from "../../govuk";
  import { RouteTool } from "./route_tool";

  export let routeTool: RouteTool;
  // Start with this enabled or disabled, based on whether we're drawing a new
  // route or editing an existing.
  export let extendRoute: boolean;

  // TODO When editing, we should save in the route and use the previous value
  $: routeTool.setRouteConfig({
    avoid_doubling_back: $userSettings.avoidDoublingBack,
    extend_route: extendRoute,
  });

  // TODO Show if shift is held or not
  // TODO Disable finish when the route is invalid
</script>

<CollapsibleCard label="Help">
  <ul>
    <li>
      <b>Click</b>
      green points on the transport network to create snapped routes
    </li>
    <li>
      Hold <b>Shift</b>
      to draw a point anywhere
    </li>
    <li>
      <b>Click and drag</b>
      any point to move it
    </li>
    <li>
      <b>Click</b>
      a red waypoint to delete it
    </li>
    <li>
      Press <b>Enter</b>
      or
      <b>double click</b>
      to finish
    </li>
    <li>
      Press <b>Escape</b>
      to cancel
    </li>
  </ul>
</CollapsibleCard>

<CheckboxGroup small>
  <Checkbox
    label="Add points to end"
    bind:checked={extendRoute}
    hint="Keep clicking to add more points to the end of the route"
  />
  <Checkbox
    label="Avoid doubling back"
    bind:checked={$userSettings.avoidDoublingBack}
    hint="Try to make the route avoid using the same streets with multiple waypoints"
  />
</CheckboxGroup>

<div style="display: flex; justify-content: space-between">
  <DefaultButton on:click={() => routeTool.finish()}>Finish</DefaultButton>
  <SecondaryButton on:click={() => routeTool.cancel()}>Cancel</SecondaryButton>
</div>
