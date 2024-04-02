<script lang="ts">
  import { SecondaryButton, WarningButton } from "govuk-svelte";
  import {
    Modal,
    type SetStorageErrorObject,
    clearLocalStorage,
    clearLocalStorageItem,
    WarningIcon,
  } from "lib/common";

  export let show: boolean;
  export let setStorageError: SetStorageErrorObject | undefined;
  export let clearCurrentSketch: Function;
  export let currentAuthority: string;

  function removeStorageItem(key: string) {
    return function () {
      let storedStrings = clearLocalStorageItem(key);
      if (setStorageError) {
        setStorageError.storedStrings = storedStrings;
      }
      if (key === currentAuthority) {
        clearCurrentSketch();
      }
    };
  }

  function clearLocalStorageAndCloseModal() {
    clearCurrentSketch();
    clearLocalStorage();
    show = false;
    setStorageError = undefined;
  }
</script>

<Modal title="Local Storage Quota Exceeded" bind:open={show}>
  <p>{setStorageError?.message}</p>
  <p>
    If you have saved your work locally to a geojson file recently, you can
    delete all files stored in the browser for all authorities to free up space.
    Be sure that you're not losing anything important before doing this!
  </p>
  <WarningButton on:click={clearLocalStorageAndCloseModal}>
    Delete All Sketch Data From Browser
  </WarningButton>
  {#if setStorageError}
    <p>
      Otherwise here is a breakdown of what is currently stored locally. You can
      delete individual items (normally storage quota is 5mb or 10mb):
    </p>
    {#each setStorageError.storedStrings as storedStringDescriptor}
      <p>Stored object: {storedStringDescriptor.key}</p>
      <p>
        Storage used (rounded to nearest 0.01MB): {storedStringDescriptor.storageUsedInMB
          .toString()
          .slice(0, 4)}MB
      </p>
      {#if storedStringDescriptor.key === currentAuthority}
        <p><WarningIcon text={"warning icon"} />This is the current sketch.</p>
      {/if}
      <SecondaryButton on:click={removeStorageItem(storedStringDescriptor.key)}>
        Remove stored item for {storedStringDescriptor.key}
      </SecondaryButton>
    {/each}
  {/if}
</Modal>
