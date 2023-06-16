<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import Modal from "./Modal.svelte";

  const dispatch = createEventDispatcher();

  export let open: boolean = false;
  export let displayEscapeButton: boolean = false;
  export let canCloseByClickingBackground: boolean = false;
  export let title: string;
  export let message: string;
  export let confirmButtonText: string = "Confirm";
  export let cancelButtonText: string = "Cancel";

  function onClickConfirm() {
    dispatch("confirmAction");
  }

  function onClickCancel() {
    dispatch("cancelAction");
  }
</script>

<Modal
  bind:title
  bind:open
  bind:displayEscapeButton
  bind:canCloseByClickingBackground
>
  <p>{message}</p>
  <button type="button" on:click={onClickConfirm}>{confirmButtonText}</button>
  <button type="button" on:click={onClickCancel}>{cancelButtonText}</button>
</Modal>
