<script lang="ts">
  export let title: string;
  export let open = false;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  class="background"
  on:click={() => (open = false)}
  class:open
  class:closed={!open}
>
  <div
    class="content centered-fullscreen"
    on:click|stopPropagation={() => null}
  >
    <div style="display: flex; justify-content: space-between;">
      <h1>{title}</h1>
      <button on:click={() => (open = false)}>X</button>
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
