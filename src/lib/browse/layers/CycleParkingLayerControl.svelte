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
  import { overwriteCircleLayer, overwritePmtilesSource } from "../../maplibre";
  import { colors } from "../colors";

  let name = "cycle_parking";
  let color = colors.cycle_parking;

  overwritePmtilesSource(
    $map,
    name,
    `${import.meta.env.VITE_RESOURCE_BASE}/layers/v1/${name}.pmtiles`
  );

  overwriteCircleLayer($map, {
    id: name,
    source: name,
    sourceLayer: name,
    color,
    radius: ["interpolate", ["linear"], ["zoom"], 1, 2, 8, 3, 13, 10],
  });

  let show = false;

  function tooltip(feature: MapGeoJSONFeature): string {
    let capacity = feature.properties.capacity ?? "unknown";
    return `<p>Capacity: ${capacity}</p>`;
  }
</script>

<Checkbox id={name} bind:checked={show}>
  <ColorLegend {color} />
  Cycle parking
  <span slot="right">
    <HelpButton>
      <p>
        Cycle parking, according to <ExternalLink
          href="https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dbicycle_parking"
        >
          OpenStreetMap
        </ExternalLink> (as of 9 August 2023). The type of parking, public/private
        access, and whether it's covered are not shown.
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
