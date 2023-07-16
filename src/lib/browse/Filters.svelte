<script lang="ts">
  import { onMount } from "svelte";
  import { gjScheme } from "../../stores";
  import CollapsibleCard from "../common/CollapsibleCard.svelte";
  import FormElement from "../govuk/FormElement.svelte";
  import SecondaryButton from "../govuk/SecondaryButton.svelte";
  import Select from "../govuk/Select.svelte";
  import { type Scheme } from "./data";

  // These are immutable; re-create this component if they change
  export let schemes: Map<string, Scheme>;

  // by scheme_reference
  export let showSchemes: Set<string> = new Set();

  let filterText = "";

  // Dropdown filters
  let authorities: [string, string][] = [];
  let filterAuthority = "";
  let fundingProgrammes: [string, string][] = [];
  let filterFundingProgramme = "";

  // Stats about filtered schemes
  let counts = { area: 0, route: 0, crossing: 0, other: 0 };

  onMount(() => {
    let set1 = new Set();
    let set2 = new Set();
    for (let x of schemes.values()) {
      if (x.authority_or_region) {
        set1.add(x.authority_or_region);
      }
      if (x.funding_programme) {
        set2.add(x.funding_programme);
      }
    }
    authorities = Array.from(set1.entries());
    authorities.sort();
    fundingProgrammes = Array.from(set2.entries());
    fundingProgrammes.sort();
  });

  // When any filters change, update showSchemes
  function filtersUpdated(
    filterText: string,
    filterAuthority: string,
    filterFundingProgramme: string
  ) {
    showSchemes.clear();
    let filterNormalized = filterText.toLowerCase();
    for (let feature of $gjScheme.features) {
      // TODO This is a very blunt free-form text search of any property in the
      // feature only, not the scheme.
      if (
        filterNormalized &&
        !JSON.stringify(feature.properties)
          .toLowerCase()
          .includes(filterNormalized)
      ) {
        continue;
      }
      if (filterAuthority || filterFundingProgramme) {
        let scheme = schemes.get(feature.properties.scheme_reference);
        if (filterAuthority && scheme.authority_or_region != filterAuthority) {
          continue;
        }
        if (
          filterFundingProgramme &&
          scheme.funding_programme != filterFundingProgramme
        ) {
          continue;
        }
      }
      showSchemes.add(feature.properties.scheme_reference);
    }
    // Make Svelte see the update
    showSchemes = showSchemes;

    // Hide things on the map, and recalculate stats
    counts = { area: 0, route: 0, crossing: 0, other: 0 };
    gjScheme.update((gj) => {
      for (let feature of gj.features) {
        if (showSchemes.has(feature.properties.scheme_reference)) {
          delete feature.properties.hide_while_editing;
          counts[feature.properties.intervention_type]++;
        } else {
          feature.properties.hide_while_editing = true;
        }
      }
      return gj;
    });
    counts = counts;
  }
  $: filtersUpdated(filterText, filterAuthority, filterFundingProgramme);
</script>

<CollapsibleCard label="Filters">
  <Select
    label="Authority or region"
    id="filterAuthority"
    choices={authorities}
    emptyOption
    bind:value={filterAuthority}
  />
  <Select
    label="Funding programme"
    id="filterFundingProgramme"
    choices={fundingProgrammes}
    emptyOption
    bind:value={filterFundingProgramme}
  />
  <FormElement label="Any field" id="filterText">
    <input
      type="text"
      class="govuk-input govuk-input--width-10"
      id="filterText"
      bind:value={filterText}
    />
    <SecondaryButton on:click={() => (filterText = "")}>Clear</SecondaryButton>
  </FormElement>
</CollapsibleCard>

<p>
  Showing {showSchemes.size} schemes ({counts.route} routes, {counts.area} areas,
  {counts.crossing} crossings, {counts.other} other)
</p>
