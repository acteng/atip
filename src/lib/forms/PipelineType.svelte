<script lang="ts">
  import { Select } from "lib/govuk";
  import type { PipelineType } from "types";

  export let label: string;
  export let value: PipelineType | "";

  // Keep in sync with intervention_type_short in scheme_data
  // TODO That has more than the 11...

  function repeat(x: string): [string, string] {
    return [x, x];
  }
</script>

<Select
  {label}
  choices={[
    repeat("New segregated cycling facility"),
    repeat("New junction treatment"),
    repeat("New permanent footway"),
    [
      "New shared use facilities",
      "New shared use (walking and cycling) facilities",
    ],
    [
      "Improvements to existing route",
      "Improvements to make an existing walking/cycle route safer",
    ],
    [
      "Area-wide traffic management",
      "Area-wide traffic management (including by TROs - both permanent and experimental)",
    ],
    [
      "Bus priority measures",
      "Bus priority measures that also enable active travel (for example, bus gates)",
    ],
    ["Secure cycle parking", "Provision of secure cycle parking facilities"],
    repeat("New road crossings"),
    repeat("Restriction or reduction of car parking availability"),
    repeat("School streets"),
    repeat("Quiet mixed traffic streets"),
    repeat("Traffic free routes"),
    repeat("Not specified in LCWIP"),
  ]}
  emptyOption
  bind:value
/>
