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
    let storedStrings = clearLocalStorageItem(key);
    if (setStorageError) {
      setStorageError.storedStrings = storedStrings;
    }
    if (key === currentAuthority) {
      clearCurrentSketch();
    }
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
    Delete all sketch data from browser
  </WarningButton>
  {#if setStorageError}
    <p>
      Otherwise here is a breakdown of what is currently stored locally. You can
      delete individual items (normally storage quota is 5MB or 10MB):
    </p>
    {#each setStorageError.storedStrings as storedStringDescriptor}
      {#if storedStringDescriptor.key === currentAuthority}
        <p>
          <WarningIcon text="This will delete the current sketch" />The button
          below deletes the current sketch.
        </p>
      {/if}
      <SecondaryButton
        on:click={() => removeStorageItem(storedStringDescriptor.key)}
      >
        Remove stored item for {storedStringDescriptor.key}({storedStringDescriptor.storageUsedInMB.toFixed(
          2,
        )}MB)
      </SecondaryButton>
    {/each}
  {/if}
</Modal>
