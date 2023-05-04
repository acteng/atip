<script lang="ts">
  // TODO Lots of overlap with AccordionItem
  import { slide } from "svelte/transition";

  export let label: string;

  let open = false;
</script>

<button on:click={() => (open = !open)} aria-expanded={open}
  ><svg
    style="tran"
    width="20"
    height="20"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
    viewBox="0 0 24 24"
    stroke="currentColor"><path d="M9 5l7 7-7 7" /></svg
  >
  {label}
</button>
{#if open}
  <div transition:slide={{ duration: 100 }}>
    <slot />
  </div>
{/if}

<style>
  button {
    border: none;
    background: none;
    display: block;
    font-size: 20px;
    cursor: pointer;
    margin: 0;
    padding-bottom: 0.5em;
    padding-top: 0.5em;
    text-align: left;
  }

  button:hover {
    text-decoration: underline;
  }

  svg {
    transition: transform 0.2s ease-in;
  }

  [aria-expanded="true"] svg {
    transform: rotate(0.25turn);
  }
</style>
