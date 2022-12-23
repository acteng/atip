<script>
  export let title;
</script>

<div class="modal-popup centered-fullscreen">
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

  .hide-modal {
    visibility: hidden;
  }
</style>
