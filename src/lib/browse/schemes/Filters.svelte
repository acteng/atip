<script lang="ts">
  import {
    DefaultButton,
    FormElement,
    SecondaryButton,
    Select,
  } from "govuk-svelte";
  import { Modal } from "lib/common";
  import { onMount } from "svelte";
  import type { Feature, Schemes, SchemeData } from "types";
  import { fundingProgrammesForColouringAndFiltering } from "./data";

  export let source: string;
  export let schemes: Map<string, SchemeData>;
  export let schemesGj: Schemes;
  export let filterSchemeText: string;
  export let filterInterventionText: string;

  let open = false;

  // by scheme_reference
  let showSchemes: Set<string> = new Set();
  // Stats about filtered schemes
  let counts = { interventions: 0, totalLength: 0.0 };

  // Dropdown filters
  let authorities: [string, string][] = [];
  let filterAuthority = "";
  let fundingProgrammes: [string, string][] = [];
  let knownFundingProgrammes: Set<string> = new Set(
    fundingProgrammesForColouringAndFiltering.slice(0, -1),
  );
  let filterFundingProgramme = "";
  let currentMilestones: [string, string][] = [];
  let filterCurrentMilestone = "";

  // TODO Change when schemes changes
  onMount(() => {
    let set1: Set<string> = new Set();
    let set2: Set<string> = new Set();
    let set3: Set<string> = new Set();
    for (let x of schemes.values()) {
      if (x.browse?.authority_or_region) {
        set1.add(x.browse.authority_or_region);
      }
      if (x.browse?.funding_programme) {
        set2.add(x.browse.funding_programme);
      }
      if (x.browse?.current_milestone) {
        set3.add(x.browse.current_milestone);
      }
    }
    authorities = Array.from(set1.entries());
    authorities.sort();
    fundingProgrammes = fundingProgrammesForColouringAndFiltering.map(
      (value: string) => [value, value],
    );

    currentMilestones = Array.from(set3.entries());
    currentMilestones.sort();
  });

  // When any filters change, update showSchemes
  function filtersUpdated(
    filterInterventionTextCopy: string,
    filterSchemeTextCopy: string,
    filterAuthority: string,
    filterFundingProgramme: string,
    filterCurrentMilestone: string,
  ) {
    let filterInterventionNormalized = filterInterventionTextCopy.toLowerCase();
    let filterSchemeNormalized = filterSchemeTextCopy.toLowerCase();
    let filterFeatures = (feature: Feature) => {
      // Only the name and description fields have anything worth filtering
      if (
        filterInterventionNormalized &&
        !feature.properties.name
          ?.toLowerCase()
          .includes(filterInterventionNormalized) &&
        !feature.properties.description
          ?.toLowerCase()
          .includes(filterInterventionNormalized)
      ) {
        return false;
      }
      if (
        filterSchemeNormalized ||
        filterAuthority ||
        filterFundingProgramme ||
        filterCurrentMilestone
      ) {
        let scheme = schemes.get(feature.properties.scheme_reference!)!;
        if (
          filterAuthority &&
          scheme.browse?.authority_or_region != filterAuthority
        ) {
          return false;
        }
        if (
          (filterFundingProgramme &&
            filterFundingProgramme !== "Other" &&
            scheme.browse?.funding_programme != filterFundingProgramme) ||
          (filterFundingProgramme === "Other" &&
            knownFundingProgrammes.has(scheme.browse?.funding_programme ?? ""))
        ) {
          return false;
        }
        if (
          filterCurrentMilestone &&
          scheme.browse?.current_milestone != filterCurrentMilestone
        ) {
          return false;
        }
        if (
          filterSchemeNormalized &&
          !scheme.scheme_reference
            .toLowerCase()
            .includes(filterSchemeNormalized) &&
          !(scheme.scheme_name ?? "")
            .toLowerCase()
            .includes(filterSchemeNormalized)
        ) {
          return false;
        }
      }
      return true;
    };
    showSchemes = new Set(
      schemesGj.features
        .filter(filterFeatures)
        .map((f) => f.properties.scheme_reference!),
    );

    // Hide things on the map, and recalculate stats
    counts = { interventions: 0, totalLength: 0 };
    let showFeature = (feature: Feature) => {
      if (!showSchemes.has(feature.properties.scheme_reference!)) {
        return false;
      }
      // If there's free-text, only show interventions matching it within a scheme
      if (
        filterInterventionNormalized &&
        !feature.properties.name
          ?.toLowerCase()
          .includes(filterInterventionNormalized) &&
        !feature.properties.description
          ?.toLowerCase()
          .includes(filterInterventionNormalized)
      ) {
        return false;
      }
      return true;
    };
    for (let feature of schemesGj.features) {
      if (showFeature(feature)) {
        delete feature.properties.hide_while_editing;
        counts.interventions++;
        if (
          feature.geometry.type == "LineString" &&
          feature.properties.length_meters
        ) {
          counts.totalLength += feature.properties.length_meters;
        }
      } else {
        feature.properties.hide_while_editing = true;
      }
    }
    schemesGj = schemesGj;
    counts = counts;
  }
  $: filtersUpdated(
    filterInterventionText,
    filterSchemeText,
    filterAuthority,
    filterFundingProgramme,
    filterCurrentMilestone,
  );

  function metersToMiles(x: number): number {
    return x * 0.000621371;
  }

  function resetFilters() {
    filterAuthority = "";
    filterFundingProgramme = "";
    filterCurrentMilestone = "";
    filterInterventionText = "";
    filterSchemeText = "";
  }
</script>

<SecondaryButton on:click={() => (open = true)}>Filters</SecondaryButton>

<Modal title={`Filter ${source} schemes`} bind:open>
  <p>Showing:</p>
  <ul>
    <li>
      {counts.interventions.toLocaleString()} interventions
    </li>
    <li>{showSchemes.size.toLocaleString()} schemes</li>
    <li>
      total route length of {metersToMiles(counts.totalLength).toFixed(1)} miles
    </li>
  </ul>

  <SecondaryButton on:click={resetFilters}>Reset all filters</SecondaryButton>
  <Select
    label="Authority or region"
    choices={authorities}
    emptyOption
    bind:value={filterAuthority}
  />
  <Select
    label="Funding programme"
    choices={fundingProgrammes}
    emptyOption
    bind:value={filterFundingProgramme}
  />
  <Select
    label="Current milestone"
    choices={currentMilestones}
    emptyOption
    bind:value={filterCurrentMilestone}
  />
  <FormElement
    label="Intervention name or description"
    id="filterInterventionText"
  >
    <input
      type="text"
      class="govuk-input govuk-input--width-10"
      id="filterInterventionText"
      bind:value={filterInterventionText}
    />
    <SecondaryButton on:click={() => (filterInterventionText = "")}>
      Clear
    </SecondaryButton>
  </FormElement>
  <FormElement label="Scheme name or reference" id="filterSchemeText">
    <input
      type="text"
      class="govuk-input govuk-input--width-10"
      id="filterSchemeText"
      bind:value={filterSchemeText}
    />
    <SecondaryButton on:click={() => (filterSchemeText = "")}>
      Clear
    </SecondaryButton>
  </FormElement>

  <DefaultButton on:click={() => (open = false)}>Done</DefaultButton>
</Modal>
