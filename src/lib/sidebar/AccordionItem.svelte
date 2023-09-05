<script lang="ts">
  // TODO Make this more generic by taking some of these as props too or forwarding events
  import { formOpen, mapHover, openFromSidebar, sidebarHover } from "stores";
  import { slide } from "svelte/transition";

  export let id: number;
  export let label: string;

  $: isOpen = $formOpen == id;
  const toggle = () => {
    formOpen.update((current) => {
      if (current == id) {
        return null;
      } else {
        return id;
      }
    });
    if ($formOpen == id) {
      // Always set this to null first, to force subscribers to see the update.
      // It's possible to open something from the sidebar, close it (by
      // clicking on the map or using the sidebar), then reopen the same thing.
      openFromSidebar.set(null);
      openFromSidebar.set(id);
    }
  };

  // TODO Design choice: While a form is open and we hover on something else in
  // the map, should we underline the item in the sidebar? For now, yes.
  $: underlineRemotely = $mapHover == id;

  let contents: HTMLDivElement;
  function scroll() {
    contents?.scrollIntoView({ behavior: "smooth" });
  }
</script>

<button
  on:click={toggle}
  on:mouseenter={() => sidebarHover.set(id)}
  on:mouseleave={() => sidebarHover.set(null)}
  aria-expanded={isOpen}
  class:underlined={underlineRemotely}
>
  <svg
    style="tran"
    width="20"
    height="20"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path d="M9 5l7 7-7 7" />
  </svg>
  {label}
</button>
{#if isOpen}
  <div
    bind:this={contents}
    transition:slide={{ duration: 100 }}
    on:introend={() => scroll()}
    style="border: solid 1px black; padding: 10px"
  >
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

  button:hover,
  .underlined {
    text-decoration: underline;
  }

  svg {
    transition: transform 0.2s ease-in;
  }

  [aria-expanded="true"] svg {
    transform: rotate(0.25turn);
  }
</style>
