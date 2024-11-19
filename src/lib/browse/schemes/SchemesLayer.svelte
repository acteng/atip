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
    atfSchemes,
    lcwipSchemes,
    filterAtfSchemeText,
    filterAtfInterventionText,
    filterLcwipSchemeText,
    filterLcwipInterventionText,
    localSchemes,
    filterLocalSchemeText,
    filterLocalInterventionText,
  } from "./stores";
  import InterventionLayer from "./InterventionLayer.svelte";
  import { colorInterventionsBySchema, schemaLegend } from "schemas";
  import { currentMilestones, atfFundingProgrammes } from "./colors";
  import type { DataDrivenPropertyValueSpecification } from "maplibre-gl";
  import { constructMatchExpression } from "lib/maplibre";
  import LayerControl from "../layers/LayerControl.svelte";
  import { showHideLayer } from "../layers/url";

  let errorMessage = "";

  let atfName = "atf_schemes";
  let atfTitle = "ATF schemes";
  let atfShow = showHideLayer(atfName);
  let atfStyle = "fundingProgramme";
  $: [atfColor, atfLegend] = pickStyle(atfStyle);

  let lcwipName = "lcwip_schemes";
  let lcwipTitle = "LCWIP schemes";
  let lcwipShow = showHideLayer(lcwipName);
  let lcwipStyle = "interventionType";
  $: [lcwipColor, lcwipLegend] = pickStyle(lcwipStyle);

  let localName = "local_schemes";
  let localTitle = "Your schemes";
  let localShow = showHideLayer(localName);
  $: [localColor, localLegend] = pickStyle("interventionType");

  function loadMainFile(filename: string, text: string) {
    try {
      setupSchemes(JSON.parse(text), atfSchemes, lcwipSchemes);
      $atfShow = true;
      $lcwipShow = true;
      errorMessage = "";
    } catch (err) {
      errorMessage = `The file you loaded is broken: ${err}`;
    }
  }

  function importLocalSketches() {
    $localSchemes = importAllLocalSketches();
    $localShow = true;
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
    {#if Object.entries($atfSchemes.schemes).length > 0}
      <LayerControl name={atfName} title={atfTitle} bind:show={$atfShow}>
        <span slot="help">
          <p>
            <WarningIcon text="Scheme data caveats" />Please note there are data
            quality caveats for all scheme data:
          </p>
          <ul>
            {#each $atfSchemes.notes ?? [] as note}
              <li><p>{note}</p></li>
            {/each}
          </ul>
        </span>

        <div slot="controls" style="border: 1px solid black; padding: 8px;">
          <Filters
            source="ATF"
            bind:schemesGj={$atfSchemes}
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
          <Legend rows={atfLegend} />
        </div>
      </LayerControl>
    {/if}

    {#if Object.entries($lcwipSchemes.schemes).length > 0}
      <LayerControl name={lcwipName} title={lcwipTitle} bind:show={$lcwipShow}>
        <span slot="help">
          <p>
            <WarningIcon text="Scheme data caveats" />Please note there are data
            quality caveats for all scheme data:
          </p>
          <ul>
            {#each $lcwipSchemes.notes ?? [] as note}
              <li><p>{note}</p></li>
            {/each}
          </ul>
        </span>

        <div slot="controls" style="border: 1px solid black; padding: 8px;">
          <Filters
            source="LCWIP"
            bind:schemesGj={$lcwipSchemes}
            bind:filterSchemeText={$filterLcwipSchemeText}
            bind:filterInterventionText={$filterLcwipInterventionText}
          />

          <Select
            label="Colour interventions"
            choices={[["interventionType", "By intervention type"]]}
            bind:value={lcwipStyle}
          />
          <Legend rows={lcwipLegend} />
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
    {#if Object.entries($localSchemes.schemes).length > 0}
      <LayerControl name={localName} title={localTitle} bind:show={$localShow}>
        <span slot="help">
          <p>
            <WarningIcon text="Scheme data caveats" />Please note there are data
            quality caveats for all scheme data:
          </p>
          <ul>
            {#each $localSchemes.notes ?? [] as note}
              <li><p>{note}</p></li>
            {/each}
          </ul>
        </span>

        <div slot="controls" style="border: 1px solid black; padding: 8px;">
          <Filters
            source="Local"
            bind:schemesGj={$localSchemes}
            bind:filterSchemeText={$filterLocalSchemeText}
            bind:filterInterventionText={$filterLocalInterventionText}
          />

          <Legend rows={localLegend} />
        </div>
      </LayerControl>
    {/if}
  </CheckboxGroup>
</CollapsibleCard>

<InterventionLayer
  name="atf"
  description={atfTitle}
  show={$atfShow}
  schemesGj={$atfSchemes}
  filterSchemeText={$filterAtfSchemeText}
  filterInterventionText={$filterAtfInterventionText}
  color={atfColor}
/>

<InterventionLayer
  name="lcwip"
  description={lcwipTitle}
  show={$lcwipShow}
  schemesGj={$lcwipSchemes}
  filterSchemeText={$filterLcwipSchemeText}
  filterInterventionText={$filterLcwipInterventionText}
  color={lcwipColor}
/>

<InterventionLayer
  name="local"
  description={localTitle}
  show={$localShow}
  schemesGj={$localSchemes}
  filterSchemeText={$filterLocalSchemeText}
  filterInterventionText={$filterLocalInterventionText}
  color={localColor}
/>
