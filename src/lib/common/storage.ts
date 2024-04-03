const storageQuotaErrorMessage =
  "Unable to save because the local storage quota has been exceeded: you may need to clear out your web browser's local storage for this app, or  run in private mode before you can save again. Specific error here: ";

export interface SetStorageErrorObject {
  isQuotaError: boolean;
  message: String;
  storedStrings: StoredStringDescriptor[];
}

export interface StoredStringDescriptor {
  key: string;
  storageUsedInMB: number;
}

function getEmptySetStorageErrorObject(): SetStorageErrorObject {
  return {
    isQuotaError: false,
    message: "",
    storedStrings: [],
  };
}

export function setLocalStorageItem(
  name: string,
  content: string,
): SetStorageErrorObject {
  try {
    window.localStorage.setItem(name, content);
    return getEmptySetStorageErrorObject();
  } catch (error: any) {
    return {
      isQuotaError: true,
      message: storageQuotaErrorMessage + error,
      storedStrings: getStoredStrings(),
    };
  }
}

function getStoredStrings(): StoredStringDescriptor[] {
  let results: StoredStringDescriptor[] = [];
  for (let i = 0; i < window.localStorage.length; i++) {
    const key: string = window.localStorage.key(i) || "";
    const storageUsedInMB = getLengthInMB(
      window.localStorage.getItem(key) || "",
    );
    results.push({
      key,
      storageUsedInMB,
    });
  }

  results = results.sort((thisStoredString, thatStoredString) => {
    return thatStoredString.storageUsedInMB - thisStoredString.storageUsedInMB;
  });

  return results;
}

function getLengthInMB(text: string): number {
  return text.length / (1024 * 1024);
}

export function clearLocalStorage() {
  window.localStorage.clear();
}
export function clearLocalStorageItem(key: string) {
  window.localStorage.removeItem(key);
  return getStoredStrings();
}
