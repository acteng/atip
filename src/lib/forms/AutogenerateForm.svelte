<script lang="ts">
  import { slide } from "svelte/transition";
  import {
    type Field,
    isStruct,
    isEnum,
    isNumber,
    isOneLiner,
    isTextbox,
    isCheckbox,
  } from "./types";

  // This component creates a form to collect the property described by spec, and put the result in value
  export let spec: Field;
  export let value;

  // Blank out initial values if needed
  let oneOfCase = "";
  if (isStruct(spec)) {
    value ||= {};
    for (let member of spec.members) {
      if (isOneLiner(member) || isTextbox(member)) {
        value[member.name] ||= "";
      } else if (isCheckbox(member)) {
        value[member.name] ||= false;
      } else {
        value[member.name] ||= {};
      }
    }
  } else if (isEnum(spec)) {
    value ||= {};
    oneOfCase = typeof value == "string" ? value : Object.keys(value)[0] || "";
  }

  function stringOneOf() {
    value = oneOfCase;
  }
  function otherOneOf() {
    value = {};
    value[oneOfCase] = {};
  }
</script>

{#if typeof spec == "string"}
  <h1>Error: Field component instantiated for plain string, why? {spec}</h1>
{:else if isStruct(spec)}
  {#each spec.members as x}
    <div>
      <h3>{x.name}</h3>
      <svelte:self spec={x} bind:value={value[x.name]} />
    </div>
  {/each}
{:else if isEnum(spec)}
  {#each spec.oneOf as x}
    {#if typeof x == "string"}
      <label>
        <input
          type="radio"
          bind:group={oneOfCase}
          on:change={stringOneOf}
          value={x}
        />
        {x}<br />
      </label>
    {:else}
      <label>
        <input
          type="radio"
          bind:group={oneOfCase}
          on:change={otherOneOf}
          value={x.name}
        />
        {x.name}<br />
      </label>

      {#if oneOfCase == x.name && typeof value == "object"}
        <div transition:slide={{ duration: 500 }}>
          <svelte:self spec={x} bind:value={value[x.name]} />
        </div>
      {/if}
    {/if}
  {/each}
{:else if isNumber(spec)}
  <input type="number" bind:value />
{:else if isOneLiner(spec)}
  <input type="text" bind:value style="width: 100%" />
{:else if isTextbox(spec)}
  <textarea bind:value style="width: 100%" rows="5" />
{:else if isCheckbox(spec)}
  <input type="checkbox" bind:checked={value} />
{/if}

<style>
  div {
    border: solid 1px black;
    padding: 10px;
  }

  textarea {
    resize: none;
  }
</style>
