<script lang="ts">
  import { gjScheme } from "../../stores";
  import { CollapsibleCard, ExternalLink } from "../common";
  import { Checkbox, CheckboxGroup } from "../govuk";

  $gjScheme.atf4 ||= {};

  let choices = [
    ["new_segregated_cycling", "New segregated cycling facility"],
    ["new_junction_treatment", "New junction treatment"],
    ["new_permanent_footway", "New permanent footway"],
    ["new_shared_use", "New shared use (walking and cycling) facilities"],
    [
      "improvements_existing_route",
      "Improvements to make an existing walking/cycle route safer",
    ],
    [
      "area_traffic_managemenet",
      "Area-wide traffic management (including by TROs - both permanent and experimental)",
    ],
    [
      "bus_priority",
      "Bus priority measures that also enable active travel (for example, bus gates)",
    ],
    ["cycle_parking", "Provision of secure cycle parking facilities"],
    ["new_crossings", "New road crossings"],
    [
      "car_parking_restrictions",
      "Restriction or reduction of car parking availability",
    ],
    ["school_streets", "School streets"],
  ];
</script>

<CollapsibleCard label="Select ATF4 types of infrastructure">
  <p>
    Select all <ExternalLink
      href="https://www.gov.uk/government/publications/how-to-complete-the-active-travel-fund-4-proforma/guidance-note-for-local-authorities-to-support-completion-of-the-active-travel-fund-4-proforma#types-of-infrastructure"
    >
      types of infrastructure
    </ExternalLink> that apply this scheme contains.
  </p>

  <CheckboxGroup small>
    {#each choices as [id, description]}
      <Checkbox {id} bind:checked={$gjScheme.atf4[id]}>{description}</Checkbox>
    {/each}
  </CheckboxGroup>
</CollapsibleCard>
