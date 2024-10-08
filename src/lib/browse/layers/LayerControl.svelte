<script lang="ts">
  import { HelpButton } from "lib/common";
  import { SecondaryButton, Checkbox, CheckboxGroup } from "govuk-svelte";
  import { onDestroy } from "svelte";
  import { activeLayers, layerLegends } from "./stores";

  // Slots include: icon, controls, help

  export let name: string;
  export let title: string;
  // This must be bound to state that controls the layer display and URL
  export let show: boolean;

  // If the layer is initially shown (from the URL state), make it active
  if (show) {
    $activeLayers.add(name);
    $activeLayers = $activeLayers;
  }

  // The controls for each layer are defined in a layer component's optional
  // "controls" slot, as well as the generic controls defined below in
  // this component. The whole DOM element is bound here, then it's
  // stored centrally in layerLegends. That lets ActiveLayersLegend
  // later display the proper layer controls in one place.
  let contents: HTMLDivElement | null = null;

  $: if (contents) {
    layerLegends.update((l) => {
      // Initially hide the controls. Since layer components are defined under
      // the left sidebar, they'd otherwise appear there.
      contents!.style.display = "none";
      l.set(name, contents!);
      return l;
    });
  }

  onDestroy(() => {
    layerLegends.update((l) => {
      l.delete(name);
      return l;
    });
  });

  function toggleActive() {
    activeLayers.update((l) => {
      if (l.has(name)) {
        l.delete(name);
        show = false;
      } else {
        l.add(name);
        show = true;
      }
      return l;
    });
  }

  function remove() {
    $activeLayers.delete(name);
    $activeLayers = $activeLayers;
    show = false;
  }
</script>

<!-- For the left sidebar -->
<Checkbox checked={$activeLayers.has(name)} on:change={toggleActive}>
  {title}
</Checkbox>

<!-- For the right panel -->
<div bind:this={contents}>
  <CheckboxGroup small>
    <div
      style="display: flex; justify-content: space-between; white-space: nowrap"
    >
      <Checkbox bind:checked={show}>
        <slot name="icon" />
        {title}
      </Checkbox>
      <span>
        <HelpButton>
          <slot name="help" />
        </HelpButton>

        <SecondaryButton on:click={remove}>X</SecondaryButton>
      </span>
    </div>
  </CheckboxGroup>
  {#if show}
    <slot name="controls" />
  {/if}
</div>
