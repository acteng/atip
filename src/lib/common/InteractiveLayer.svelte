<script lang="ts">
  import {
    Popup,
    type MapGeoJSONFeature,
    type MapLayerMouseEvent,
  } from "maplibre-gl";
  import { interactiveMapLayersEnabled, map } from "stores";
  import { createEventDispatcher, onDestroy, onMount } from "svelte";

  const dispatch = createEventDispatcher<{
    click: MapGeoJSONFeature;
  }>();

  // This component manages hovering and clicking on objects in one layer. The
  // caller must create and manage the source and layer. The source features must
  // have numeric IDs defined. The caller can change style based on
  // ["feature-state", "hover"] using the hoveredToggle helper.
  export let layer: string;
  export let clickable: boolean;

  // Optionally, display a popup for the hovered feature. The callback receives
  // the hovered feature (noting that array and object properties are
  // stringified). The tooltip contents will be wrapped in a govuk-prose div.
  export let tooltip: ((feature: MapGeoJSONFeature) => string) | null = null;

  // Toggle visibility by changing this
  export let show = true;

  // By default, the hovering and clicking behavior for this layer won't happen
  // if another layer covers this one up. Set this to pretend other layers on top
  // are invisible.
  export let ignoreHigherLayers: string[] = [];

  // The currently hovered feature is exposed here. Note that any array or
  // object properties get stringified here; this is not equivalent to the raw
  // feature passed into the source.
  export let hoveredFeature: MapGeoJSONFeature | null = null;

  let popup = new Popup({
    closeButton: false,
    closeOnClick: false,
    maxWidth: "none",
  });

  onMount(() => {
    $map.on("mousemove", layer, onMouseMove);
    $map.on("mouseleave", layer, onMouseLeave);
    if (clickable) {
      $map.on("click", layer, onClick);
    }
  });

  onDestroy(() => {
    $map.off("mousemove", layer, onMouseMove);
    $map.off("mouseleave", layer, onMouseLeave);
    if (clickable) {
      $map.off("click", layer, onClick);
    }
    unhover();
    popup.remove();
  });

  // Show/hide the layer
  $: {
    if ($map.getLayer(layer)) {
      $map.setLayoutProperty(layer, "visibility", show ? "visible" : "none");
    }
  }

  function onMouseMove(e: MapLayerMouseEvent) {
    if (!$interactiveMapLayersEnabled) {
      return;
    }
    let features = e.features ?? [];
    if (features.length == 0) {
      return;
    }
    if (!features[0].id) {
      console.log(
        `Features in the ${layer} layer don't have IDs; InteractiveLayer won't work`
      );
    }

    // This event will happen even if the feature is beneath something in a
    // different layer. Query everything at this point from any layer, and bail
    // out if this isn't on top.
    //
    // Note every other InteractiveLayer for something overlapping will also do
    // this query. Performance is fine so far.
    if (notOnTop(e)) {
      onMouseLeave();
      return;
    }

    if (hoveredFeature?.id != features[0].id) {
      unhover();
      hoveredFeature = features[0];
      $map.setFeatureState(hoveredFeature, { hover: true });
      if (tooltip) {
        let html = `<div class="govuk-prose">${tooltip(hoveredFeature)}</div>`;
        popup.setLngLat(e.lngLat).setHTML(html).addTo($map);
      }
      if (clickable) {
        $map.getCanvas().style.cursor = "pointer";
      }
    } else if (tooltip) {
      // Still hovering on the same feature, but move the popup
      popup.setLngLat(e.lngLat);
    }
  }

  function onMouseLeave() {
    if (!$interactiveMapLayersEnabled) {
      return;
    }
    unhover();
    hoveredFeature = null;
    popup.remove();
    if (clickable) {
      $map.getCanvas().style.cursor = "inherit";
    }
  }

  function unhover() {
    if (hoveredFeature) {
      $map.setFeatureState(hoveredFeature, { hover: false });
    }
  }

  function onClick(e: MapLayerMouseEvent) {
    if (!$interactiveMapLayersEnabled) {
      return;
    }
    let features = e.features ?? [];
    if (features.length > 0) {
      // Same problem as onMouseMove -- every overlapping InteractiveLayer will
      // also see this event. Check we're the top layer.
      if (notOnTop(e)) {
        return;
      }

      dispatch("click", features[0]);
      // Leave the hovering state and popup alone
    }
  }

  function notOnTop(e: MapLayerMouseEvent): boolean {
    for (let feature of $map.queryRenderedFeatures(e.point)) {
      // If we hit this layer, we're on top
      if (feature.layer.id == layer) {
        return false;
      }
      // If we're supposed to ignore a layer on top, keep going
      if (ignoreHigherLayers.includes(feature.layer.id)) {
        continue;
      }
      // Something's on top
      return true;
    }
    // Nothing matched this point
    return false;
  }
</script>
