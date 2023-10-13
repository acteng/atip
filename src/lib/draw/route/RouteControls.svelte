<script lang="ts">
  import {
    Checkbox,
    CheckboxGroup,
    DefaultButton,
    SecondaryButton,
  } from "lib/govuk";
  import { routeTool, userSettings } from "stores";

  // Start with this enabled or disabled, based on whether we're drawing a new
  // route or editing an existing.
  export let extendRoute: boolean;

  // TODO When editing, we should save in the route and use the previous value
  $: $routeTool.setRouteConfig({
    avoid_doubling_back: $userSettings.avoidDoublingBack,
    extend_route: extendRoute,
  });

  // TODO Show if shift is held or not
  // TODO Disable finish when the route is invalid
</script>

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

<CheckboxGroup small>
  <Checkbox
    id="extendRoute"
    bind:checked={extendRoute}
    hint="Keep clicking to add more points to the end of the route"
  >
    Add points to end
  </Checkbox>
  <Checkbox
    id="avoidDoublingBack"
    bind:checked={$userSettings.avoidDoublingBack}
    hint="Try to make the route avoid using the same streets with multiple waypoints"
  >
    Avoid doubling back
  </Checkbox>
</CheckboxGroup>
