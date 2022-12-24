<script>
  let showSidebar = true;

  function toggleSidebar() {
    showSidebar = !showSidebar;
    // TODO Resize the map... aka plumb the event down?
  }
</script>

<aside class={showSidebar ? "" : "collapsed"}>
  <div class="sidebar-content content-container">
    <nav>
      <slot name="nav" />
    </nav>
    <slot name="sidebar" />
  </div>
  <div class="sidebar-toggle rounded-rect" on:click={toggleSidebar}>&rarr;</div>
</aside>
<main>
  <slot name="main" />
</main>

<style>
  * {
    box-sizing: border-box;
  }

  :global(body) {
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
    min-width: 25rem; /* use min/max-width because we're in a flex containter. */
    max-width: 25rem;
  }

  .sidebar-content {
    width: 25em; /* Keep the size constant, so the main panel overlaps it when it collapses. */

    max-height: 100%;
    overflow-y: auto;

    background: red;
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
