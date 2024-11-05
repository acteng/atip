<script lang="ts">
  import "../style/main.css";
  // @ts-expect-error no declarations
  import { initAll } from "govuk-frontend";
  import {
    SecondaryButton,
    ButtonGroup,
    WarningButton,
    AlphaBanner,
  } from "govuk-svelte";
  import {
    downloadGeneratedFile,
    measureLocalStorageSizes,
  } from "lib/common/files";
  import { Header } from "lib/common";
  import { onMount } from "svelte";

  let items: [string, number][] = [];
  $: sum = items.reduce((sum, pair) => sum + pair[1], 0);

  onMount(() => {
    // For govuk components. Must happen here.
    initAll();

    items = measureLocalStorageSizes();
  });

  function download(filename: string) {
    // Assume most items are GeoJSON
    downloadGeneratedFile(
      `${filename}.geojson`,
      window.localStorage.getItem(filename)!,
    );
  }

  function remove(filename: string) {
    if (window.confirm(`Really delete ${filename}?`)) {
      window.localStorage.removeItem(filename);
      items = measureLocalStorageSizes();
    }
  }

  // Adapted from https://gist.github.com/zentala/1e6f72438796d74531803cc3833c039c
  function formatBytes(bytes: number): string {
    if (bytes == 0) {
      return "0 bytes";
    }
    let k = 1024;
    let sizes = ["bytes", "KB", "MB"];
    let i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + " " + sizes[i];
  }
</script>

<div class="govuk-width-container govuk-prose">
  <Header />
  <AlphaBanner />

  <h1 style="margin-top: 30px">Manage local storage</h1>

  <p>TODO explain</p>

  <p>TODO back buttons</p>

  <p>Progress bar. {formatBytes(sum)} total right now</p>

  <table>
    <table>
      <thead>
        <tr>
          <th>Filename</th>
          <th>Size</th>
          <th class="govuk-!-width-one-quarter">Actions</th>
        </tr>
      </thead>
      <tbody>
        {#each items as [filename, size]}
          <tr>
            <td>{filename}</td>
            <td>{formatBytes(size)}</td>
            <td>
              <ButtonGroup>
                <SecondaryButton on:click={() => download(filename)}>
                  Download
                </SecondaryButton><WarningButton
                  on:click={() => remove(filename)}
                >
                  Delete
                </WarningButton>
              </ButtonGroup>
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </table>
</div>
