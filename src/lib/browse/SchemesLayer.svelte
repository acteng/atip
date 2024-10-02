<script lang="ts">
  import {
    CollapsibleCard,
    ErrorMessage,
    FileInput,
    Checkbox,
  } from "govuk-svelte";
  import { appVersion, HelpButton } from "lib/common";
  import LoadRemoteSchemeData from "./LoadRemoteSchemeData.svelte";
  import { processInput } from "./data";
  import Filters from "./Filters.svelte";
  import { schemes, schemesGj } from "./stores";
  import InterventionLayer from "./InterventionLayer.svelte";

  let show = true;

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
  {#if $schemes.size > 0}
    <Checkbox bind:checked={show}>
      ATF and LCWIP schemes
      <span slot="right">
        <HelpButton>
          <p>Please note there are data quality caveats for all scheme data:</p>
          {#if $schemesGj.notes}
            <ul>
              {#each $schemesGj.notes as note}
                <li><p>{note}</p></li>
              {/each}
            </ul>
          {/if}
        </HelpButton>
      </span>
    </Checkbox>

    <Filters />
  {/if}

  <FileInput label="Load schemes from GeoJSON" onLoad={loadFile} />
  <ErrorMessage {errorMessage} />
</CollapsibleCard>

<InterventionLayer {show} />
