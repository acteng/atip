<script lang="ts">
  import { NumberInput } from "govuk-svelte";
  import type { Measurement } from "types";

  export let interventionMeasure: Measurement;
</script>

<NumberInput
  label={`${interventionMeasure.name} using unit: ${interventionMeasure.unit}`}
  width={10}
  bind:value={interventionMeasure.value}
/>
