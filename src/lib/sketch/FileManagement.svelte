<script lang="ts">
  import { SecondaryButton } from "govuk-svelte";
  import {
    exportFile,
    getKey,
    serializeSchemes,
    setLocalStorage,
  } from "lib/common/files";
  import { mode } from "scheme-sketcher-lib/draw/stores";
  import { schema } from "stores";
  import { onMount } from "svelte";
  import type { Writable } from "svelte/store";
  import type { Schemes } from "types";
  import { backfill } from "./config";

  export let gjSchemes: Writable<Schemes>;
  export let authority: string;
  export let filename: string;

  let key = getKey(authority, filename);

  let loaded = false;

  onMount(() => {
    let contents = window.localStorage.getItem(key);
    // The filename or authority is wrong; the top-level SketchSchemes
    // component will redirect, but this code might run first. Just don't
    // set `loaded`.
    if (contents == null) {
      return;
    }
    try {
      let gj = JSON.parse(contents);
      gjSchemes.set(backfill(gj));
    } catch (err) {
      console.log(`Failed to load from local storage: ${err}`);
    }
    loaded = true;
  });

  // Set up local storage sync. Don't run before onMount above is done with the initial load.
  $: {
    if (loaded && $gjSchemes) {
      console.log(`GJ changed, saving to local storage`);
      setLocalStorage(
        key,
        JSON.stringify(serializeSchemes(authority, $gjSchemes)),
      );
    }
  }
</script>

{#if $mode.mode == "list" || $mode.mode == "split-route" || $mode.mode == "set-image" || $mode.mode == "streetview"}
  <nav class="govuk-breadcrumbs" aria-label="Breadcrumb">
    <ol class="govuk-breadcrumbs__list">
      <li class="govuk-breadcrumbs__list-item">
        <a
          class="govuk-breadcrumbs__link"
          href={`choose_area.html?scheme=${$schema}`}
        >
          Change area
        </a>
      </li>

      <li class="govuk-breadcrumbs__list-item">
        <a
          class="govuk-breadcrumbs__link"
          href="files.html?authority={authority}&schema={$schema}"
        >
          Manage files
        </a>
      </li>

      <li class="govuk-breadcrumbs__list-item">Sketch</li>
    </ol>
  </nav>

  <div style="display: flex; justify-content: space-between">
    <p>
      <b>You are editing</b>
      <br />
      <span>{filename}</span>
    </p>

    <SecondaryButton
      on:click={() => exportFile(authority, filename, $gjSchemes)}
      style="margin-bottom: 8px"
    >
      Export
    </SecondaryButton>
  </div>

  <a href="browse.html" target="_blank">Open Scheme Browser</a>
{/if}
