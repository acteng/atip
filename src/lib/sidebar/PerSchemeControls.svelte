<script lang="ts">
  import { Modal, WarningIcon } from "lib/common";
  import {
    ButtonGroup,
    Checkbox,
    ErrorMessage,
    SecondaryButton,
    Select,
    WarningButton,
  } from "lib/govuk";
  import { bbox } from "lib/maplibre";
  import {
    gjSchemeCollection,
    hideSchemes,
    map,
    mode,
    schema,
    sidebarHover,
  } from "stores";
  import { onDestroy } from "svelte";
  import deleteIcon from "../../../assets/delete.svg?url";
  import GenericSchemeForm from "./GenericSchemeForm.svelte";
  import PipelineSchemeForm from "./PipelineSchemeForm.svelte";
  import {
    emptyCollection,
    interventionName,
    interventionWarning,
  } from "./scheme_data";

  export let scheme_reference: string;

  let showDeleteModal = false;

  $: numErrors = $gjSchemeCollection.features.filter(
    (f) =>
      f.properties.scheme_reference == scheme_reference &&
      interventionWarning(f) != null
  ).length;
  $: numFeatures = $gjSchemeCollection.features.filter(
    (f) => f.properties.scheme_reference == scheme_reference
  ).length;

  onDestroy(() => {
    sidebarHover.set(null);
  });

  function edit(e: MouseEvent, id: number) {
    // Use <a> for buttons. Disable the href behavior.
    e.preventDefault();

    // When the user starts editing something from the sidebar, warp to what's
    // being edited. (Don't do this when clicking the object on the map.)
    let feature = $gjSchemeCollection.features.find((f) => f.id == id)!;

    // Padding around a point looks odd; special case it by keeping the current zoom
    if (feature.geometry.type == "Point") {
      $map.flyTo({
        center: feature.geometry.coordinates as [number, number],
        duration: 500,
      });
    } else {
      $map.fitBounds(bbox(feature), {
        padding: 200,
        duration: 500,
      });
    }

    mode.set({ mode: "edit-form", id });
  }

  function unhover(id: number) {
    sidebarHover.update((current) => {
      if (current == id) {
        return null;
      }
      return current;
    });
  }

  function deleteScheme() {
    gjSchemeCollection.update((gj) => {
      gj.features = gj.features.filter(
        (f) => f.properties.scheme_reference != scheme_reference
      );
      delete gj.schemes[scheme_reference];
      if (Object.keys(gj.schemes).length == 0) {
        gj = emptyCollection();
      }
      return gj;
    });
    hideSchemes.update((set) => {
      set.delete(scheme_reference);
      return set;
    });
    showDeleteModal = false;
  }

  let moveToScheme = "";
  function moveFeatures() {
    if (moveToScheme) {
      gjSchemeCollection.update((gj) => {
        for (let f of gj.features) {
          if (f.properties.scheme_reference == scheme_reference) {
            f.properties.scheme_reference = moveToScheme;
          }
        }
        return gj;
      });
    }
  }

  function moveSchemeChoices(): [string, string][] {
    return Object.values($gjSchemeCollection.schemes)
      .filter((scheme) => scheme.scheme_reference != scheme_reference)
      .map((scheme) => [
        scheme.scheme_reference,
        scheme.scheme_name ?? "Untitled scheme",
      ]);
  }

  // TODO Svelte can't bind to set membership?
  let showScheme = !$hideSchemes.has(scheme_reference);
  function showOrHide() {
    hideSchemes.update((set) => {
      if (showScheme) {
        set.delete(scheme_reference);
      } else {
        set.add(scheme_reference);
      }
      return set;
    });
  }
</script>

<h3>
  {$gjSchemeCollection.schemes[scheme_reference].scheme_name ??
    "Untitled scheme"}
  <input
    type="color"
    bind:value={$gjSchemeCollection.schemes[scheme_reference].color}
  />
  <WarningButton on:click={() => (showDeleteModal = true)}>
    <img src={deleteIcon} alt="Delete scheme" />
    Delete
  </WarningButton>
</h3>
<Checkbox
  id={"show-scheme-" + scheme_reference}
  bind:checked={showScheme}
  on:change={showOrHide}
>
  Show
</Checkbox>
<slot />
{#if $schema == "pipeline"}
  <PipelineSchemeForm {scheme_reference} />
{:else}
  <GenericSchemeForm {scheme_reference} />
{/if}

{#if numErrors == 1}
  <ErrorMessage errorMessage="There's a problem with one intervention below" />
{:else if numErrors > 0}
  <ErrorMessage
    errorMessage="There's a problem with {numErrors} interventions below"
  />
{/if}

<ol class="govuk-list govuk-list--number">
  {#each $gjSchemeCollection.features.filter((f) => f.properties.scheme_reference == scheme_reference) as feature (feature.id)}
    {@const warning = interventionWarning(feature)}
    <li>
      <!-- svelte-ignore a11y-invalid-attribute -->
      <a
        href="#"
        on:click={(e) => edit(e, feature.id)}
        on:mouseenter={() => sidebarHover.set(feature.id)}
        on:mouseleave={() => unhover(feature.id)}
      >
        {#if warning}
          <WarningIcon text={warning} />
        {/if}
        {interventionName(feature)}
      </a>
      {#if $schema === "pipeline" && feature.properties.pipeline?.is_alternative}
        <span> (alternative)</span>
      {/if}
    </li>
  {/each}
</ol>

<Modal
  title="Delete this scheme?"
  bind:open={showDeleteModal}
  displayEscapeButton={false}
>
  {#if numFeatures > 0 && moveSchemeChoices().length > 0}
    <p>
      Do you want to first move {numFeatures}
      {numFeatures == 1 ? "intervention" : "interventions"} to another scheme?
    </p>
    <Select
      label="Move interventions to another scheme"
      id="move-interventions"
      choices={moveSchemeChoices()}
      bind:value={moveToScheme}
      on:change={moveFeatures}
    />
  {/if}

  <ButtonGroup>
    <WarningButton on:click={deleteScheme}>Delete scheme</WarningButton>
    <SecondaryButton on:click={() => (showDeleteModal = false)}>
      Cancel
    </SecondaryButton>
  </ButtonGroup>
</Modal>
