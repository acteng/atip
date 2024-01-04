<script lang="ts">
  import { CollapsibleCard } from "lib/common";
  import {
    Checkbox,
    CheckboxGroup,
    FormElement,
    SecondaryButton,
    Select,
  } from "lib/govuk";
  import { onMount } from "svelte";
  import type { FeatureUnion } from "types";
  import InterventionColorSelector from "./InterventionColorSelector.svelte";
  import { filterText, schemes, schemesGj } from "./stores";

  // NOTE: If schemesGj changes, re-create this component

  // by scheme_reference
  export let schemesToBeShown: Set<string> = new Set();

  export let show = true;

  // Dropdown filters
  let authorities: [string, string][] = [];
  let filterAuthority = "";
  let fundingProgrammes: [string, string][] = [];
  let filterFundingProgramme = "";

  // Stats about filtered schemes
  let counts = { area: 0, route: 0, crossing: 0, other: 0 };

  onMount(() => {
    let set1: Set<string> = new Set();
    let set2: Set<string> = new Set();
    for (let x of $schemes.values()) {
      if (x.browse?.authority_or_region) {
        set1.add(x.browse.authority_or_region);
      }
      if (x.browse?.funding_programme) {
        set2.add(x.browse.funding_programme);
      }
    }
    authorities = Array.from(set1.entries());
    authorities.sort();
    fundingProgrammes = Array.from(set2.entries());
    fundingProgrammes.sort();
  });

  // When any filters change, update schemesToBeShown
  function filtersUpdated(
    filterTextCopy: string,
    filterAuthority: string,
    filterFundingProgramme: string
  ) {
    let filterNormalized = filterTextCopy.toLowerCase();
    let filterFeatures = (feature: FeatureUnion) => {
      // Only the name and description fields have anything worth filtering
      if (
        filterNormalized &&
        !feature.properties.name?.toLowerCase().includes(filterNormalized) &&
        !feature.properties.description
          ?.toLowerCase()
          .includes(filterNormalized)
      ) {
        return false;
      }
      if (filterAuthority || filterFundingProgramme) {
        let scheme = $schemes.get(feature.properties.scheme_reference!)!;
        if (
          filterAuthority &&
          scheme.browse?.authority_or_region != filterAuthority
        ) {
          return false;
        }
        if (
          filterFundingProgramme &&
          scheme.browse?.funding_programme != filterFundingProgramme
        ) {
          return false;
        }
      }
      return true;
    };
    schemesToBeShown = new Set(
      $schemesGj.features
        .filter(filterFeatures)
        .map((f) => f.properties.scheme_reference!)
    );

    // Hide things on the map, and recalculate stats
    counts = { area: 0, route: 0, crossing: 0, other: 0 };
    let showFeature = (feature: FeatureUnion) => {
      if (!schemesToBeShown.has(feature.properties.scheme_reference!)) {
        return false;
      }
      // If there's free-text, only show interventions matching it within a scheme
      if (
        filterNormalized &&
        !feature.properties.name?.toLowerCase().includes(filterNormalized) &&
        !feature.properties.description
          ?.toLowerCase()
          .includes(filterNormalized)
      ) {
        return false;
      }
      return true;
    };
    for (let feature of $schemesGj.features) {
      if (showFeature(feature)) {
        delete feature.properties.hide_while_editing;
        counts[feature.properties.intervention_type]++;
      } else {
        feature.properties.hide_while_editing = true;
      }
    }
    $schemesGj = $schemesGj;
    counts = counts;
  }
  $: filtersUpdated($filterText, filterAuthority, filterFundingProgramme);
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
  <FormElement label="Intervention name or description" id="filterText">
    <input
      type="text"
      class="govuk-input govuk-input--width-10"
      id="filterText"
      bind:value={$filterText}
    />
    <SecondaryButton on:click={() => ($filterText = "")}>Clear</SecondaryButton>
  </FormElement>
  <InterventionColorSelector />
</CollapsibleCard>

<CheckboxGroup small>
  <Checkbox id="show-schemes" bind:checked={show}>
    Showing {schemesToBeShown.size.toLocaleString()} schemes ({counts.route.toLocaleString()}
    routes, {counts.area.toLocaleString()} areas,
    {counts.crossing.toLocaleString()} crossings, {counts.other.toLocaleString()}
    other)
  </Checkbox>
</CheckboxGroup>
