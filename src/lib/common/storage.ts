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
): [boolean, SetStorageErrorObject] {
  try {
    window.localStorage.setItem(name, content);
    return [true, getEmptySetStorageErrorObject()];
  } catch (error: any) {
    // Unfortunately it looks like we can't use typeof or instanceof to determine this one:
    // all we get is that it's an object so if someone changess the wording we may have to add new checks
    const isStorageQuotaError =
      error.stack && error.stack.includes("exceeded the quota.");
    if (isStorageQuotaError) {
      return [
        false,
        {
          isQuotaError: true,
          message: storageQuotaErrorMessage + error,
          storedStrings: getStoredStrings(),
        },
      ];
    }

    return [false, getEmptySetStorageErrorObject()];
  }
}

function getStoredStrings(): StoredStringDescriptor[] {
  const itemsObject = { ...localStorage };

  const results: StoredStringDescriptor[] = Object.keys(itemsObject).map(
    (key) => {
      const storageUsedInMB = getLengthInMB(itemsObject[key]);
      return {
        key,
        storageUsedInMB,
      };
    },
  );

  return results;
}

function getLengthInMB(text: string) {
  const lengthInMBytes = text.length / (1024 * 1024);
  return lengthInMBytes;
}

export function clearLocalStorage() {
  window.localStorage.clear();
}
export function clearLocalStorageItem(key: string) {
  window.localStorage.removeItem(key);
  return getStoredStrings();
}
