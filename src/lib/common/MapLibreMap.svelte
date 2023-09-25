<script lang="ts">
  import { getStyleSpecification } from "lib/maplibre";
  import {
    Map,
    NavigationControl,
    ScaleControl,
    type LayerSpecification,
    type LngLatBoundsLike,
    type SourceSpecification,
  } from "maplibre-gl";
  import { onDestroy, onMount, setContext } from "svelte";
  import "maplibre-gl/dist/maplibre-gl.css";
  import { map as mapStore } from "stores";

  export let style: string;
  export let startBounds: LngLatBoundsLike | null = null;

  let map: Map;
  let mapContainer: HTMLDivElement;
  let loaded = false;

  // Before creating the map, check if there's a hash, because one will get set below
  // TODO Supposed to use a phantom type, not a string, as the key
  let setCamera = !window.location.hash;
  setContext("setCamera", setCamera);

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
    map = new Map({
      container: mapContainer,
      style: await getStyleSpecification(style),
      hash: true,
    });
    map.addControl(new ScaleControl({}));
    map.addControl(
      new NavigationControl({ visualizePitch: true }),
      "bottom-right"
    );

    map.on("load", () => {
      loaded = true;
      if (setCamera && startBounds) {
        map.fitBounds(startBounds, { animate: false });
      }
      mapStore.set(map);
    });

    const resizeObserver = new ResizeObserver(() => {
      map.resize();
    });
    resizeObserver.observe(mapContainer);

    map.on("style.load", () => {
      const mapStyle = map.getStyle();
      lastStyleLayerIds = mapStyle.layers.map((l) => l.id);
      lastStyleSourceIds = Object.keys(mapStyle.sources);
      if (sourcesToReAddAfterStyleChange) {
        for (const [id, source] of Object.entries(
          sourcesToReAddAfterStyleChange
        )) {
          map.addSource(id, source);
        }
      }
      if (layersToReAddAfterStyleChange) {
        for (const layer of layersToReAddAfterStyleChange) {
          map.addLayer(layer);
        }
      }
    });
  });

  onDestroy(() => {
    map.remove();
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

<div class="map" bind:this={mapContainer}>
  {#if loaded}
    <slot />
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
