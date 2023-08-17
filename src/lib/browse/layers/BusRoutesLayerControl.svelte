<script lang="ts">
  import type { MapGeoJSONFeature } from "maplibre-gl";
  import { map } from "../../../stores";
  import {
    ColorLegend,
    ExternalLink,
    HelpButton,
    InteractiveLayer,
  } from "../../common";
  import { Checkbox } from "../../govuk";
  import {
    hoveredToggle,
    overwriteLineLayer,
    overwritePmtilesSource,
  } from "../../maplibre";
  import { colors } from "../colors";

  let name = "bus_routes";

  overwritePmtilesSource(
    $map,
    name,
    `https://atip.uk/layers/v1/${name}.pmtiles`
  );

  overwriteLineLayer($map, {
    id: name,
    source: name,
    sourceLayer: name,
    color: [
      "case",
      ["boolean", ["get", "has_bus_lane"], false],
      colors.bus_route_with_lane,
      colors.bus_route_without_lane,
    ],
    width: 5,
    opacity: hoveredToggle(0.5, 1.0),
  });

  let show = false;

  function tooltip(feature: MapGeoJSONFeature): string {
    if (feature.properties.has_bus_lane) {
      return "<p>At least one bus route crosses here, with a bus lane in one or more directions</p>";
    } else {
      return "<p>At least one bus route crosses here, without any bus lanes</p>";
    }
  }
</script>

<Checkbox id={name} bind:checked={show}>
  <ColorLegend color={colors.bus_route_with_lane} />
  Bus routes
  <span slot="right">
    <HelpButton>
      <p>
        This shows all roads with at least one bus route crossing them. It also
        shows whether the road has a bus lane or not.
      </p>
      <p>
        Note this data is from OpenStreetMap (as of 9 August 2023), not <ExternalLink
          href="https://gtfs.org"
        >
          GTFS
        </ExternalLink>, and doesn't include which routes are run or the
        frequency of service.
      </p>
      <p>
        License: <ExternalLink href="https://www.openstreetmap.org/copyright">
          Open Data Commons Open Database License
        </ExternalLink>
      </p>
    </HelpButton>
  </span>
</Checkbox>

<InteractiveLayer layer={name} {tooltip} {show} clickable={false} />
