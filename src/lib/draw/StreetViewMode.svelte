<script lang="ts">
  import { StreetViewHelp, StreetViewTool } from "lib/common";
  import { mode } from "lib/draw/stores";
  import { DefaultButton, Radio } from "lib/govuk";
  import { userSettings } from "stores";

  let enabled = true;
  $: if (!enabled) {
    mode.set({ mode: "list" });
  }
</script>

<StreetViewTool bind:enabled showControls={false} />

<DefaultButton on:click={() => (enabled = false)}>Finish</DefaultButton>

<Radio
  legend="Source"
  id="streetViewImagery"
  choices={[
    ["google", "Google Street View"],
    ["bing", "Bing Streetside"],
  ]}
  bind:value={$userSettings.streetViewImagery}
  inlineSmall
/>

<StreetViewHelp />
