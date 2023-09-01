<script lang="ts">
  import type { LngLat } from "maplibre-gl";
  import { Modal } from "../common";
  import {
    DefaultButton,
    FormElement,
    SecondaryButton,
    Select,
    TextArea,
    WarningButton,
  } from "../govuk";
  import { setPrecision } from "../maplibre";
  import LocationDescription from "./LocationDescription.svelte";

  export let pt: LngLat;

  // Auto-save 3 fields to make it easier to repeatedly fill out the form
  let inspector = window.localStorage.getItem("inspector") ?? "";
  let scheme_reference = window.localStorage.getItem("scheme_reference") ?? "";
  let current_design_stage =
    window.localStorage.getItem("current_design_stage") ?? "";
  $: window.localStorage.setItem("inspector", inspector);
  $: window.localStorage.setItem("scheme_reference", scheme_reference);
  $: window.localStorage.setItem("current_design_stage", current_design_stage);

  let critical_issue_type = "";
  let location_description = "";
  let notes = "";

  let modalOpen = false;

  let designStages = listToChoices([
    "Baseline",
    "Feasibility Design",
    "Preliminary Design",
    "Outline Design",
    "Detailed Design",
    "Inspection",
  ]);

  let criticalIssueTypes = listToChoices([
    "1 - Conflict at Side Roads",
    "2 - Conflict at Major Junctions / Roundabouts",
    "3 - Collision Alongside or from Behind",
    "4 - Trip Hazard",
    "5 - Kerbside Activity",
    "6A - Risk of Crossing Conflict (Busy Roads)",
    "6B - Risk of Crossing Conflict (Quieter Roads)",
    "7A - Standard of Crossing Facility (Busy Roads)",
    "7B - Standard of Crossing Facility (Junction)",
    "8 - Traffic Speed (>37mph)",
    "9A - Traffic Volume (>10,000vpd)",
    "9B - Traffic Volume (>5% HGVs)",
    "10 - Crossing Speed",
    "11A - Footway Width (Absolute Minimum <1m)",
    "11B - Footway Width (at Pinchpoints)",
    "11C - Footway Width - Poor Pedestrian Comfort",
    "12 - Tram - Insufficient width next to Tram Track",
    "13 - Tram/Rail - Poor Crossing Angle",
    "14 - Major Cycle Surface Defect",
    "15 - Major Pedestrian Surface Defect",
    "16 - Inappropriate Shared Use",
    "17 - Barriers, Steps and/or Dismount signs",
    "18 - Route isn't direct, logical or intuitive to all users",
    "19 - Inappropriate Surface Materials",
    "20 - Inappropriate Lighting",
    "21 - Routes must join other facilities as a network",
  ]);

  function listToChoices(list: string[]): [string, string][] {
    return list.map((x) => [x, x]);
  }

  // Thanks to
  // https://gitlab.com/catamphetamine/write-excel-file/-/blob/main/source/write/convertDateToExcelSerial.js,
  // MIT licensed
  function excelDatetime(date: Date): number {
    let daysBeforeUnixEpoch = 70 * 365 + 19;
    let hour = 60 * 60 * 1000;
    let day = 24 * hour;
    return date.getTime() / day + daysBeforeUnixEpoch;
  }

  function getExcelRow(): string {
    // Whoever's copying this will have to assign a new ID manually
    let id = 0;
    let submission_time = excelDatetime(new Date());

    // The column order is defined by the Excel file
    let row = [
      id,
      inspector,
      submission_time,
      scheme_reference,
      current_design_stage,
      critical_issue_type,
      setPrecision(pt.toArray().reverse()).join(","),
      location_description,
      notes,
    ];
    return row.join("\t");
  }

  function exportForm() {
    navigator.clipboard.writeText(getExcelRow());
    modalOpen = true;
  }

  function reset() {
    // Simpler than plumbing around something to reset the pin
    location.reload();
  }
</script>

<FormElement label="Inspector name" id="inspector">
  <input
    type="text"
    class="govuk-input govuk-input--width-10"
    id="inspector"
    bind:value={inspector}
  />
</FormElement>

<FormElement label="Scheme reference" id="scheme_reference">
  <input
    type="text"
    class="govuk-input govuk-input--width-10"
    id="scheme_reference"
    bind:value={scheme_reference}
  />
</FormElement>

<Select
  label="Current design stage"
  id="current_design_stage"
  choices={designStages}
  emptyOption
  bind:value={current_design_stage}
/>

<LocationDescription bind:location_description {pt} />

<Select
  label="Critical issue type"
  id="critical_issue_type"
  choices={criticalIssueTypes}
  emptyOption
  bind:value={critical_issue_type}
/>

<TextArea label="Comments or notes" bind:value={notes} />

<DefaultButton on:click={exportForm}>Export</DefaultButton>

<Modal
  title="Almost done!"
  bind:open={modalOpen}
  displayEscapeButton={false}
  canCloseByClickingBackground={false}
>
  <div class="govuk-prose">
    <p>
      Edit <i>Inspectors Log.xlsx</i>
      , add a new row at the bottom of
      <i>Form Input</i>
      , and press
      <i>Control+V</i>
      to paste.
    </p>
    <p><b>You have to manually fill out the first ID column!</b></p>
    <TextArea
      label="The new row has already been copied to your clipboard. If it didn't work, copy from below"
      value={getExcelRow()}
    />
    <div class="govuk-button-group">
      <SecondaryButton on:click={() => (modalOpen = false)}>
        Keep editing this issue
      </SecondaryButton>
      <WarningButton on:click={reset}>Done! Enter a new critical</WarningButton>
    </div>
  </div>
</Modal>
