<script lang="ts">
  import { getStyleSpecification } from "lib/maplibre";
  import {
    Map,
    NavigationControl,
    ScaleControl,
    type LayerSpecification,
    type LngLatBoundsLike,
    type StyleSpecification,
  } from "maplibre-gl";
  import { map as mapStore } from "stores";
  import { onMount } from "svelte";
  import { MapLibre } from "svelte-maplibre";

  export let style: string;
  export let startBounds: LngLatBoundsLike | null = null;

  let styleSpec: string | StyleSpecification | null = null;

  let map: Map;
  let loaded = false;

  $: if (loaded) {
    // TODO Get rid of mapStore entirely, eventually?
    mapStore.set(map);
  }

  // Adapted from https://github.com/dimfeld/svelte-maplibre/pull/60. We'll get
  // this for free after migrating to svelte-maplibre.
  let lastStyleLayerIds: Array<string> | undefined = undefined;
  let lastStyleSourceIds: Array<string> | undefined = undefined;
  let layersToReAddAfterStyleChange: Array<LayerSpecification> | undefined =
    undefined;
  let sourcesToReAddAfterStyleChange:
    | Record<string, SourceSpecification>
    | undefined = undefined;

  onMount(async () => {
    styleSpec = await getStyleSpecification(style);

    /*map.addControl(new ScaleControl({}));
    map.addControl(
      new NavigationControl({ visualizePitch: true }),
      "bottom-right"
    );*/

    /*map.on("load", () => {
      loaded = true;
      if (setCamera && startBounds) {
        map.fitBounds(startBounds, { animate: false });
      }
      mapStore.set(map);
    });*/
  });

  async function changeStyle(newStyle: string) {
    if (!map) {
      return;
    }
    const oldMapStyle = map.getStyle();
    if (lastStyleLayerIds) {
      layersToReAddAfterStyleChange = oldMapStyle.layers.filter(
        (l) => !lastStyleLayerIds!.includes(l.id)
      );
    }
    if (lastStyleSourceIds) {
      const nonStyleSourceIds = Object.keys(oldMapStyle.sources).filter(
        (sourceId) => !lastStyleSourceIds!.includes(sourceId)
      );
      sourcesToReAddAfterStyleChange = {};
      for (const id of nonStyleSourceIds) {
        sourcesToReAddAfterStyleChange[id] = oldMapStyle.sources[id];
      }
    }
    map.setStyle(await getStyleSpecification(newStyle), { diff: false });

    // Update the URL query parameter
    let url = new URL(window.location.href);
    url.searchParams.set("style", newStyle);
    window.history.replaceState(null, "", url.toString());
  }
  $: changeStyle(style);
</script>

<div class="map">
  {#if styleSpec}
    <MapLibre
      style={styleSpec}
      standardControls
      bounds={startBounds}
      bind:loaded
      bind:map
    >
      {#if loaded}
        <slot />
      {/if}
    </MapLibre>
  {/if}
</div>

<style>
  .map {
    position: relative;
    flex-grow: 1;
    /* TODO: Hack, can't figure out why height broken */
    min-height: 100vh;
  }
</style>
