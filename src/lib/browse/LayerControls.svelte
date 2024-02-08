<script lang="ts">
  import {
    appVersion,
    BaselayerSwitcher,
    CollapsibleCard,
    LineMeasureController,
    StreetViewTool,
  } from "lib/common";
  import { CheckboxGroup } from "lib/govuk";
  import { layerId } from "lib/maplibre";
  import { FillLayer, GeoJSON } from "svelte-maplibre";
  import CensusOutputAreaLayerControl from "./layers/areas/CensusOutputAreas.svelte";
  import CombinedAuthoritiesLayerControl from "./layers/areas/CombinedAuthorities.svelte";
  import ImdLayerControl from "./layers/areas/IMD.svelte";
  import LocalAuthorityDistrictsLayerControl from "./layers/areas/LocalAuthorityDistricts.svelte";
  import LocalPlanningAuthoritiesLayerControl from "./layers/areas/LocalPlanningAuthorities.svelte";
  import ParliamentaryConstituenciesLayerControl from "./layers/areas/ParliamentaryConstituencies.svelte";
  import PollutionLayerControl from "./layers/areas/Pollution.svelte";
  import WardsLayerControl from "./layers/areas/Wards.svelte";
  import BusRoutesLayerControl from "./layers/lines/BusRoutes.svelte";
  import CyclePathsLayerControl from "./layers/lines/CyclePaths.svelte";
  import MrnLayerControl from "./layers/lines/MajorRoadNetwork.svelte";
  import NationalCycleNetworkLayerControl from "./layers/lines/NationalCycleNetwork.svelte";
  import PavementWidthsLayerControl from "./layers/lines/PavementWidths.svelte";
  import PctLayerControl from "./layers/lines/PCT.svelte";
  import RoadSpeedsLayerControl from "./layers/lines/RoadSpeeds.svelte";
  import RoadWidthsLayerControl from "./layers/lines/RoadWidths.svelte";
  import TramsLayerControl from "./layers/lines/Trams.svelte";
  import CriticalIssuesLayerControl from "./layers/points/CriticalIssues.svelte";
  import CrossingsLayerControl from "./layers/points/Crossings.svelte";
  import CycleParkingLayerControl from "./layers/points/CycleParking.svelte";
  import HospitalsLayerControl from "./layers/points/Hospitals.svelte";
  import RailwayStationsLayerControl from "./layers/points/RailwayStations.svelte";
  import SchoolsLayerControl from "./layers/points/Schools.svelte";
  import SportsSpacesLayerControl from "./layers/points/SportsSpaces.svelte";
  import Stats19LayerControl from "./layers/points/Stats19.svelte";
  import VehicleCountsLayerControl from "./layers/points/VehicleCounts.svelte";
  import { interactiveMapLayersEnabled } from "./stores";

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
</script>

<CollapsibleCard label="Layers" open>
  <CriticalIssuesLayerControl />
  <CollapsibleCard label="Trip generators">
    <CheckboxGroup small>
      <SchoolsLayerControl />
      <HospitalsLayerControl />
      <SportsSpacesLayerControl />
      <RailwayStationsLayerControl />
    </CheckboxGroup>
  </CollapsibleCard>
  <CollapsibleCard label="Existing infrastructure">
    <CheckboxGroup small>
      <CyclePathsLayerControl />
      <NationalCycleNetworkLayerControl />
      <MrnLayerControl />
      <CycleParkingLayerControl />
      <CrossingsLayerControl />
    </CheckboxGroup>
  </CollapsibleCard>
  <CollapsibleCard label="Public transit">
    <BusRoutesLayerControl />
    <TramsLayerControl />
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
  <CollapsibleCard label="Other">
    <CheckboxGroup small>
      <VehicleCountsLayerControl />
      <Stats19LayerControl />
      <PctLayerControl />
      {#if appVersion() == "Private (development)"}
        <RoadWidthsLayerControl />
        <PavementWidthsLayerControl />
        <RoadSpeedsLayerControl />
      {/if}
      <PollutionLayerControl />
    </CheckboxGroup>
  </CollapsibleCard>
  <CollapsibleCard label="Tools">
    <StreetViewTool bind:enabled={streetviewEnabled} />
    <LineMeasureController />
  </CollapsibleCard>
  <BaselayerSwitcher disabled={!$interactiveMapLayersEnabled} />
</CollapsibleCard>

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
