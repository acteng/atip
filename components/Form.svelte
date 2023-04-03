<script>
  import {
    Dropdown,
    Modal,
    RadioButtonGroup,
    RadioButton,
    TextArea,
    TextInput,
    NumberInput,
  } from "carbon-components-svelte";
  import {
    gjScheme,
    clearCurrentlyEditing,
    currentlyEditing,
  } from "../stores.js";
  import areaSchema from "../schema/areas.json";
  import crossingSchema from "../schema/crossings.json";
  import otherSchema from "../schema/other.json";
  import routeSchema from "../schema/routes.json";

  export let id;
  export let name;
  export let intervention_type;
  export let description;
  export let length_meters;
  export let details;

  let openModalForm = false;
  let schema = {
    area: areaSchema,
    route: routeSchema,
    crossing: crossingSchema,
    other: otherSchema,
  }[intervention_type];

  let bottomOfForm;

  currentlyEditing.subscribe((openedId) => {
    if (id == openedId) {
      // Wait 1ms before doing this, because it appears the accordion doesn't
      // expand instantly. This is flaky when clicking the accordion instead of
      // the map.
      setTimeout(() => bottomOfForm?.scrollIntoView({ behavior: "smooth" }), 1);
    }
  });

  function remove() {
    gjScheme.update((gj) => {
      gj.features = gj.features.filter((f) => f.id != id);
      return gj;
    });
  }

  function prettyPrintMeters(x) {
    if (x < 1000.0) {
      return Math.round(x) + " m";
    }
    return (x / 1000.0).toFixed(1) + "km";
  }
</script>

<TextInput labelText="Name" bind:value={name} />

<br />

<RadioButtonGroup bind:selected={intervention_type}>
  <RadioButton labelText="Area" value="area" />
  <RadioButton labelText="Route" value="route" />
  <RadioButton labelText="Crossing" value="crossing" />
  <RadioButton labelText="Other" value="other" />
</RadioButtonGroup>

<br />

<TextArea labelText="Description" bind:value={description} />

<br />

{#if length_meters}
  <p>Length: {prettyPrintMeters(length_meters)}</p>
  <br />
{/if}

<div
  bind:this={bottomOfForm}
  style="display: flex; justify-content: space-between"
>
  <button type="button" on:click={remove}>Delete</button>
  <button type="button" on:click={() => (openModalForm = true)}
    >Edit details</button
  >
  <button type="button" on:click={clearCurrentlyEditing}>Save</button>
</div>

<Modal
  passiveModal
  hasScrollingContent
  modalHeading={`Edit ${intervention_type} details`}
  bind:open={openModalForm}
>
  {#each Object.entries(schema.properties) as [key, value]}
    {#if value.enum}
      <Dropdown
        titleText={value.description || value.title}
        items={value.enum.map((v) => ({ id: v, text: v }))}
        bind:selectedId={details[key]}
      />
      <br />
    {/if}
  {/each}

  {#if intervention_type == "route"}
    <NumberInput
      step={0.1}
      label={routeSchema.properties.width.description}
      bind:value={details.width}
    />
  {/if}

  <!-- TODO Hack for the Modal -->
  <div style="height: 500px" />
</Modal>
