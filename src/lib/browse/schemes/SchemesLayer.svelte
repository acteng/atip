<script lang="ts">
  import {
    ButtonGroup,
    CheckboxGroup,
    CollapsibleCard,
    ErrorMessage,
    FileInput,
    SecondaryButton,
    Select,
  } from "govuk-svelte";
  import { appVersion, Legend, WarningIcon } from "lib/common";
  import { downloadGeneratedFile } from "lib/common/files";
  import { constructMatchExpression } from "lib/maplibre";
  import type { DataDrivenPropertyValueSpecification } from "maplibre-gl";
  import { colorInterventionsBySchema, schemaLegend } from "schemas";
  import type { Writable } from "svelte/store";
  import LayerControl from "../layers/LayerControl.svelte";
  import { showHideLayer } from "../layers/url";
  import { atfFundingProgrammes, currentMilestones } from "./colors";
  import {
    importAllLocalSketches,
    setupSchemes,
    type SchemeTypeDetails,
  } from "./data";
  import Filters from "./Filters.svelte";
  import InterventionLayer from "./InterventionLayer.svelte";
  import LoadRemoteSchemeData from "./LoadRemoteSchemeData.svelte";
  import SchemesLayerControl from "./SchemesLayerControl.svelte";
  import {
    atfSchemes,
    filterAtfInterventionText,
    filterAtfSchemeText,
    filterFinalInspectionsInterventionText,
    filterFinalInspectionsSchemeText,
    filterLcwipInterventionText,
    filterLcwipSchemeText,
    filterLocalInterventionText,
    filterLocalSchemeText,
    finalInspectionsSchemes,
    lcwipSchemes,
    localSchemes,
  } from "./stores";

  let errorMessage = "";

  const [atfColour, atfLegend] = pickStyle("fundingProgramme");
  let atfDetails: SchemeTypeDetails = {
    name: "atf_schemes",
    title: "ATF schemes",
    style: "fundingProgramme",
    colour: atfColour,
    legend: atfLegend,
  };
  const showAtf: Writable<boolean> = showHideLayer("atf_schemes");

  $: {
    const [atfColour, atfLegend] = pickStyle(atfDetails.style);
    atfDetails.colour = atfColour;
    atfDetails.legend = atfLegend;
  }

  const [lcwipColour, lcwipLegend] = pickStyle("fundingProgramme");
  let lcwipDetails: SchemeTypeDetails = {
    name: "lcwip_schemes",
    title: "LCWIP schemes",
    style: "fundingProgramme",
    colour: lcwipColour,
    legend: lcwipLegend,
  };
  const showLcwip: Writable<boolean> = showHideLayer("lcwip_schemes");

  $: {
    const [lcwipColour, lcwipLegend] = pickStyle(lcwipDetails.style);
    lcwipDetails.colour = lcwipColour;
    lcwipDetails.legend = lcwipLegend;
  }

  console.log(atfDetails);
  console.log(JSON.stringify(atfDetails));
  $: {
    console.log(atfSchemes);
    console.log($atfSchemes);
    console.log(JSON.stringify(atfSchemes))
  }

  const [finalInspectionsColour, finalInspectionsLegend] =
    pickStyle("fundingProgramme");
  let finalInspectionsDetails: SchemeTypeDetails = {
    name: "finalInspections_schemes",
    title: "Final Inspections schemes",
    style: "fundingProgramme",
    colour: finalInspectionsColour,
    legend: finalInspectionsLegend,
  };
  const showFinalInspections: Writable<boolean> = showHideLayer(
    "finalInspections_schemes",
  );
  $: {
    const [finalInspectionsColour, finalInspectionsLegend] = pickStyle(
      finalInspectionsDetails.style,
    );
    finalInspectionsDetails.colour = finalInspectionsColour;
    finalInspectionsDetails.legend = finalInspectionsLegend;
  }

  let localName = "local_schemes";
  let localTitle = "Your schemes";
  let localShow = showHideLayer(localName);
  $: [localColor, localLegend] = pickStyle("interventionType");

  function loadMainFile(filename: string, text: string) {
    try {
      setupSchemes(
        JSON.parse(text),
        atfSchemes,
        lcwipSchemes,
        finalInspectionsSchemes,
      );
      $showAtf = true;
      $showLcwip = true;
      $showFinalInspections = true;
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

  function downloadLocalSchemes() {
    downloadGeneratedFile(
      "all_your_schemes.geojson",
      JSON.stringify($localSchemes, null, "  "),
    );
  }
</script>

<CollapsibleCard label="Schemes" open>
  {#if appVersion() == "Private (development)"}
    <LoadRemoteSchemeData loadFile={loadMainFile} />
  {/if}

  <CheckboxGroup small>
    {#if atfSchemes && finalInspectionsSchemes && lcwipSchemes}
    <SchemesLayerControl
      details={atfDetails},
      show={showAtf},
      schemes={atfSchemes},
      filterSchemeText={$filterAtfSchemeText},
      filterInterventionText={$filterAtfInterventionText},
    />

    <SchemesLayerControl
      details={finalInspectionsDetails},
      show={showFinalInspections},
      schemes={finalInspectionsSchemes},
      filterSchemeText={$filterFinalInspectionsSchemeText},
      filterInterventionText={$filterFinalInspectionsInterventionText},
    />

    <SchemesLayerControl
      details={lcwipDetails},
      show={showLcwip},
      schemes={lcwipSchemes},
      filterSchemeText={$filterLcwipSchemeText},
      filterInterventionText={$filterLcwipInterventionText},
    />
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
          <ButtonGroup>
            <Filters
              source="Local"
              bind:schemesGj={$localSchemes}
              bind:filterSchemeText={$filterLocalSchemeText}
              bind:filterInterventionText={$filterLocalInterventionText}
            />
            <SecondaryButton on:click={downloadLocalSchemes}>
              Download all schemes
            </SecondaryButton>
          </ButtonGroup>

          <Legend rows={localLegend} />
        </div>
      </LayerControl>
    {/if}
  </CheckboxGroup>
</CollapsibleCard>

<InterventionLayer
  name="atf"
  details={atfDetails}
  show={showAtf}
  schemesGj={$atfSchemes}
  filterSchemeText={$filterAtfSchemeText}
  filterInterventionText={$filterAtfInterventionText}
/>

<InterventionLayer
  name="finalInspections"
  details={finalInspectionsDetails}
  show={showFinalInspections}
  schemesGj={$finalInspectionsSchemes}
  filterSchemeText={$filterFinalInspectionsSchemeText}
  filterInterventionText={$filterFinalInspectionsInterventionText}
/>

<InterventionLayer
  name="lcwip"
  details={lcwipDetails}
  show={showLcwip}
  schemesGj={$lcwipSchemes}
  filterSchemeText={$filterLcwipSchemeText}
  filterInterventionText={$filterLcwipInterventionText}
/>

<!-- <InterventionLayer
  name="local"
  description={localTitle}
  show={$localShow}
  schemesGj={$localSchemes}
  filterSchemeText={$filterLocalSchemeText}
  filterInterventionText={$filterLocalInterventionText}
  color={localColor}
/> -->
