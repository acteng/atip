<script lang="ts">
  import { getKey, serializeSchemes, exportFile } from "lib/common/files";
  import { mode } from "scheme-sketcher-lib/draw/stores";
  import { SecondaryButton } from "govuk-svelte";
  import { onMount } from "svelte";
  import { backfill } from "./config";
  import type { Schemes } from "types";
  import type { Writable } from "svelte/store";
  import { schema } from "stores";

  export let gjSchemes: Writable<Schemes>;
  export let authority: string;
  export let filename: string;

  let key = getKey(authority, filename);

  let loaded = false;

  // TODO Consider moving this logic to the main page, and having a separate little component in ListMode only (but then maybe it should live in ss-lib)
  onMount(() => {
    try {
      let gj = JSON.parse(window.localStorage.getItem(key) || "");
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
      window.localStorage.setItem(
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
          href={`index.html?scheme=${$schema}`}
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
    <div>
      <b>You are editing</b>
      <br />
      <span>{filename}</span>
    </div>

    <SecondaryButton
      on:click={() => exportFile(authority, filename, $gjSchemes)}
      style="margin-bottom: 8px"
    >
      Export
    </SecondaryButton>
  </div>

  <a href="browse.html" target="_blank">Open Scheme Browser</a>
{/if}
