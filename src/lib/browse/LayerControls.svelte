<script lang="ts">
  import {
    appVersion,
    BaselayerSwitcher,
    CollapsibleCard,
    LineMeasureController,
    StreetViewController,
  } from "lib/common";
  import { CheckboxGroup } from "lib/govuk";
  import { interactiveMapLayersEnabled } from "stores";
  import CensusOutputAreaLayerControl from "./layers/areas/CensusOutputAreas.svelte";
  import CombinedAuthoritiesLayerControl from "./layers/areas/CombinedAuthorities.svelte";
  import ImdLayerControl from "./layers/areas/IMD.svelte";
  import LocalAuthorityDistrictsLayerControl from "./layers/areas/LocalAuthorityDistricts.svelte";
  import LocalPlanningAuthoritiesLayerControl from "./layers/areas/LocalPlanningAuthorities.svelte";
  import ParliamentaryConstituenciesLayerControl from "./layers/areas/ParliamentaryConstituencies.svelte";
  import WardsLayerControl from "./layers/areas/Wards.svelte";
  import BusRoutesLayerControl from "./layers/lines/BusRoutes.svelte";
  import CyclePathsLayerControl from "./layers/lines/CyclePaths.svelte";
  import MrnLayerControl from "./layers/lines/MajorRoadNetwork.svelte";
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

  let streetViewController: StreetViewController;

  function onKeydown(e: KeyboardEvent) {
    if (!$interactiveMapLayersEnabled && e.key == "Escape") {
      streetViewController.disableStreetView();
      e.preventDefault();
    }
  }
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
    <CensusOutputAreaLayerControl />
    <ImdLayerControl />
  </CollapsibleCard>
  <CollapsibleCard label="Other">
    <VehicleCountsLayerControl />
    <PctLayerControl />
    {#if appVersion() == "Private (development)"}
      <RoadWidthsLayerControl />
      <RoadSpeedsLayerControl />
    {/if}
  </CollapsibleCard>
  <CollapsibleCard label="Tools">
    <StreetViewController
      bind:this={streetViewController}
      displayEnableButton
      bind:isInactive={$interactiveMapLayersEnabled}
    />
    <LineMeasureController />
  </CollapsibleCard>
  <BaselayerSwitcher disabled={!$interactiveMapLayersEnabled} />
</CollapsibleCard>

<svelte:window on:keydown={onKeydown} />
