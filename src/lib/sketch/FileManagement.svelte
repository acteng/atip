<script lang="ts">
  import {
    Modal,
    setLocalStorageItem,
    type SetStorageErrorObject,
  } from "lib/common";
  import {
    hideSchemes,
    mode,
    sidebarHover,
    emptySchemes,
  } from "scheme-sketcher-lib/draw/stores";
  import {
    ButtonGroup,
    ErrorMessage,
    CollapsibleCard,
    FileInput,
    SecondaryButton,
    WarningButton,
  } from "govuk-svelte";
  import { schema } from "stores";
  import { onMount } from "svelte";
  import deleteIcon from "../../../assets/delete.svg?url";
  import saveIcon from "../../../assets/save.svg?url";
  import { backfill } from "./config";
  import StorageModal from "./StorageModal.svelte";
  import type { Config } from "scheme-sketcher-lib/config";
  import type { InterventionProps, OurSchemeData, Schemes } from "types";
  import type { Writable } from "svelte/store";

  export let cfg: Config<InterventionProps, OurSchemeData>;
  export let gjSchemes: Writable<Schemes>;
  export let authorityName: string;

  let errorMessage = "";

  let filename = authorityName;
  if ($schema != "v1") {
    filename += `_${$schema}`;
  }

  let loaded = false;
  let displayClearAllConfirmation = false;

  onMount(async () => {
    // Start by loading from a URL. If that's not specified, load from local storage.
    let params = new URLSearchParams(window.location.search);
    let loadUrl = params.get("geojsonUrl");
    let loadLocal = window.localStorage.getItem(filename);

    if (loadUrl) {
      console.log(`Loading GeoJSON from ${loadUrl}`);
      try {
        let resp = await fetch(loadUrl);
        let body = await resp.text();
        gjSchemes.set(backfill(JSON.parse(body)));
      } catch (err) {
        console.log(`Failed to load from URL: ${err}`);
      }
    } else if (loadLocal) {
      try {
        gjSchemes.set(backfill(JSON.parse(loadLocal)));
      } catch (err) {
        console.log(`Failed to load from local storage: ${err}`);
      }
    }
    loaded = true;
  });

  let showQuotaModal = false;
  let setStorageError: SetStorageErrorObject | undefined;
  // Set up local storage sync. Don't run before onMount above is done with the initial load.
  $: {
    if (loaded && $gjSchemes) {
      console.log(`GJ changed, saving to local storage`);
      const storageError = setLocalStorageItem(
        filename,
        JSON.stringify(geojsonToSave()),
      );
      if (storageError.isQuotaError) {
        showQuotaModal = true;
        setStorageError = storageError;
      }
    }
  }

  function clearAll() {
    displayClearAllConfirmation = false;

    gjSchemes.update((gj) => {
      let newGj = emptySchemes(cfg) as Schemes;
      // Preserve some foreign members
      newGj.origin = gj.origin;
      newGj.authority = gj.authority;
      return newGj;
    });
    sidebarHover.set(null);
    hideSchemes.set(new Set());
    $mode.mode = "list";
  }

  // Remove the hide_while_editing property hack
  function geojsonToSave(): Schemes {
    const copy = JSON.parse(JSON.stringify($gjSchemes));
    for (let feature of copy.features) {
      delete feature.properties.hide_while_editing;
    }
    return copy;
  }

  function exportToGeojson() {
    let geojson = geojsonToSave();
    geojson.authority = authorityName;
    // we could probably be more sophisticated here and set version more centrally
    geojson.origin = "atip-v2";
    // Don't include any scheme name in the filename. There could be multiple
    // schemes in one file, and better for people to get used to consistent
    // filenames with only authority and schema.
    downloadGeneratedFile(
      `${filename}.geojson`,
      JSON.stringify(geojson, null, "  "),
    );
  }

  function downloadGeneratedFile(filename: string, textInput: string) {
    var element = document.createElement("a");
    element.setAttribute(
      "href",
      "data:text/plain;charset=utf-8, " + encodeURIComponent(textInput),
    );
    element.setAttribute("download", filename);
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }

  function loadFile(filename: string, text: string) {
    try {
      // TODO Should we prompt before deleting the current scheme?
      gjSchemes.set(backfill(JSON.parse(text)));
      errorMessage = "";
    } catch (err) {
      errorMessage = `Couldn't load scheme from a file: ${err}`;
    }
  }
</script>

{#if $mode.mode == "list"}
  <CollapsibleCard label="Manage files">
    <FileInput label="Load GeoJSON file" onLoad={loadFile} />

    <ButtonGroup>
      <SecondaryButton on:click={exportToGeojson}>
        <img src={saveIcon} alt="Save as GeoJSON file" />
        Save
      </SecondaryButton>

      <WarningButton on:click={() => (displayClearAllConfirmation = true)}>
        <img src={deleteIcon} alt="Clear all" />
        Clear all
      </WarningButton>
    </ButtonGroup>

    <ErrorMessage {errorMessage} />

    <Modal
      title="Would you like to clear your work?"
      bind:open={displayClearAllConfirmation}
      displayEscapeButton={false}
    >
      <p>This will delete everything for all schemes.</p>
      <ButtonGroup>
        <WarningButton on:click={clearAll}>Clear all work</WarningButton>
        <SecondaryButton on:click={() => (displayClearAllConfirmation = false)}>
          Cancel
        </SecondaryButton>
      </ButtonGroup>
    </Modal>
  </CollapsibleCard>
{/if}

<StorageModal
  bind:show={showQuotaModal}
  bind:setStorageError
  clearCurrentSketch={clearAll}
  currentAuthority={authorityName}
/>
