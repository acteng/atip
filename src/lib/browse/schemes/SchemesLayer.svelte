<script lang="ts">
  import {
    CollapsibleCard,
    ErrorMessage,
    FileInput,
    Select,
    CheckboxGroup,
  } from "govuk-svelte";
  import { appVersion, Legend, WarningIcon } from "lib/common";
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

  function loadFile(filename: string, text: string) {
    try {
      setupSchemes(JSON.parse(text));
      $atfShow = true;
      $lcwipShow = true;
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
    <LoadRemoteSchemeData {loadFile} />
  {/if}

  <CheckboxGroup small>
    {#if $atfSchemes.size > 0}
      <LayerControl name={atfName} title={atfTitle} bind:show={$atfShow}>
        <span slot="help">
          <p>
            <WarningIcon text="Scheme data caveats" />Please note there are data
            quality caveats for all scheme data:
          </p>
          <ul>
            {#each $atfSchemesGj.notes ?? [] as note}
              <li><p>{note}</p></li>
            {/each}
          </ul>
        </span>

        <div slot="controls" style="border: 1px solid black; padding: 8px;">
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
          <Legend rows={atfLegend} />
        </div>
      </LayerControl>
    {/if}

    {#if $lcwipSchemes.size > 0}
      <LayerControl name={lcwipName} title={lcwipTitle} bind:show={$lcwipShow}>
        <span slot="help">
          <p>
            <WarningIcon text="Scheme data caveats" />Please note there are data
            quality caveats for all scheme data:
          </p>
          <ul>
            {#each $lcwipSchemesGj.notes ?? [] as note}
              <li><p>{note}</p></li>
            {/each}
          </ul>
        </span>

        <div slot="controls" style="border: 1px solid black; padding: 8px;">
          <Filters
            source="LCWIP"
            bind:schemesGj={$lcwipSchemesGj}
            bind:schemes={$lcwipSchemes}
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

  <FileInput label="Load schemes from GeoJSON" onLoad={loadFile} />
  <ErrorMessage {errorMessage} />
</CollapsibleCard>

<InterventionLayer
  source="atf"
  show={$atfShow}
  schemesGj={$atfSchemesGj}
  schemes={$atfSchemes}
  filterSchemeText={$filterAtfSchemeText}
  filterInterventionText={$filterAtfInterventionText}
  color={atfColor}
/>
<InterventionLayer
  source="lcwip"
  show={$lcwipShow}
  schemesGj={$lcwipSchemesGj}
  schemes={$lcwipSchemes}
  filterSchemeText={$filterLcwipSchemeText}
  filterInterventionText={$filterLcwipInterventionText}
  color={lcwipColor}
/>
