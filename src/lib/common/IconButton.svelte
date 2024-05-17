<script lang="ts">
  import { SecondaryButton } from "govuk-svelte";

  // Removes the margin beneath this button, so it can be used as a floating map control
</script>

<SecondaryButton on:click style="margin-bottom: 0px" {...$$props}>
  <slot />
</SecondaryButton>
