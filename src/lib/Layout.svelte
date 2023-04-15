<script lang="ts">
  let showSidebar = true;

  function toggleSidebar() {
    showSidebar = !showSidebar;
  }
</script>

<aside class={showSidebar ? "" : "collapsed"}>
  <div class="sidebar-content content-container">
    <nav>
      <slot name="nav" />
    </nav>
    <slot name="sidebar" />
  </div>
  <button
    type="button"
    class="sidebar-toggle rounded-rect"
    on:click={toggleSidebar}>&rarr;</button
  >
</aside>
<main>
  <slot name="main" />
</main>

<style>
  aside {
    position: relative; /* for children who want to position:absolute */

    flex: 0;
    min-width: 25rem; /* use min/max-width because we're in a flex containter. */
    max-width: 25rem;
  }

  .sidebar-content {
    width: 25em; /* Keep the size constant, so the main panel overlaps it when it collapses. */

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

  .sidebar-content > nav {
    display: flex;
    flex-flow: row wrap;
    justify-content: left;
    margin-bottom: 10px;
  }
</style>
