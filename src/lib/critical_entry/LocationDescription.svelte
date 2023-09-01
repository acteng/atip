<script lang="ts">
  import type { LngLat } from "maplibre-gl";
  import { Checkbox, CheckboxGroup, ErrorMessage, FormElement } from "../govuk";

  export let locationDescription: string;
  export let locationDescriptionError: string;
  export let pt: LngLat;

  let lookupLocation = true;
  $: updateLocationDescription(pt);
  async function updateLocationDescription(pt: LngLat) {
    if (!lookupLocation) {
      return;
    }
    // TODO Don't overwrite something the user entered
    let url = `https://nominatim.openstreetmap.org/reverse?lat=${pt.lat}&lon=${pt.lng}&format=json`;
    try {
      locationDescription = "Loading...";
      let resp = await fetch(url);
      let json = await resp.json();
      // The road usually seems filled out, but fallback to a (verbose) name.
      locationDescription = json.address.road ?? json.display_name;
    } catch (err) {
      console.log(`Location lookup failed: ${err}`);
    }
  }

  // If the user manually types something, stop geocoding
  function locationDescriptionChanged() {
    lookupLocation = false;
  }
</script>

<FormElement label="Describe this location" id="locationDescription">
  <ErrorMessage errorMessage={locationDescriptionError} />
  <input
    type="text"
    class="govuk-input govuk-input--width-20"
    id="locationDescription"
    bind:value={locationDescription}
    on:change={locationDescriptionChanged}
  />
</FormElement>
<CheckboxGroup small>
  <Checkbox id="lookupLocation" bind:checked={lookupLocation}>
    Lookup location description automatically
  </Checkbox>
</CheckboxGroup>
