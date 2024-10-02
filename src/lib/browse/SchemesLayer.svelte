<script lang="ts">
  import {
    CollapsibleCard,
    ErrorMessage,
    FileInput,
    SecondaryButton,
  } from "govuk-svelte";
  import { appVersion, Modal } from "lib/common";
  import LoadRemoteSchemeData from "./LoadRemoteSchemeData.svelte";
  import { processInput } from "./data";
  import Filters from "./Filters.svelte";
  import { schemes, schemesGj } from "./stores";
  import InterventionLayer from "./InterventionLayer.svelte";

  let schemesToBeShown: Set<string> = new Set();
  let showSchemes = true;
  let showSchemeNotes = false;

  let errorMessage = "";

  function loadFile(filename: string, text: string) {
    try {
      schemesGj.set(JSON.parse(text));
      schemes.set(processInput($schemesGj));
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
  {#if $schemesGj.notes}
    <SecondaryButton on:click={() => (showSchemeNotes = true)}>
      About the scheme data
    </SecondaryButton>
    <Modal title="About this scheme data" bind:open={showSchemeNotes}>
      <div class="govuk-prose">
        <p>Please note there are data quality caveats for all scheme data:</p>
        <ul>
          {#each $schemesGj.notes as note}
            <li><p>{note}</p></li>
          {/each}
        </ul>
      </div>
    </Modal>
  {/if}
  <FileInput label="Load schemes from GeoJSON" onLoad={loadFile} />
  <ErrorMessage {errorMessage} />

  {#if $schemes.size > 0}
    <Filters bind:schemesToBeShown bind:show={showSchemes} />
  {/if}
</CollapsibleCard>

<InterventionLayer {showSchemes} />
