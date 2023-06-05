<script lang="ts">
  import { Popup } from "maplibre-gl";
  import { map } from "../../stores";
  import { type MapMouseEvent } from "maplibre-gl";
  import { onDestroy } from "svelte";

  export let layers: string[];
  export let contents: (props: { [name: string]: any }) => string;

  let popup = new Popup({
    closeButton: false,
    closeOnClick: false,
  });

  $map.on("mousemove", onMouseMove);
  $map.on("mouseout", onMouseOut);

  onDestroy(() => {
    $map.off("mousemove", onMouseMove);
    $map.off("mouseout", onMouseOut);
    popup.remove();
  });

  function onMouseMove(e: MapMouseEvent) {
    // When this component is a child of another that defines a layer, during
    // component teardown, the parent (and layer) will disappear first. Avoid
    // errors.
    if (!layers.every((l) => $map.getLayer(l))) {
      popup.remove();
      return;
    }

    let results = $map.queryRenderedFeatures(e.point, {
      layers,
    });
    if (results.length > 0) {
      popup
        .setLngLat(e.lngLat)
        .setHTML(contents(results[0].properties))
        .addTo($map);
    } else {
      popup.remove();
    }
  }

  function onMouseOut() {
    popup.remove();
  }
</script>
