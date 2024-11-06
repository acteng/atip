<script lang="ts">
  import "../style/main.css";
  // @ts-expect-error no declarations
  import { initAll } from "govuk-frontend";
  import {
    FileInput,
    WarningButton,
    SecondaryButton,
    AlphaBanner,
    ErrorMessage,
  } from "govuk-svelte";
  import {
    getKey,
    listFilesInAuthority,
    downloadGeneratedFile,
    importOldFiles,
    exportFile,
    getEditUrl,
    importFile,
    setLocalStorage,
  } from "lib/common/files";
  import { Header, describeAuthority, getAuthoritiesGeoJson } from "lib/common";
  import { cfg } from "lib/sketch/config";
  import { emptySchemes } from "scheme-sketcher-lib/draw/stores";
  import { onMount } from "svelte";
  import { schema as schemaStore } from "stores";
  import type { AuthorityBoundaries } from "boundaries";

  let params = new URLSearchParams(window.location.search);
  // If the authority is invalid, it'll be handled in onMount asynchronously
  let authority = params.get("authority") || "missing";

  let authoritiesGj: AuthorityBoundaries | null = null;

  importOldFiles(authority);
  let fileList = listFilesInAuthority(authority);

  let uploadErrorMessage = "";

  onMount(async () => {
    // For govuk components. Must happen here.
    initAll();
    authoritiesGj = await getAuthoritiesGeoJson();
    if (
      !authoritiesGj.features.some((f) => f.properties.full_name == authority)
    ) {
      window.location.href = `index.html?schema=${$schemaStore}&error=Authority name not found: ${authority}`;
    }
  });

  function renameFile(filename: string) {
    // TODO Handle overwriting
    let newName = window.prompt(`Rename file ${filename} to what?`, filename);
    if (newName) {
      let oldKey = getKey(authority, filename);
      let contents = window.localStorage.getItem(oldKey)!;
      setLocalStorage(getKey(authority, newName), contents);
      window.localStorage.removeItem(oldKey);
      fileList = listFilesInAuthority(authority);
      /*if ($currentFile == filename) {
        $currentFile = newName;
      }*/
    }
  }

  function deleteFile(filename: string) {
    // TODO Use a full Modal
    if (
      !window.confirm(
        `Really delete file ${filename}? You can't undo this. (If you delete, a copy will still be downloaded to your browser's download folder, in case you make a mistake.)`,
      )
    ) {
      return;
    }

    let key = getKey(authority, filename);
    downloadGeneratedFile(
      `${authority}_${filename}.json`,
      window.localStorage.getItem(key)!,
    );
    window.localStorage.removeItem(key);

    fileList = listFilesInAuthority(authority);
  }

  function newFile() {
    // TODO Handle overwriting
    let filename = window.prompt("What do you want to name your new file?");
    if (!filename) {
      return;
    }

    let gj = emptySchemes(cfg);
    // There's only one scheme
    Object.values(gj.schemes)[0].scheme_name = filename;
    setLocalStorage(
      getKey(authority, filename),
      // TODO serializeSchemes?
      JSON.stringify(gj),
    );
    window.location.href = getEditUrl(authority, filename, $schemaStore);
  }

  function loadFile(filename: string, text: string) {
    try {
      window.location.href = importFile(filename, text, authoritiesGj!);
    } catch (err) {
      uploadErrorMessage = `Couldn't import file: ${err}`;
    }
  }

  function download(filename: string) {
    let gj = JSON.parse(
      window.localStorage.getItem(getKey(authority, filename))!,
    );
    exportFile(authority, filename, gj);
  }
</script>

<div class="govuk-width-container govuk-prose">
  <Header />
  <AlphaBanner />

  <h1 style="margin-top: 30px">Manage my sketches</h1>

  <div class="govuk-grid-row">
    <div class="govuk-grid-column-two-thirds">
      <nav class="govuk-breadcrumbs" aria-label="Breadcrumb">
        <ol class="govuk-breadcrumbs__list">
          <li class="govuk-breadcrumbs__list-item">
            <a
              class="govuk-breadcrumbs__link"
              href={`index.html?scheme=${$schemaStore}`}
            >
              Change area
            </a>
          </li>
          <li class="govuk-breadcrumbs__list-item">Manage files</li>
        </ol>
      </nav>

      <p>
        You're working on sketches in <b>{describeAuthority(authority)}</b>
        .
      </p>

      <p>
        On this page you can manage your sketch files. All files are auto-saved
        in your browser's local storage. You can close your browser and continue
        later.
      </p>

      {#if fileList.length > 0}
        <h2>Load existing files</h2>
        <table>
          <thead>
            <tr>
              <th>File name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {#each fileList as [filename, schema]}
              <tr>
                <td>
                  <a href={getEditUrl(authority, filename, schema)}>
                    {filename}
                  </a>
                </td>
                <td>
                  <div class="govuk-button-group" style="flex-wrap: nowrap">
                    <SecondaryButton on:click={() => renameFile(filename)}>
                      Rename
                    </SecondaryButton>
                    <SecondaryButton on:click={() => download(filename)}>
                      Download
                    </SecondaryButton>
                    <WarningButton on:click={() => deleteFile(filename)}>
                      Delete
                    </WarningButton>
                  </div>
                </td>
              </tr>
            {/each}
          </tbody>
        </table>
      {:else}
        <p>No saved files</p>
      {/if}
    </div>

    <div class="govuk-grid-column-one-third">
      <h2 class="green-bar">Create a new sketch</h2>
      <SecondaryButton on:click={newFile}>Create new file</SecondaryButton>
      <h2>Import a saved sketch</h2>
      <ErrorMessage errorMessage={uploadErrorMessage} />
      {#if authoritiesGj}
        <FileInput label={`Select a .geojson file`} onLoad={loadFile} />
      {/if}
    </div>
  </div>
</div>

<style>
  .green-bar {
    border-top: 0.3rem solid #007161;
    padding-top: 30px;
  }
</style>
