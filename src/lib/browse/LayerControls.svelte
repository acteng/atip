<script lang="ts">
  import { appVersion, BaselayerSwitcher, LineMeasureTool } from "lib/common";
  import { StreetViewTool } from "scheme-sketcher-lib/common";
  import { CollapsibleCard, CheckboxGroup } from "govuk-svelte";
  import { layerId } from "lib/maplibre";
  import { FillLayer, GeoJSON } from "svelte-maplibre";
  import CensusOutputAreaLayerControl from "./layers/areas/CensusOutputAreas.svelte";
  import CombinedAuthoritiesLayerControl from "./layers/areas/CombinedAuthorities.svelte";
  import ImdLayerControl from "./layers/areas/IMD.svelte";
  import LocalAuthorityDistrictsLayerControl from "./layers/areas/LocalAuthorityDistricts.svelte";
  import LocalPlanningAuthoritiesLayerControl from "./layers/areas/LocalPlanningAuthorities.svelte";
  import ParliamentaryConstituenciesLayerControl from "./layers/areas/ParliamentaryConstituencies.svelte";
  import PollutionLayerControl from "./layers/areas/Pollution.svelte";
  import RoadNoiseLayerControl from "./layers/areas/RoadNoise.svelte";
  import WardsLayerControl from "./layers/areas/Wards.svelte";
  import BusRoutesLayerControl from "./layers/lines/BusRoutes.svelte";
  import CyclePathsLayerControl from "./layers/lines/CyclePaths.svelte";
  import MajorRoadNetworkLayerControl from "./layers/lines/MajorRoadNetwork.svelte";
  import StrategicRoadNetworkLayerControl from "./layers/lines/StrategicRoadNetwork.svelte";
  import NationalCycleNetworkLayerControl from "./layers/lines/NationalCycleNetwork.svelte";
  import PavementWidthsLayerControl from "./layers/lines/PavementWidths.svelte";
  import PctLayerControl from "./layers/lines/PCT.svelte";
  import RoadSpeedsLayerControl from "./layers/lines/RoadSpeeds.svelte";
  import RoadWidthsLayerControl from "./layers/lines/RoadWidths.svelte";
  import TramsLayerControl from "./layers/lines/Trams.svelte";
  import BusStopsLayerControl from "./layers/points/BusStops.svelte";
  import CrossingsLayerControl from "./layers/points/Crossings.svelte";
  import GradientsLayerControl from "./layers/lines/Gradients.svelte";
  import CycleParkingLayerControl from "./layers/points/CycleParking.svelte";
  import EducationLayerControl from "./layers/points/Education.svelte";
  import HospitalsLayerControl from "./layers/points/Hospitals.svelte";
  import RailwayStationsLayerControl from "./layers/points/RailwayStations.svelte";
  import SportsSpacesLayerControl from "./layers/points/SportsSpaces.svelte";
  import Stats19LayerControl from "./layers/points/Stats19.svelte";
  import VehicleCountsLayerControl from "./layers/points/VehicleCounts.svelte";
  import ProblemsLayerControl from "./layers/points/Problems.svelte";
  import SchemesLayer from "./schemes/SchemesLayer.svelte";
  import { interactiveMapLayersEnabled, controls } from "./stores";
  import { getRoadLayerNames } from "lib/maplibre";
  import { get } from "svelte/store";
  import { map, mapStyle } from "stores";
  import type { Map } from "maplibre-gl";

  // Workaround for https://github.com/sveltejs/svelte/issues/7630
  $: streetviewEnabled = !$interactiveMapLayersEnabled;
  $: interactiveMapLayersEnabled.set(!streetviewEnabled);

  // When StreetView is on, disable interactive layers -- no hovering or
  // clicking behavior. Achieve this by enabling an invisible layer on top of
  // everything.
  let coverEverything = {
    type: "Feature" as const,
    properties: {},
    geometry: {
      type: "Polygon" as const,
      coordinates: [
        [
          [180.0, 90.0],
          [-180.0, 90.0],
          [-180.0, -90.0],
          [180.0, -90.0],
          [180.0, 90.0],
        ],
      ],
    },
  };

  let cfg = {
    getStreetViewRoadLayerNames: (map: Map) => {
      return getRoadLayerNames(map, get(mapStyle));
    },
  };
</script>

<div bind:this={$controls}>
  <CollapsibleCard label="Schemes" open>
    <SchemesLayer />
    {#if appVersion() == "Private (development)"}
      <CheckboxGroup small>
        <ProblemsLayerControl />
      </CheckboxGroup>
    {/if}
  </CollapsibleCard>

  <CollapsibleCard label="Existing infrastructure">
    <CheckboxGroup small>
      <CyclePathsLayerControl />
      <NationalCycleNetworkLayerControl />
      <MajorRoadNetworkLayerControl />
      <StrategicRoadNetworkLayerControl />
      <CycleParkingLayerControl />
      <CrossingsLayerControl />
    </CheckboxGroup>
  </CollapsibleCard>

  <CollapsibleCard label="Trip generators">
    <CheckboxGroup small>
      <EducationLayerControl />
      <HospitalsLayerControl />
      <SportsSpacesLayerControl />
    </CheckboxGroup>
  </CollapsibleCard>

  <CollapsibleCard label="Public transport">
    <CheckboxGroup small>
      <BusRoutesLayerControl />
      <BusStopsLayerControl />
      <TramsLayerControl />
      <RailwayStationsLayerControl />
    </CheckboxGroup>
  </CollapsibleCard>

  <CollapsibleCard label="Boundaries">
    <CheckboxGroup small>
      <ParliamentaryConstituenciesLayerControl />
      <WardsLayerControl />
      <CombinedAuthoritiesLayerControl />
      <LocalAuthorityDistrictsLayerControl />
      <LocalPlanningAuthoritiesLayerControl />
    </CheckboxGroup>
  </CollapsibleCard>

  <CollapsibleCard label="Census">
    <CheckboxGroup small>
      <CensusOutputAreaLayerControl />
      <ImdLayerControl />
    </CheckboxGroup>
  </CollapsibleCard>

  <CollapsibleCard label="ATE Assessment">
    <CheckboxGroup small>
      <PctLayerControl />
      <VehicleCountsLayerControl />
      <Stats19LayerControl />
      <GradientsLayerControl />
      {#if appVersion() == "Private (development)"}
        <RoadWidthsLayerControl />
        <PavementWidthsLayerControl />
        <RoadSpeedsLayerControl />
      {/if}
      <PollutionLayerControl />
      <RoadNoiseLayerControl />
    </CheckboxGroup>
  </CollapsibleCard>

  <CollapsibleCard label="Tools">
    <StreetViewTool {cfg} map={$map} bind:enabled={streetviewEnabled} />
    <LineMeasureTool />
  </CollapsibleCard>

  <BaselayerSwitcher disabled={!$interactiveMapLayersEnabled} />
</div>

<GeoJSON data={coverEverything}>
  <FillLayer
    {...layerId("cover-interactive-layers")}
    paint={{
      "fill-color": "black",
      "fill-opacity": 0.0,
    }}
    layout={{
      visibility: $interactiveMapLayersEnabled ? "none" : "visible",
    }}
  />
</GeoJSON>
