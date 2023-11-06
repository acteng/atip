<script lang="ts">
  import { CollapsibleCard, Modal } from "lib/common";
  import {
    ButtonGroup,
    ErrorMessage,
    SecondaryButton,
    TextInput,
    WarningButton,
  } from "lib/govuk";
  import { gjScheme, mode } from "stores";
  import type { FeatureUnion, PipelineScheme } from "types";
  import PipelineSchemeForm from "./PipelineSchemeForm.svelte";

  export let subscheme: PipelineScheme;
  export let getSubschemeNameUpdater: Function;

  let displayDeleteConfirmation = false;

  // @ts-ignore we know subschemes exists because otherwise this wouldn't be rendered
  $: disabledSubschemeDeletion = $gjScheme.subschemes?.length < 2;

  let numErrors = 0;

  function deleteScheme() {
    displayDeleteConfirmation = false;
    const clonedScheme = JSON.parse(JSON.stringify($gjScheme));
    clonedScheme.features = clonedScheme.features.filter(
      (feature: FeatureUnion) => {
        return feature.properties.pipeline?.schemeId !== subscheme.id;
      }
    );
    clonedScheme.subschemes = clonedScheme.subschemes?.filter(
      (thatSubscheme: PipelineScheme) => {
        return thatSubscheme.id !== subscheme.id;
      }
    );
    gjScheme.set(clonedScheme);
  }
</script>

{#if $mode.mode == "list"}
  <CollapsibleCard label={subscheme.name}>
    <TextInput
      label="Scheme name:"
      value={subscheme.name}
      on:change={getSubschemeNameUpdater(subscheme.name)}
    />
    <PipelineSchemeForm {subscheme} />
    <WarningButton
      disabled={disabledSubschemeDeletion}
      on:click={() => (displayDeleteConfirmation = true)}
    >
      Delete scheme
    </WarningButton>
    <Modal
      title="Would you like to delete this scheme?"
      bind:open={displayDeleteConfirmation}
      displayEscapeButton={false}
    >
      <p>This will delete all its interventions.</p>
      <ButtonGroup>
        <WarningButton
          on:click={() => {
            deleteScheme();
          }}
        >
          Delete this scheme and related interventions
        </WarningButton>
        <SecondaryButton on:click={() => (displayDeleteConfirmation = false)}>
          Cancel
        </SecondaryButton>
      </ButtonGroup>
    </Modal>
    {#if numErrors == 1}
      <ErrorMessage
        errorMessage="There's a problem with one intervention below"
      />
    {:else if numErrors > 0}
      <ErrorMessage
        errorMessage="There's a problem with {numErrors} interventions below"
      />
    {/if}
  </CollapsibleCard>
{/if}
