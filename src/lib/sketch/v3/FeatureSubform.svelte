<script lang="ts">
  import { Radio } from "govuk-svelte";
  import type { InfrastructureFeature, } from "types";

  export let interventionFeature: InfrastructureFeature;
  export let featureOptions: [string, string][];
</script>


<Radio
  label={interventionFeature.name}
  choices={featureOptions}
  bind:value={interventionFeature.value}
/>
