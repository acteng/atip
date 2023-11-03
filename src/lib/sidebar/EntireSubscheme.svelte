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
  import { onMount } from "svelte";
  import type { FeatureUnion, Scheme, PipelineScheme } from "types";
  import ListedIntervention from "./ListedIntervention.svelte";
  import { interventionWarning } from "./scheme_data";
    import PipelineSchemeForm from "./PipelineSchemeForm.svelte";

  export let subscheme: PipelineScheme;
  export let superscheme: Scheme;
  export let getSubschemeNameUpdater: Function;

  let displayDeleteConfirmation = false;
  let features: FeatureUnion[] = [];

  // @ts-ignore we know subschemes exists because otherwise this wouldn't be rendered
  $: disabledSubschemeDeletion = $gjScheme.subschemes?.length < 2;

  let numErrors = 0;

  onMount(async () => {
    features = superscheme.features.filter((feature) => {
      return feature.properties.pipelineIntervention?.schemeId === subscheme.id;
    });
  });

  function deleteSubscheme() {
    displayDeleteConfirmation = false;
    const clonedScheme = JSON.parse(JSON.stringify($gjScheme));
    clonedScheme.features = clonedScheme.features.filter(
      (feature: FeatureUnion) => {
        return (
          feature.properties.pipelineIntervention?.schemeId !== subscheme.id
        );
      }
    );
    clonedScheme.subschemes = clonedScheme.subschemes?.filter(
      (thatSubscheme: Subscheme) => {
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
    <PipelineSchemeForm {subscheme}/>
    <WarningButton
      disabled={disabledSubschemeDeletion}
      on:click={() => (displayDeleteConfirmation = true)}
    >
      Delete subscheme
    </WarningButton>
    <Modal
      title="Would you like to delete this subscheme?"
      bind:open={displayDeleteConfirmation}
      displayEscapeButton={false}
    >
      <p>This will delete all its interventions.</p>
      <ButtonGroup>
        <WarningButton
          on:click={() => {
            deleteSubscheme();
          }}
        >
          Delete this subscheme and related interventions
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
    {#each features as feature}
      {@const warning = interventionWarning("pipeline", feature)}
      <ListedIntervention {feature} schema={"pipeline"} {warning} />
    {/each}
  </CollapsibleCard>
{/if}
