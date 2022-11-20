import { checkboxes, checkbox_ids, dropdown } from "./forms.js";

export function makeDetailedForm(props) {
  switch (props.intervention_type) {
    case "area":
      return `<fieldset>
	    <legend>What will this area include?</legend>
	    ${checkboxes(props, "area_", [
        "Modal filters",
        "Traffic calming",
        "Car free area (permanent)",
        "Car free area (during certain times)",
        "Car parking restrictions",
        "20 mph zone",
        "School streets zone",
        "Other interventions",
      ])}
          </fieldset>
      `;

    case "route":
      return `<fieldset>
           <legend>Route type</legend>
           ${dropdown(
             props,
             "route_type",
             "The main type of active travel infrastructure along the route",
             [
               "Footpath",
               "Shared use footpath/cycleway",
               "Cycleway",
               "Contraflow",
               "Quietway",
             ]
           )}
           ${dropdown(
             props,
             "on_carriageway",
             "The main way in which the route relates to roads",
             [
               "Parallel to major road(s)",
               "Parallel to minor road(s)",
               "Off carriageway on existing route",
             ]
           )}
           ${dropdown(
             props,
             "reallocation",
             "The main source of new space for active travel",
             [
               "Reallocation of a complete vehicular lane on the carriageway",
               "Road diet: vehicular carriageway thinned, creating new space",
               "Pavement diet: existing pavement space reallocated",
               "Verge or other unused space reallocated",
             ]
           )}
           ${dropdown(
             props,
             "separation",
             "The main way in which the route is separated from motor traffic",
             [
               "Full separation",
               "Stepped",
               "Part separation",
               "Mandatory lane",
               "Advisory lane",
               "On carriageway (e.g. through modal filters)",
             ]
           )}
               <div class="form-row">
                 <label for="width">Average width of the route in metres:</label>
                 <input type="number" id="width" value="${
                   props.width || ""
                 }" min="0.0" step="0.1">
           </fieldset>
           `;

    case "crossing":
      return `<fieldset>
            <legend>Crossing info</legend>
            ${dropdown(props, "crossing_type", "Crossing type", [
              "Zebra",
              "Pelican signalised",
              "Puffin signalised",
              "Toucan signalised",
              "Pegasus signalised",
              "School crossing",
              "Refuge",
            ])}
            ${dropdown(
              props,
              "motor_traffic_flow",
              "Motor traffic flow (Passenger Car Units per day)",
              ["< 3,000", "3,000 - 8,000", "> 8,000"]
            )}
            ${dropdown(
              props,
              "85th_percentile_speed",
              "Motor traffic speed (85th percentile)",
              ["< 20 mph", "20-30 mph", "> 30 mph"]
            )}
            </fieldset>
            `;

    case "other":
      return `<fieldset>
            <legend>Intervention info</legend>
            ${dropdown(
              props,
              "type",
              "Type of street furniture or urban realm intervention",
              [
                "Parklet",
                "Play area",
                "Secure cycle parking (e.g. hangars)",
                "Covered open cycle parking",
                "Uncovered open cycle parking",
                "Signage",
                "Public transport stop",
                "Dropped curb for wheeled access",
                "Access ramp alongside or instead of steps",
                "Other",
              ]
            )}
            </fieldset>
            `;

    default:
      throw new Exception(
        `Unknown intervention_type ${props.intervention_type}`
      );
  }
}

export function saveDetailedForm(app, id, intervention_type) {
  switch (intervention_type) {
    case "area":
      for (const key of checkbox_ids("area_", 8)) {
        app.drawControls.setFeatureProperty(
          id,
          key,
          document.getElementById(key).checked
        );
      }
      break;

    case "route":
      for (const key of [
        "route_type",
        "on_carriageway",
        "reallocation",
        "separation",
        "width",
      ]) {
        app.drawControls.setFeatureProperty(
          id,
          key,
          document.getElementById(key).value
        );
      }
      break;

    case "crossing":
      for (const key of [
        "crossing_type",
        "motor_traffic_flow",
        "85th_percentile_speed",
      ]) {
        app.drawControls.setFeatureProperty(
          id,
          key,
          document.getElementById(key).value
        );
      }
      break;

    case "other":
      for (const key of ["type"]) {
        app.drawControls.setFeatureProperty(
          id,
          key,
          document.getElementById(key).value
        );
      }
      break;

    default:
      throw new Exception(
        `Unknown intervention_type ${props.intervention_type}`
      );
  }
}
