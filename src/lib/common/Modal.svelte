<script lang="ts">
  export let title: string;
  export let open = false;
  export let displayEscapeButton = true;
  export let canCloseByClickingBackground = true;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
  class="background"
  on:click={() => {
    if (canCloseByClickingBackground) open = false;
  }}
  class:open
  class:closed={!open}
>
  <div
    class="content centered-fullscreen"
    on:click|stopPropagation={() => null}
  >
    <div style="display: flex; justify-content: space-between;">
      <h1 class="govuk-heading-l">{title}</h1>
      {#if displayEscapeButton}
        <button
          class="govuk-button govuk-button--secondary"
          data-module="govuk-button"
          type="button"
          on:click={() => (open = false)}>X</button
        >
      {/if}
    </div>
    <slot />
  </div>
</div>

<style>
  .background {
    position: fixed;
    z-index: 10;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: block;
  }

  button {
    background-color: whitesmoke;
  }

  .content {
    background: white;
    padding: 30px;
    border: 1px solid black;
  }

  .centered-fullscreen {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    overflow: scroll;
  }

  .open {
    display: block;
  }

  .closed {
    display: none;
  }
</style>
