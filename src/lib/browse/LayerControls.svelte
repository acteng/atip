<script lang="ts">
  import { BaselayerSwitcher, CollapsibleCard } from "../common";
  import { CheckboxGroup } from "../govuk";
  import BusRoutesLayerControl from "./layers/BusRoutesLayerControl.svelte";
  import CensusOutputAreaLayerControl from "./layers/CensusOutputAreaLayerControl.svelte";
  import CombinedAuthoritiesLayerControl from "./layers/CombinedAuthoritiesLayerControl.svelte";
  import CycleParkingLayerControl from "./layers/CycleParkingLayerControl.svelte";
  import HospitalsLayerControl from "./layers/HospitalsLayerControl.svelte";
  import ImdLayerControl from "./layers/ImdLayerControl.svelte";
  import LocalAuthorityDistrictsLayerControl from "./layers/LocalAuthorityDistrictsLayerControl.svelte";
  import LocalPlanningAuthoritiesLayerControl from "./layers/LocalPlanningAuthoritiesLayerControl.svelte";
  import MrnLayerControl from "./layers/MrnLayerControl.svelte";
  import ParliamentaryConstituenciesLayerControl from "./layers/ParliamentaryConstituenciesLayerControl.svelte";
  import RailwayStationsLayerControl from "./layers/RailwayStationsLayerControl.svelte";
  import SchoolsLayerControl from "./layers/SchoolsLayerControl.svelte";
  import SportsSpacesLayerControl from "./layers/SportsSpacesLayerControl.svelte";
  import WardsLayerControl from "./layers/WardsLayerControl.svelte";

  export let style: string;
</script>

<CollapsibleCard label="Layers" open>
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
  <BaselayerSwitcher {style} />
</CollapsibleCard>
