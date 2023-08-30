<script lang="ts">
  import { interactiveMapLayersEnabled } from "../../stores";
  import { BaselayerSwitcher, CollapsibleCard } from "../common";
  import StreetViewController from "../common/StreetViewController.svelte";
  import { CheckboxGroup } from "../govuk";
  import BusRoutesLayerControl from "./layers/BusRoutesLayerControl.svelte";
  import CensusOutputAreaLayerControl from "./layers/CensusOutputAreaLayerControl.svelte";
  import CombinedAuthoritiesLayerControl from "./layers/CombinedAuthoritiesLayerControl.svelte";
  import CriticalIssuesLayerControl from "./layers/CriticalIssuesLayerControl.svelte";
  import CycleParkingLayerControl from "./layers/CycleParkingLayerControl.svelte";
  import CyclePathsLayerControl from "./layers/CyclePathsLayerControl.svelte";
  import HospitalsLayerControl from "./layers/HospitalsLayerControl.svelte";
  import ImdLayerControl from "./layers/ImdLayerControl.svelte";
  import LocalAuthorityDistrictsLayerControl from "./layers/LocalAuthorityDistrictsLayerControl.svelte";
  import LocalPlanningAuthoritiesLayerControl from "./layers/LocalPlanningAuthoritiesLayerControl.svelte";
  import MrnLayerControl from "./layers/MrnLayerControl.svelte";
  import ParliamentaryConstituenciesLayerControl from "./layers/ParliamentaryConstituenciesLayerControl.svelte";
  import RailwayStationsLayerControl from "./layers/RailwayStationsLayerControl.svelte";
  import SchoolsLayerControl from "./layers/SchoolsLayerControl.svelte";
  import SportsSpacesLayerControl from "./layers/SportsSpacesLayerControl.svelte";
  import VehicleCountsLayerControl from "./layers/VehicleCountsLayerControl.svelte";
  import WardsLayerControl from "./layers/WardsLayerControl.svelte";

  export let style: string;

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
  </CollapsibleCard>
  <StreetViewController
    bind:this={streetViewController}
    displayEnableButton
    bind:isInactive={$interactiveMapLayersEnabled}
  />
  <BaselayerSwitcher {style} />
</CollapsibleCard>

<svelte:window on:keydown={onKeydown} />