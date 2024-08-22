<script lang="ts">
  import Header from "./Header.svelte";
  export let sidebarWidth = "25rem";

  let showSidebar = true;

  function toggleSidebar() {
    showSidebar = !showSidebar;
  }
</script>

<div class="overall-layout">
  <Header />

  <aside
    class={showSidebar ? "below-header" : "collapsed below-header"}
    style="--sidebarWidth: {sidebarWidth}"
  >
    <div class="sidebar-content content-container">
      <slot name="sidebar" />
    </div>
    <button
      type="button"
      class="sidebar-toggle rounded-rect"
      on:click={toggleSidebar}
    >
      &rarr;
    </button>
  </aside>
  <main class="below-header">
    <slot name="main" />
  </main>
</div>

<style>
  * {
    box-sizing: border-box;
  }

  .overall-layout {
    margin: 0;
    padding: 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    overflow: hidden;

    /* Two columns, the sidebar on the left, and the main content on the right. */
    display: flex;
    flex-flow: row nowrap;
  }

  aside {
    position: relative; /* for children who want to position:absolute */

    flex: 0;
    min-width: var(
      --sidebarWidth
    ); /* use min/max-width because we're in a flex containter. */
    max-width: var(--sidebarWidth);
  }

  .sidebar-content {
    width: var(
      --sidebarWidth
    ); /* Keep the size constant, so the main panel overlaps it when it collapses. */

    min-height: 100%;
    max-height: 100%;
    overflow-y: auto;
  }

  aside.collapsed {
    min-width: 0px;
    max-width: 0px;
  }

  main {
    flex-grow: 1;

    display: flex;
    flex-flow: column nowrap;
  }

  .content-container {
    padding: 1rem;
  }

  .rounded-rect {
    background: white;
    border: none;
    border-radius: 10px;
    box-shadow: 0 0 50px -25px black;
  }

  .sidebar-toggle {
    position: absolute;
    z-index: 1;
    top: 1rem;
    right: -2rem;

    width: 2.5rem;
    height: 2.5rem;

    overflow: visible;
    justify-content: center;
    align-items: center;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.8rem;
    user-select: none;

    transition: transform 0.2s;
    transform: rotate(180deg);
  }

  .sidebar-toggle:hover {
    color: #0aa1cf;
    cursor: pointer;
  }

  .collapsed .sidebar-toggle {
    transform: rotate(0deg);
  }
</style>
