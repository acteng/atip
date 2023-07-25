<script lang="ts">
  import { Popup, type MapMouseEvent } from "maplibre-gl";
  import { onDestroy } from "svelte";
  import { map } from "../../stores";

  export let layers: string[];
  // The tooltip contents will be wrapped in a govuk-prose div
  export let contents: (props: { [name: string]: any }) => string;

  let popup = new Popup({
    closeButton: false,
    closeOnClick: false,
    maxWidth: "none",
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
      let html = `<div class="govuk-prose">${contents(
        results[0].properties
      )}</div>`;
      popup.setLngLat(e.lngLat).setHTML(html).addTo($map);
    } else {
      popup.remove();
    }
  }

  function onMouseOut() {
    popup.remove();
  }
</script>
