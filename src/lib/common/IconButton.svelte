<script lang="ts">
  import { SecondaryButton } from "govuk-svelte";

  // Removes the margin beneath this button, so it can be used as a floating map control

  export let activated = false;
  export let disabled = false;

  $: bg = activated ? "background: grey" : "";
</script>

<SecondaryButton on:click style="margin-bottom: 0px; {bg}" {disabled}>
  <slot />
</SecondaryButton>
