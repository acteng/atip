<script lang="ts">
  import { Modal } from "lib/common";
  import {
    ButtonGroup,
    DefaultButton,
    ErrorMessage,
    FormElement,
    SecondaryButton,
    Select,
    TextArea,
    WarningButton,
  } from "govuk-svelte";
  import { setPrecision } from "lib/maplibre";
  import type { LngLat } from "maplibre-gl";
  import LocationDescription from "./LocationDescription.svelte";

  export let pt: LngLat;

  // Auto-save 3 fields to make it easier to repeatedly fill out the form
  let inspector = window.localStorage.getItem("inspector") ?? "";
  let schemeReference = window.localStorage.getItem("schemeReference") ?? "";
  let currentDesignStage =
    window.localStorage.getItem("currentDesignStage") ?? "";
  $: window.localStorage.setItem("inspector", inspector);
  $: window.localStorage.setItem("schemeReference", schemeReference);
  $: window.localStorage.setItem("currentDesignStage", currentDesignStage);

  let criticalIssueType = "";
  let locationDescription = "";
  let notes = "";

  let inspectorError = "";
  let schemeReferenceError = "";
  let currentDesignStageError = "";
  let criticalIssueTypeError = "";
  let locationDescriptionError = "";
  let notesError = "";
  let modalOpen = false;
  let excelRow = "";

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
      schemeReference,
      currentDesignStage,
      criticalIssueType,
      setPrecision(pt.toArray().reverse()).join(", "),
      locationDescription,
      notes,
    ];
    return row.join("\t");
  }

  function exportForm() {
    // Trivial validation currently
    inspectorError = inspector ? "" : "Required";
    schemeReferenceError = schemeReference ? "" : "Required";
    currentDesignStageError = currentDesignStage ? "" : "Required";
    criticalIssueTypeError = criticalIssueType ? "" : "Required";
    locationDescriptionError = locationDescription ? "" : "Required";
    notesError = notes ? "" : "Required";

    if (
      inspectorError ||
      schemeReferenceError ||
      currentDesignStageError ||
      criticalIssueTypeError ||
      locationDescriptionError ||
      notesError
    ) {
      return;
    }
    excelRow = getExcelRow();
    navigator.clipboard.writeText(excelRow);
    modalOpen = true;
  }

  function reset() {
    // Simpler than plumbing around something to reset the pin
    location.reload();
  }
</script>

<FormElement label="Inspector name" id="inspector">
  <ErrorMessage errorMessage={inspectorError} />
  <input
    type="text"
    class="govuk-input"
    id="inspector"
    bind:value={inspector}
  />
</FormElement>

<FormElement label="Scheme reference" id="schemeReference">
  <div class="govuk-hint">Example: ATF2_WLT_01</div>
  <ErrorMessage errorMessage={schemeReferenceError} />
  <input
    type="text"
    class="govuk-input"
    id="schemeReference"
    bind:value={schemeReference}
  />
</FormElement>

<Select
  label="Current design stage"
  choices={designStages}
  emptyOption
  bind:value={currentDesignStage}
  errorMessage={currentDesignStageError}
/>

<LocationDescription bind:locationDescription {pt} {locationDescriptionError} />

<Select
  label="Critical issue type"
  choices={criticalIssueTypes}
  emptyOption
  bind:value={criticalIssueType}
  errorMessage={criticalIssueTypeError}
/>

<TextArea
  label="Comments or notes"
  bind:value={notes}
  errorMessage={notesError}
/>

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
      value={excelRow}
    />
    <ButtonGroup>
      <SecondaryButton on:click={() => (modalOpen = false)}>
        Keep editing this issue
      </SecondaryButton>
      <WarningButton on:click={reset}>Done! Enter a new critical</WarningButton>
    </ButtonGroup>
  </div>
</Modal>
