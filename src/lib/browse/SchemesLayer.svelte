<script lang="ts">
  import {
    CollapsibleCard,
    ErrorMessage,
    FileInput,
    Checkbox,
  } from "govuk-svelte";
  import { appVersion, HelpButton } from "lib/common";
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

  let showAtf = true;
  let showLcwip = true;

  let errorMessage = "";

  function loadFile(filename: string, text: string) {
    try {
      setupSchemes(JSON.parse(text));
      errorMessage = "";
    } catch (err) {
      errorMessage = `The file you loaded is broken: ${err}`;
    }
  }
</script>

<CollapsibleCard label="Schemes">
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

    <Filters
      source="ATF"
      bind:schemesGj={$atfSchemesGj}
      bind:schemes={$atfSchemes}
      bind:filterSchemeText={$filterAtfSchemeText}
      bind:filterInterventionText={$filterAtfInterventionText}
    />
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

    <Filters
      source="LCWIP"
      bind:schemesGj={$lcwipSchemesGj}
      bind:schemes={$lcwipSchemes}
      bind:filterSchemeText={$filterLcwipSchemeText}
      bind:filterInterventionText={$filterLcwipInterventionText}
    />
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
/>
<InterventionLayer
  source="lcwip"
  show={showLcwip}
  schemesGj={$lcwipSchemesGj}
  schemes={$lcwipSchemes}
  filterSchemeText={$filterLcwipSchemeText}
  filterInterventionText={$filterLcwipInterventionText}
/>
