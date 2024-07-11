<script lang="ts">
  import {
    Checkbox,
    CollapsibleCard,
    CheckboxGroup,
    FormElement,
    SecondaryButton,
    Select,
  } from "govuk-svelte";
  import { onMount } from "svelte";
  import type { FeatureUnion } from "types";
  import { fundingProgrammesForColouringAndFiltering } from "./data";
  import InterventionColorSelector from "./InterventionColorSelector.svelte";
  import {
    filterInterventionText,
    filterSchemeText,
    schemes,
    schemesGj,
  } from "./stores";

  // NOTE: If schemesGj changes, re-create this component

  // by scheme_reference
  export let schemesToBeShown: Set<string> = new Set();

  export let show = true;

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
  let sketchSources: [string, string][] = [
    ["ATF assessment", "ATF assessment"],
    ["LCWIP mapping", "LCWIP mapping"],
    ["Both", "Both"],
  ];
  let filterSketchSource = "";
  let publishedStatus: [string, string][] = [
    ["Published", "Published"],
    ["Both", "Both"],
    ["Unpublished", "Unpublished/Unknown"],
  ];
  let filterPublished = "";

  // Stats about filtered schemes
  let counts = { area: 0, route: 0, crossing: 0, other: 0, totalLength: 0.0 };

  onMount(() => {
    let set1: Set<string> = new Set();
    let set2: Set<string> = new Set();
    let set3: Set<string> = new Set();
    for (let x of $schemes.values()) {
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

  // When any filters change, update schemesToBeShown
  function filtersUpdated(
    filterSketchSource: string,
    filterInterventionTextCopy: string,
    filterSchemeTextCopy: string,
    filterAuthority: string,
    filterFundingProgramme: string,
    filterCurrentMilestone: string,
    filterPublished: string,
  ) {
    let filterInterventionNormalized = filterInterventionTextCopy.toLowerCase();
    let filterSchemeNormalized = filterSchemeTextCopy.toLowerCase();
    let filterFeatures = (feature: FeatureUnion) => {
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
        filterSketchSource ||
        filterSchemeNormalized ||
        filterAuthority ||
        filterFundingProgramme ||
        filterCurrentMilestone ||
        filterPublished
      ) {
        let scheme = $schemes.get(feature.properties.scheme_reference!)!;
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
        if (filterSketchSource) {
          if (
            filterSketchSource !== "Both" &&
            filterSketchSource !== scheme.browse?.sketch_source
          ) {
            return false;
          }
        }
        if (filterPublished) {
          if (filterPublished === "Published" && scheme.browse?.published !== "published") {
            return false;
          }
          if (filterPublished === "Unpublished" && scheme.browse?.published !== "unpublished") {
            return false;
          }
        }
      }
      return true;
    };
    schemesToBeShown = new Set(
      $schemesGj.features
        .filter(filterFeatures)
        .map((f) => f.properties.scheme_reference!),
    );

    // Hide things on the map, and recalculate stats
    counts = { area: 0, route: 0, crossing: 0, other: 0, totalLength: 0.0 };
    let showFeature = (feature: FeatureUnion) => {
      if (!schemesToBeShown.has(feature.properties.scheme_reference!)) {
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
    for (let feature of $schemesGj.features) {
      if (showFeature(feature)) {
        delete feature.properties.hide_while_editing;
        counts[feature.properties.intervention_type]++;
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
    $schemesGj = $schemesGj;
    counts = counts;
  }
  $: filtersUpdated(
    filterSketchSource,
    $filterInterventionText,
    $filterSchemeText,
    filterAuthority,
    filterFundingProgramme,
    filterCurrentMilestone,
    filterPublished,
  );

  function metersToMiles(x: number): number {
    return x * 0.000621371;
  }

  function resetFilters() {
    filterSketchSource = "";
    filterAuthority = "";
    filterFundingProgramme = "";
    filterCurrentMilestone = "";
    $filterInterventionText = "";
    $filterSchemeText = "";
  }
</script>

<CollapsibleCard label="Filters">
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
  <Select
    label="Sketch source"
    choices={sketchSources}
    emptyOption
    bind:value={filterSketchSource}
  />
  <Select
    label="Published"
    choices={publishedStatus}
    emptyOption
    bind:value={filterPublished}
  />
  <FormElement
    label="Intervention name or description"
    id="filterInterventionText"
  >
    <input
      type="text"
      class="govuk-input govuk-input--width-10"
      id="filterInterventionText"
      bind:value={$filterInterventionText}
    />
    <SecondaryButton on:click={() => ($filterInterventionText = "")}>
      Clear
    </SecondaryButton>
  </FormElement>
  <FormElement label="Scheme name or reference" id="filterSchemeText">
    <input
      type="text"
      class="govuk-input govuk-input--width-10"
      id="filterSchemeText"
      bind:value={$filterSchemeText}
    />
    <SecondaryButton on:click={() => ($filterSchemeText = "")}>
      Clear
    </SecondaryButton>
  </FormElement>
  <InterventionColorSelector />
</CollapsibleCard>

<CheckboxGroup small>
  <Checkbox bind:checked={show}>
    Showing {schemesToBeShown.size.toLocaleString()} schemes ({counts.route.toLocaleString()}
    routes, {counts.area.toLocaleString()} areas,
    {counts.crossing.toLocaleString()} crossings, {counts.other.toLocaleString()}
    other, with total LineString length of {metersToMiles(
      counts.totalLength,
    ).toFixed(1)} miles)
  </Checkbox>
</CheckboxGroup>
