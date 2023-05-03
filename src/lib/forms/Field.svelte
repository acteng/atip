<script lang="ts">
  import { slide } from "svelte/transition";
  import type { Field } from "./types";

  export let spec: Field;
  export let value;

  // Blank out stuff if needed
  let oneOfCase = "";

  if (typeof spec == "string") {
  } else if ("members" in spec) {
    value ||= {};
    for (let member of spec.members) {
      if ("type" in member && member.type == "one-liner") {
        value[member.name] ||= "";
      } else {
        value[member.name] ||= {};
      }
    }
  } else if ("oneOf" in spec) {
    value ||= {};
    oneOfCase = Object.keys(value)[0] || "";
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
{:else if "members" in spec}
  {#each spec.members as x}
    <div style="border: solid 1px black; padding: 10px">
      <h3>{x.name}</h3>
      <svelte:self spec={x} bind:value={value[x.name]} />
    </div>
  {/each}
{:else if "oneOf" in spec}
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
        <div
          style="border: solid 1px black; padding: 10px"
          transition:slide={{ duration: 500 }}
        >
          <svelte:self spec={x} bind:value={value[x.name]} />
        </div>
      {/if}
    {/if}
  {/each}
{:else if spec.type == "number"}
  <input type="number" bind:value />
{:else if spec.type == "one-liner"}
  <input type="text" bind:value style="width: 100%" />
{/if}
