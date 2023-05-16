<script lang="ts">
  import { Popup } from "maplibre-gl";
  import { map } from "../../stores";
  import { type MapMouseEvent } from "maplibre-gl";
  import { onDestroy } from "svelte";

  export let layer: string;

  let popup = new Popup({
    closeButton: false,
    closeOnClick: false,
  });

  $map.on("mousemove", onMouseMove);
  $map.on("mouseout", onMouseOut);

  onDestroy(() => {
    $map.off("mousemove", onMouseMove);
    $map.off("mouseout", onMouseOut);
  });

  function onMouseMove(e: MapMouseEvent) {
    let results = $map.queryRenderedFeatures(e.point, {
      layers: [layer],
    });
    if (results.length > 0) {
      popup.setLngLat(e.lngLat).setHTML(contents(results[0])).addTo($map);
    } else {
      popup.remove();
    }
  }

  function onMouseOut() {
    popup.remove();
  }

  function contents(f) {
    return `<pre>${JSON.stringify(f.properties)}</pre>`;
  }
</script>
