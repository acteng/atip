let storageQuotaExceeded = false;
const storageQuotaErrorMessage =
  "Unable to save because the local storage quota has been exceeded: you may need to clear out your web browser's local storage for this app, or  run in private mode before you can save again. Specific error here: ";

export function setLocalStorageItem(name: string, content: string) {
  try {
    window.localStorage.setItem(name, content);
  } catch (error: any) {
    const isStorageQuotaError =
      error.stack &&
      error.stack.includes("exceeded the quota.");
    if (!storageQuotaExceeded && isStorageQuotaError) {
      window.alert(storageQuotaErrorMessage + error);
      storageQuotaExceeded = true;
    } else if (isStorageQuotaError) {
      console.log(`StorageQuotaExceeded again: ${error}`);
    } else {
      console.log(`Unexpected error when saving locally: ${error}`);
    }
  }
}
