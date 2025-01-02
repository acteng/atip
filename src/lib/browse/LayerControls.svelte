<script lang="ts">
  import { CheckboxGroup, CollapsibleCard } from "govuk-svelte";
  import { appVersion, BaselayerSwitcher, LineMeasureTool } from "lib/common";
  import { getRoadLayerNames, layerId } from "lib/maplibre";
  import type { Map } from "maplibre-gl";
  import { StreetViewTool } from "scheme-sketcher-lib/common";
  import { map, mapStyle } from "stores";
  import { FillLayer, GeoJSON } from "svelte-maplibre";
  import { get } from "svelte/store";
  import CensusOutputAreaLayerControl from "./layers/areas/CensusOutputAreas.svelte";
  import CombinedAuthoritiesLayerControl from "./layers/areas/CombinedAuthorities.svelte";
  import ImdLayerControl from "./layers/areas/IMD.svelte";
  import LocalAuthorityDistrictsLayerControl from "./layers/areas/LocalAuthorityDistricts.svelte";
  import LocalPlanningAuthoritiesLayerControl from "./layers/areas/LocalPlanningAuthorities.svelte";
  import ParliamentaryConstituenciesLayerControl from "./layers/areas/ParliamentaryConstituencies.svelte";
  import PollutionLayerControl from "./layers/areas/Pollution.svelte";
  import RoadNoiseLayerControl from "./layers/areas/RoadNoise.svelte";
  import RuralUrbanLayerControl from "./layers/areas/RuralUrban.svelte";
  import WardsLayerControl from "./layers/areas/Wards.svelte";
  import BusRoutesLayerControl from "./layers/lines/BusRoutes.svelte";
  import CyclePathsLayerControl from "./layers/lines/CyclePaths.svelte";
  import GradientsLayerControl from "./layers/lines/Gradients.svelte";
  import MajorRoadNetworkLayerControl from "./layers/lines/MajorRoadNetwork.svelte";
  import NationalCycleNetworkLayerControl from "./layers/lines/NationalCycleNetwork.svelte";
  import PavementWidthsLayerControl from "./layers/lines/PavementWidths.svelte";
  import PctLayerControl from "./layers/lines/PCT.svelte";
  import RightsOfWayLayerControl from "./layers/lines/RightsOfWay.svelte";
  import RoadSpeedsLayerControl from "./layers/lines/RoadSpeeds.svelte";
  import RoadWidthsLayerControl from "./layers/lines/RoadWidths.svelte";
  import StrategicRoadNetworkLayerControl from "./layers/lines/StrategicRoadNetwork.svelte";
  import TramsLayerControl from "./layers/lines/Trams.svelte";
  import BusStopsLayerControl from "./layers/points/BusStops.svelte";
  import CrossingsLayerControl from "./layers/points/Crossings.svelte";
  import CycleParkingLayerControl from "./layers/points/CycleParking.svelte";
  import EducationLayerControl from "./layers/points/Education.svelte";
  import HospitalsLayerControl from "./layers/points/Hospitals.svelte";
  import ProblemsLayerControl from "./layers/points/Problems.svelte";
  import RailwayStationsLayerControl from "./layers/points/RailwayStations.svelte";
  import SportsSpacesLayerControl from "./layers/points/SportsSpaces.svelte";
  import Stats19LayerControl from "./layers/points/Stats19.svelte";
  import UserDataLayerControl from "./layers/points/UserData.svelte";
  import VehicleCountsLayerControl from "./layers/points/VehicleCounts.svelte";
  import SchemesLayer from "./schemes/SchemesLayer.svelte";
  import { controls, interactiveMapLayersEnabled } from "./stores";

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
  <SchemesLayer />

  <CollapsibleCard label="Trip generators">
    <CheckboxGroup small>
      <EducationLayerControl />
      <HospitalsLayerControl />
      <SportsSpacesLayerControl />
      <RailwayStationsLayerControl />
    </CheckboxGroup>
  </CollapsibleCard>

  <CollapsibleCard label="Existing infrastructure">
    <CheckboxGroup small>
      <CyclePathsLayerControl />
      <NationalCycleNetworkLayerControl />
      <MajorRoadNetworkLayerControl />
      <StrategicRoadNetworkLayerControl />
      <CycleParkingLayerControl />
      <CrossingsLayerControl />
      <RightsOfWayLayerControl />
    </CheckboxGroup>
  </CollapsibleCard>

  <CollapsibleCard label="Public transport">
    <CheckboxGroup small>
      <BusRoutesLayerControl />
      <TramsLayerControl />
      <BusStopsLayerControl />
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
      <RuralUrbanLayerControl />
    </CheckboxGroup>
  </CollapsibleCard>

  <CollapsibleCard label="Other">
    <CheckboxGroup small>
      <VehicleCountsLayerControl />
      <Stats19LayerControl />
      <PctLayerControl />
      <GradientsLayerControl />
      {#if appVersion() == "Private (development)"}
        <RoadWidthsLayerControl />
        <PavementWidthsLayerControl />
        <RoadSpeedsLayerControl />
        <ProblemsLayerControl />
      {/if}
      <PollutionLayerControl />
      <RoadNoiseLayerControl />
      <UserDataLayerControl />
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
