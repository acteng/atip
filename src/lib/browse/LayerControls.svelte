<script lang="ts">
  import {
    appVersion,
    BaselayerSwitcher,
    CollapsibleCard,
    LineMeasureController,
    StreetViewTool,
  } from "lib/common";
  import { CheckboxGroup } from "lib/govuk";
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
  import PavementWidthsLayerControl from "./layers/lines/PavementWidths.svelte";
  import PctLayerControl from "./layers/lines/PCT.svelte";
  import RoadSpeedsLayerControl from "./layers/lines/RoadSpeeds.svelte";
  import RoadWidthsLayerControl from "./layers/lines/RoadWidths.svelte";
  import CriticalIssuesLayerControl from "./layers/points/CriticalIssues.svelte";
  import CrossingsLayerControl from "./layers/points/Crossings.svelte";
  import CycleParkingLayerControl from "./layers/points/CycleParking.svelte";
  import HospitalsLayerControl from "./layers/points/Hospitals.svelte";
  import RailwayStationsLayerControl from "./layers/points/RailwayStations.svelte";
  import SchoolsLayerControl from "./layers/points/Schools.svelte";
  import SportsSpacesLayerControl from "./layers/points/SportsSpaces.svelte";
  import VehicleCountsLayerControl from "./layers/points/VehicleCounts.svelte";
  import { interactiveMapLayersEnabled } from "./stores";

  // Workaround for https://github.com/sveltejs/svelte/issues/7630
  $: streetviewEnabled = !$interactiveMapLayersEnabled;
  $: interactiveMapLayersEnabled.set(!streetviewEnabled);
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
      <MrnLayerControl />
      <BusRoutesLayerControl />
      <CycleParkingLayerControl />
      <CrossingsLayerControl />
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
  <CollapsibleCard label="Other">
    <CheckboxGroup small>
      <VehicleCountsLayerControl />
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
