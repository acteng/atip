<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import SecondaryButton from "../govuk/SecondaryButton.svelte";
  import WarningButton from "../govuk/WarningButton.svelte";
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
  <div class="govuk-button-group">
    <WarningButton on:click={onClickConfirm}>{confirmButtonText}</WarningButton>
    <SecondaryButton on:click={onClickCancel}>
      {cancelButtonText}
    </SecondaryButton>
  </div>
</Modal>
