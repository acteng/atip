<script lang="ts">
  import "../style/main.css";
  // @ts-expect-error no declarations
  import { initAll } from "govuk-frontend";
  import { SecondaryButton, ButtonGroup, WarningButton } from "govuk-svelte";
  import {
    downloadGeneratedFile,
    measureLocalStorageSizes,
  } from "lib/common/files";
  import { Beta, Header } from "lib/common";
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
  <Beta />

  <h1 style="margin-top: 30px">Manage local storage</h1>

  <a href="choose_area.html" class="govuk-back-link">
    Return to the Scheme Sketcher
  </a>

  <p>
    All sketch files are stored in your browser's local storage. There's a 5MB
    size limit, and you've been redirected to this page because the last action
    you took exceeds this limit. You must delete some other files first to
    continue. <b>Before you delete a file, you should download a copy.</b>
  </p>

  <p>
    If you see this page frequently or have any problems, please contact
    <a href="mailto:dcarlino@turing.ac.uk">Dustin</a>
    and
    <a href="mailto:Peter.York@activetravelengland.gov.uk">Pete</a>
    for help.
  </p>

  <p>{formatBytes(sum)} / 5 MB is used right now</p>
  <progress
    value={(100 * sum) / (1024 * 1024 * 5)}
    max="100"
    style="width: 100%"
  />

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
