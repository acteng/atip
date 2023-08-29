<script lang="ts">
  import readXlsxFile from "read-excel-file";
  import { FormElement } from "../govuk";
  import { setPrecision } from "../maplibre";

  let fileInput: HTMLInputElement;

  async function parseExcel(): Promise<GeoJSON> {
    let mapping = {
      ID: "id",
      Inspector: "inspector",
      "Submission Time": "submission_time",
      "Please enter the Scheme Reference number, (e.g. ATF2_WYO_01)":
        "scheme_reference",
      "Please enter current Design Stage": "current_design_stage",
      "Select Critical Issue type below:": "critical_type",
      "Please Enter Latitude and Longitude \n(Right click on location in Google, left click on information to copy to clipboard, paste below)":
        "lat_lon",
      Column1: "location_description",
      "Enter any additional information (e.g. any comments or notes about this critical issue)":
        "notes",
    };

    let { rows } = await readXlsxFile(fileInput.files[0], {
      map: mapping,
      sheet: "Form Input",
    });

    let gj = {
      type: "FeatureCollection",
      features: [],
    };
    for (let row of rows) {
      let coordinates = setPrecision(row.lat_lon.split(",").map(parseFloat));
      gj.features.push({
        type: "Feature",
        properties: row,
        geometry: {
          type: "Point",
          coordinates,
        },
      });
      //console.log(row);
    }
    return gj;
  }

  async function onChange(e: Event) {
    let gj = await parseExcel();
    console.log(gj);
  }
</script>

<FormElement label="Load criticals from xlsx" id="load-criticals">
  <input
    bind:this={fileInput}
    on:change={onChange}
    class="govuk-file-upload"
    id="load-criticals"
    type="file"
  />
</FormElement>
