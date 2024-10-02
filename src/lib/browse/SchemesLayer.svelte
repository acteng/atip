<script lang="ts">
  import {
    CollapsibleCard,
    ErrorMessage,
    FileInput,
    Checkbox,
    Select,
  } from "govuk-svelte";
  import { appVersion, HelpButton, Legend } from "lib/common";
  import LoadRemoteSchemeData from "./LoadRemoteSchemeData.svelte";
  import { setupSchemes } from "./data";
  import Filters from "./Filters.svelte";
  import {
    atfSchemesGj,
    atfSchemes,
    lcwipSchemesGj,
    lcwipSchemes,
    filterAtfSchemeText,
    filterAtfInterventionText,
    filterLcwipSchemeText,
    filterLcwipInterventionText,
  } from "./stores";
  import InterventionLayer from "./InterventionLayer.svelte";
  import { colorInterventionsBySchema, schemaLegend } from "schemas";
  import { styleByCurrentMilestone, styleByFundingProgramme } from "./colors";
  import type { DataDrivenPropertyValueSpecification } from "maplibre-gl";

  let errorMessage = "";

  let showAtf = true;
  let showLcwip = true;

  let atfStyle = "fundingProgramme";
  $: [atfColor, atfLegend] = pickStyle(atfStyle);

  let lcwipStyle = "fundingProgramme";
  $: [lcwipColor, lcwipLegend] = pickStyle(lcwipStyle);

  function loadFile(filename: string, text: string) {
    try {
      setupSchemes(JSON.parse(text));
      errorMessage = "";
    } catch (err) {
      errorMessage = `The file you loaded is broken: ${err}`;
    }
  }

  function pickStyle(
    style: string,
  ): [DataDrivenPropertyValueSpecification<string>, [string, string][]] {
    if (style == "interventionType") {
      return [colorInterventionsBySchema("v1"), schemaLegend("v1")];
    } else if (style == "fundingProgramme") {
      return styleByFundingProgramme();
    } else if (style == "currentMilestone") {
      return styleByCurrentMilestone();
    } else {
      // Should be impossible
      return ["red", []];
    }
  }
</script>

<CollapsibleCard label="Schemes" open>
  {#if appVersion() == "Private (development)"}
    <LoadRemoteSchemeData {loadFile} />
  {/if}

  {#if $atfSchemes.size > 0}
    <Checkbox bind:checked={showAtf}>
      ATF schemes
      <span slot="right">
        <HelpButton>
          <p>Please note there are data quality caveats for all scheme data:</p>
          <ul>
            {#each $atfSchemesGj.notes ?? [] as note}
              <li><p>{note}</p></li>
            {/each}
          </ul>
        </HelpButton>
      </span>
    </Checkbox>

    <div style="display: flex; justify-content: space-between;">
      <Filters
        source="ATF"
        bind:schemesGj={$atfSchemesGj}
        bind:schemes={$atfSchemes}
        bind:filterSchemeText={$filterAtfSchemeText}
        bind:filterInterventionText={$filterAtfInterventionText}
      />

      <Select
        label="Colour interventions"
        choices={[
          ["fundingProgramme", "By funding programme"],
          ["interventionType", "By intervention type"],
          ["currentMilestone", "By current milestone"],
        ]}
        bind:value={atfStyle}
      />
    </div>
    <Legend rows={atfLegend} />
  {/if}

  {#if $lcwipSchemes.size > 0}
    <Checkbox bind:checked={showLcwip}>
      LCWIP schemes
      <span slot="right">
        <HelpButton>
          <p>Please note there are data quality caveats for all scheme data:</p>
          <ul>
            {#each $lcwipSchemesGj.notes ?? [] as note}
              <li><p>{note}</p></li>
            {/each}
          </ul>
        </HelpButton>
      </span>
    </Checkbox>

    <div style="display: flex; justify-content: space-between;">
      <Filters
        source="LCWIP"
        bind:schemesGj={$lcwipSchemesGj}
        bind:schemes={$lcwipSchemes}
        bind:filterSchemeText={$filterLcwipSchemeText}
        bind:filterInterventionText={$filterLcwipInterventionText}
      />

      <Select
        label="Colour interventions"
        choices={[
          ["fundingProgramme", "By funding programme"],
          ["interventionType", "By intervention type"],
          ["currentMilestone", "By current milestone"],
        ]}
        bind:value={lcwipStyle}
      />
    </div>
    <Legend rows={lcwipLegend} />
  {/if}

  <FileInput label="Load schemes from GeoJSON" onLoad={loadFile} />
  <ErrorMessage {errorMessage} />
</CollapsibleCard>

<InterventionLayer
  source="atf"
  show={showAtf}
  schemesGj={$atfSchemesGj}
  schemes={$atfSchemes}
  filterSchemeText={$filterAtfSchemeText}
  filterInterventionText={$filterAtfInterventionText}
  color={atfColor}
/>
<InterventionLayer
  source="lcwip"
  show={showLcwip}
  schemesGj={$lcwipSchemesGj}
  schemes={$lcwipSchemes}
  filterSchemeText={$filterLcwipSchemeText}
  filterInterventionText={$filterLcwipInterventionText}
  color={lcwipColor}
/>
