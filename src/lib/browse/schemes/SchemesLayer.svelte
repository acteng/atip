<script lang="ts">
  import {
    CollapsibleCard,
    ErrorMessage,
    FileInput,
    Select,
    CheckboxGroup,
    SecondaryButton,
  } from "govuk-svelte";
  import { appVersion, Legend, WarningIcon } from "lib/common";
  import LoadRemoteSchemeData from "./LoadRemoteSchemeData.svelte";
  import { importAllLocalSketches, setupSchemes } from "./data";
  import Filters from "./Filters.svelte";
  import {
    mainAtfSchemes,
    mainLcwipSchemes,
    filterMainAtfSchemeText,
    filterMainAtfInterventionText,
    filterMainLcwipSchemeText,
    filterMainLcwipInterventionText,
    localAtfSchemes,
    localLcwipSchemes,
    filterLocalAtfSchemeText,
    filterLocalAtfInterventionText,
    filterLocalLcwipSchemeText,
    filterLocalLcwipInterventionText,
  } from "./stores";
  import InterventionLayer from "./InterventionLayer.svelte";
  import { colorInterventionsBySchema, schemaLegend } from "schemas";
  import { currentMilestones, atfFundingProgrammes } from "./colors";
  import type { DataDrivenPropertyValueSpecification } from "maplibre-gl";
  import { constructMatchExpression } from "lib/maplibre";
  import LayerControl from "../layers/LayerControl.svelte";
  import { showHideLayer } from "../layers/url";

  let errorMessage = "";

  let mainAtfName = "main_atf_schemes";
  let mainAtfTitle = "ATF schemes";
  let mainAtfShow = showHideLayer(mainAtfName);
  let mainAtfStyle = "fundingProgramme";
  $: [mainAtfColor, mainAtfLegend] = pickStyle(mainAtfStyle);

  let mainLcwipName = "main_lcwip_schemes";
  let mainLcwipTitle = "LCWIP schemes";
  let mainLcwipShow = showHideLayer(mainLcwipName);
  let mainLcwipStyle = "interventionType";
  $: [mainLcwipColor, mainLcwipLegend] = pickStyle(mainLcwipStyle);

  let localAtfName = "local_atf_schemes";
  let localAtfTitle = "Your ATF schemes";
  let localAtfShow = showHideLayer(localAtfName);
  let localAtfStyle = "fundingProgramme";
  $: [localAtfColor, localAtfLegend] = pickStyle(localAtfStyle);

  let localLcwipName = "local_lcwip_schemes";
  let localLcwipTitle = "Your LCWIP schemes";
  let localLcwipShow = showHideLayer(localLcwipName);
  let localLcwipStyle = "interventionType";
  $: [localLcwipColor, localLcwipLegend] = pickStyle(localLcwipStyle);

  function loadMainFile(filename: string, text: string) {
    try {
      setupSchemes(JSON.parse(text), mainAtfSchemes, mainLcwipSchemes);
      $mainAtfShow = true;
      $mainLcwipShow = true;
      errorMessage = "";
    } catch (err) {
      errorMessage = `The file you loaded is broken: ${err}`;
    }
  }

  function importLocalSketches() {
    setupSchemes(importAllLocalSketches(), localAtfSchemes, localLcwipSchemes);
    $localAtfShow = true;
    $localLcwipShow = true;
  }

  function pickStyle(
    style: string,
  ): [DataDrivenPropertyValueSpecification<string>, [string, string][]] {
    if (style == "interventionType") {
      return [colorInterventionsBySchema("v1"), schemaLegend("v1")];
    } else if (style == "fundingProgramme") {
      return [
        constructMatchExpression(
          ["get", "funding_programme"],
          atfFundingProgrammes,
          "grey",
        ),
        Object.entries(atfFundingProgrammes),
      ];
    } else if (style == "currentMilestone") {
      return [
        constructMatchExpression(
          ["get", "current_milestone"],
          currentMilestones,
          "grey",
        ),
        Object.entries(currentMilestones),
      ];
    } else {
      // Should be impossible
      return ["red", []];
    }
  }
</script>

<CollapsibleCard label="Schemes" open>
  {#if appVersion() == "Private (development)"}
    <LoadRemoteSchemeData loadFile={loadMainFile} />
  {/if}

  <CheckboxGroup small>
    {#if Object.entries($mainAtfSchemes.schemes).length > 0}
      <LayerControl
        name={mainAtfName}
        title={mainAtfTitle}
        bind:show={$mainAtfShow}
      >
        <span slot="help">
          <p>
            <WarningIcon text="Scheme data caveats" />Please note there are data
            quality caveats for all scheme data:
          </p>
          <ul>
            {#each $mainAtfSchemes.notes ?? [] as note}
              <li><p>{note}</p></li>
            {/each}
          </ul>
        </span>

        <div slot="controls" style="border: 1px solid black; padding: 8px;">
          <Filters
            source="ATF"
            bind:schemesGj={$mainAtfSchemes}
            bind:filterSchemeText={$filterMainAtfSchemeText}
            bind:filterInterventionText={$filterMainAtfInterventionText}
          />

          <Select
            label="Colour interventions"
            choices={[
              ["fundingProgramme", "By funding programme"],
              ["interventionType", "By intervention type"],
              ["currentMilestone", "By current milestone"],
            ]}
            bind:value={mainAtfStyle}
          />
          <Legend rows={mainAtfLegend} />
        </div>
      </LayerControl>
    {/if}

    {#if Object.entries($mainLcwipSchemes.schemes).length > 0}
      <LayerControl
        name={mainLcwipName}
        title={mainLcwipTitle}
        bind:show={$mainLcwipShow}
      >
        <span slot="help">
          <p>
            <WarningIcon text="Scheme data caveats" />Please note there are data
            quality caveats for all scheme data:
          </p>
          <ul>
            {#each $mainLcwipSchemes.notes ?? [] as note}
              <li><p>{note}</p></li>
            {/each}
          </ul>
        </span>

        <div slot="controls" style="border: 1px solid black; padding: 8px;">
          <Filters
            source="LCWIP"
            bind:schemesGj={$mainLcwipSchemes}
            bind:filterSchemeText={$filterMainLcwipSchemeText}
            bind:filterInterventionText={$filterMainLcwipInterventionText}
          />

          <Select
            label="Colour interventions"
            choices={[["interventionType", "By intervention type"]]}
            bind:value={mainLcwipStyle}
          />
          <Legend rows={mainLcwipLegend} />
        </div>
      </LayerControl>
    {/if}
  </CheckboxGroup>

  <FileInput label="Load schemes from GeoJSON" onLoad={loadMainFile} />
  <ErrorMessage {errorMessage} />

  <hr />

  <SecondaryButton on:click={importLocalSketches}>
    Show your sketches
  </SecondaryButton>

  <CheckboxGroup small>
    {#if Object.entries($localAtfSchemes.schemes).length > 0}
      <LayerControl
        name={localAtfName}
        title={localAtfTitle}
        bind:show={$localAtfShow}
      >
        <span slot="help">
          <p>
            <WarningIcon text="Scheme data caveats" />Please note there are data
            quality caveats for all scheme data:
          </p>
          <ul>
            {#each $localAtfSchemes.notes ?? [] as note}
              <li><p>{note}</p></li>
            {/each}
          </ul>
        </span>

        <div slot="controls" style="border: 1px solid black; padding: 8px;">
          <Filters
            source="ATF"
            bind:schemesGj={$localAtfSchemes}
            bind:filterSchemeText={$filterLocalAtfSchemeText}
            bind:filterInterventionText={$filterLocalAtfInterventionText}
          />

          <Select
            label="Colour interventions"
            choices={[
              ["fundingProgramme", "By funding programme"],
              ["interventionType", "By intervention type"],
              ["currentMilestone", "By current milestone"],
            ]}
            bind:value={localAtfStyle}
          />
          <Legend rows={localAtfLegend} />
        </div>
      </LayerControl>
    {/if}

    {#if Object.entries($localLcwipSchemes.schemes).length > 0}
      <LayerControl
        name={localLcwipName}
        title={localLcwipTitle}
        bind:show={$localLcwipShow}
      >
        <span slot="help">
          <p>
            <WarningIcon text="Scheme data caveats" />Please note there are data
            quality caveats for all scheme data:
          </p>
          <ul>
            {#each $localLcwipSchemes.notes ?? [] as note}
              <li><p>{note}</p></li>
            {/each}
          </ul>
        </span>

        <div slot="controls" style="border: 1px solid black; padding: 8px;">
          <Filters
            source="LCWIP"
            bind:schemesGj={$localLcwipSchemes}
            bind:filterSchemeText={$filterLocalLcwipSchemeText}
            bind:filterInterventionText={$filterLocalLcwipInterventionText}
          />

          <Select
            label="Colour interventions"
            choices={[["interventionType", "By intervention type"]]}
            bind:value={localLcwipStyle}
          />
          <Legend rows={localLcwipLegend} />
        </div>
      </LayerControl>
    {/if}
  </CheckboxGroup>
</CollapsibleCard>

<InterventionLayer
  name="main_atf"
  description={mainAtfTitle}
  show={$mainAtfShow}
  schemesGj={$mainAtfSchemes}
  filterSchemeText={$filterMainAtfSchemeText}
  filterInterventionText={$filterMainAtfInterventionText}
  color={mainAtfColor}
/>
<InterventionLayer
  name="main_lcwip"
  description={mainLcwipTitle}
  show={$mainLcwipShow}
  schemesGj={$mainLcwipSchemes}
  filterSchemeText={$filterMainLcwipSchemeText}
  filterInterventionText={$filterMainLcwipInterventionText}
  color={mainLcwipColor}
/>

<InterventionLayer
  name="local_atf"
  description={localAtfTitle}
  show={$localAtfShow}
  schemesGj={$localAtfSchemes}
  filterSchemeText={$filterLocalAtfSchemeText}
  filterInterventionText={$filterLocalAtfInterventionText}
  color={localAtfColor}
/>
<InterventionLayer
  name="local_lcwip"
  description={localLcwipTitle}
  show={$localLcwipShow}
  schemesGj={$localLcwipSchemes}
  filterSchemeText={$filterLocalLcwipSchemeText}
  filterInterventionText={$filterLocalLcwipInterventionText}
  color={localLcwipColor}
/>
