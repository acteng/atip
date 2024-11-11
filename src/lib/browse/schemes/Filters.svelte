<script lang="ts">
  import {
    DefaultButton,
    FormElement,
    SecondaryButton,
    Select,
    Checkbox,
    CheckboxGroup,
    AutocompleteTextInput,
  } from "govuk-svelte";
  import { Modal } from "lib/common";
  import type { Feature, Schemes } from "types";
  import {
    atfFundingProgrammes,
    currentMilestones as currentMilestoneColors,
  } from "./colors";

  export let source: string;
  export let schemesGj: Schemes;
  export let filterSchemeText: string;
  export let filterInterventionText: string;

  let open = false;

  // by scheme_reference
  let showSchemes: Set<string> = new Set();
  // Stats about filtered schemes
  let counts = { interventions: 0, totalLength: 0.0 };

  let currentMilestones: [string, string][] = Object.keys(
    currentMilestoneColors,
  ).map((x) => [x, x]);

  $: authorities = getAuthorities(schemesGj);
  let filterAuthority = "";
  let filterFundingProgrammes = Object.fromEntries(
    Object.keys(atfFundingProgrammes).map((x) => [x, true]),
  );
  let filterCurrentMilestone = "";

  function getAuthorities(schemesGj: Schemes): [string, string][] {
    let names: Set<string> = new Set();
    for (let x of Object.values(schemesGj.schemes)) {
      if (x.browse?.authority_or_region) {
        names.add(x.browse.authority_or_region);
      }
    }
    let result = Array.from(names.entries());
    result.sort();
    return result;
  }

  // When any filters change, update showSchemes
  function filtersUpdated(
    filterInterventionTextCopy: string,
    filterSchemeTextCopy: string,
    filterAuthority: string,
    filterFundingProgrammes: { [name: string]: boolean },
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

      let scheme = schemesGj.schemes[feature.properties.scheme_reference!];
      if (
        filterAuthority &&
        scheme.browse?.authority_or_region != filterAuthority
      ) {
        return false;
      }
      if (
        source == "ATF" &&
        scheme.browse!.funding_programme &&
        !filterFundingProgrammes[scheme.browse!.funding_programme]
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
    filterFundingProgrammes,
    filterCurrentMilestone,
  );

  function metersToMiles(x: number): number {
    return x * 0.000621371;
  }

  function resetFilters() {
    filterAuthority = "";
    filterFundingProgrammes = Object.fromEntries(
      Object.keys(atfFundingProgrammes).map((x) => [x, true]),
    );
    filterCurrentMilestone = "";
    filterInterventionText = "";
    filterSchemeText = "";
  }

  function schemeAutocompleteOptions(schemesGj: Schemes): [string, string][] {
    let result = [] as [string, string][];
    for (let scheme of Object.values(schemesGj.schemes)) {
      // TODO Consider not doing this for LCWIPs
      result.push([scheme.scheme_reference, scheme.scheme_reference]);
      if (scheme.scheme_name) {
        result.push([scheme.scheme_name, scheme.scheme_name]);
      }
    }
    return result;
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

  {#if source == "ATF"}
    <div class="govuk-grid-row">
      <div class="govuk-grid-column-one-half">
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

        <AutocompleteTextInput
          label="Scheme name or reference"
          bind:value={filterSchemeText}
          options={schemeAutocompleteOptions(schemesGj)}
        />

        <Select
          label="Authority or region"
          choices={authorities}
          emptyOption
          bind:value={filterAuthority}
        />
      </div>

      <div class="govuk-grid-column-one-half">
        <FormElement label="Funding programmes" id="filterFundingProgrammes">
          <CheckboxGroup small>
            {#each Object.keys(atfFundingProgrammes) as fp}
              <Checkbox bind:checked={filterFundingProgrammes[fp]}>
                {fp}
              </Checkbox>
            {/each}
          </CheckboxGroup>
        </FormElement>

        <Select
          label="Current milestone"
          choices={currentMilestones}
          emptyOption
          bind:value={filterCurrentMilestone}
        />
      </div>
    </div>
  {:else}
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

    <AutocompleteTextInput
      label="Scheme name or reference"
      bind:value={filterSchemeText}
      options={schemeAutocompleteOptions(schemesGj)}
    />

    <Select
      label="Authority or region"
      choices={authorities}
      emptyOption
      bind:value={filterAuthority}
    />
  {/if}

  <DefaultButton on:click={() => (open = false)}>Done</DefaultButton>
</Modal>
