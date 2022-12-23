<script>
  export let title;
  export let hidden = true;

  // TODO Bug bug bug! This doesn't let us plumb data "back up"
  function showOrHide() {
    hidden = !hidden;
  }
</script>

<div class="modal-popup centered-fullscreen" class:hidden>
  <button type="button" on:click={showOrHide}>X</button>
  <h1>{title}</h1>
  <slot />
</div>

<style>
  .modal-popup {
    background: white;
    padding: 30px;
    border: 1px solid black;
  }

  .centered-fullscreen {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .hidden {
    visibility: hidden;
  }
</style>
