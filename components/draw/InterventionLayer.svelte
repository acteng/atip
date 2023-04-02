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
  import { gjScheme, map } from "../../stores.js";

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
  // The fallback white should never be used in practice
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
    "white",
  ];

  const hideWhileEditing = ["!=", "hide_while_editing", true];

  overwriteLayer($map, {
    id: "interventions-points",
    source,
    filter: ["all", isPoint, hideWhileEditing],
    ...drawCircle(colorByInterventionType, circleRadius),
    // TODO Outline?
  });
  overwriteLayer($map, {
    id: "interventions-lines",
    source,
    filter: ["all", isLine, hideWhileEditing],
    ...drawLine(colorByInterventionType, lineWidth),
  });
  overwriteLayer($map, {
    id: "interventions-polygons",
    source,
    filter: ["all", isPolygon, hideWhileEditing],
    ...drawPolygon(colorByInterventionType, polygonOpacity),
    // TODO Outline too?
  });
</script>
