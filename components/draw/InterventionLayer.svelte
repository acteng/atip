<script>
  import {
    drawLine,
    isPolygon,
    isPoint,
    isLine,
    drawCircle,
    drawPolygon,
    overwriteSource,
    overwriteLayer,
  } from "../../maplibre_helpers.js";
  import { colors } from "../../colors.js";
  import {
    gjScheme,
    map,
    currentHover,
    currentlyEditing,
    setCurrentlyEditing,
  } from "../../stores.js";

  let source = "interventions";

  overwriteSource($map, source, {
    type: "geojson",
    data: $gjScheme,
  });
  // Keep the final data synced to what's drawn here
  $: {
    $map.getSource(source).setData($gjScheme);
  }

  const circleRadius = 7;
  const lineWidth = 10;
  const polygonOpacity = 0.5;
  // The fallback black should never be used in practice
  const colorByInterventionType = [
    "match",
    ["get", "intervention_type"],
    "area",
    colors.area,
    "route",
    colors.route,
    "crossing",
    colors.crossing,
    "other",
    colors.other,
    "black",
  ];

  overwriteLayer($map, {
    id: "interventions-points",
    source,
    filter: isPoint,
    ...drawCircle(colorByInterventionType, circleRadius),
    // TODO Outline?
  });
  overwriteLayer($map, {
    id: "interventions-lines",
    source,
    filter: isLine,
    ...drawLine(colorByInterventionType, lineWidth),
  });
  overwriteLayer($map, {
    id: "interventions-polygons",
    source,
    filter: isPolygon,
    ...drawPolygon(colorByInterventionType, polygonOpacity),
    // TODO Outline too?
  });

  // TODO Move all of this to a SelectMode or something

  // Calculate hover
  $map.on("mousemove", (e) => {
    // TODO Disable unless we're in select mode
    if ($currentlyEditing == null) {
      let results = $map.queryRenderedFeatures(e.point, {
        layers: [
          "interventions-points",
          "interventions-lines",
          "interventions-polygons",
        ],
      });
      // TODO ? syntax
      var newHoverId = null;
      if (results.length > 0) {
        newHoverId = results[0].id;
      }
      currentHover.set(newHoverId);
    }
  });
  $map.on("mouseout", () => {
    if ($currentlyEditing == null) {
      currentHover.set(null);
    }
  });

  // Handle clicking the hovered feature
  $map.on("click", (e) => {
    // TODO Disable unless we're in select mode
    let results = $map.queryRenderedFeatures(e.point, {
      layers: [
        "interventions-points",
        "interventions-lines",
        "interventions-polygons",
      ],
    });
    if (results.length > 0) {
      setCurrentlyEditing(results[0].id);
    } else {
      setCurrentlyEditing(null);
    }
  });
</script>
