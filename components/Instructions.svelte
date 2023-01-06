<script>
  import { Modal, OrderedList, ListItem } from "carbon-components-svelte";

  export let open;
</script>

<Modal passiveModal modalHeading="Instructions" bind:open>
  <p>For each intervention:</p>

  <br />

  <OrderedList>
    <ListItem>
      Click one of the draw icons to the top right of the map (the icons allow
      you to draw points, lines, polygons or routes)
    </ListItem>
    <ListItem>
      Draw the intervention on the map, clicking the original point or 'Finish
      snapping' for the Polygon and Route tools respectively
    </ListItem>
    <ListItem>
      Fill in the details that appear (Intervention type, name, description)
    </ListItem>
    <ListItem>
      Click the "Save" button or "Delete" button to save or remove the
      intervention
    </ListItem>
  </OrderedList>

  <br />

  <p>
    Repeat the steps above for each substantial infrastructure intervention in
    the scheme.
  </p>

  <br />

  <p>
    To make further edits to attribute data, or to delete an intervention, click
    on its name in the left hand panel or its geometry in the map.
  </p>

  <br />

  <p>
    Click the "Export to GeoJSON" button to download the dataset representing
    the scheme, which can be made up of one or more intervention, as a GeoJSON
    file. After saving the file, you can delete the interventions, change the
    scheme name, and start a new set of interventions representing a new scheme.
  </p>

  <br />

  <p>
    To load a GeoJSON file that you have already saved from the tool, click the
    "Load from GeoJSON" button and select the file.
  </p>

  <br />

  <p>
    Note: the <strong>Route tool</strong> works by calculating routes between
    start and end points using the existing transport network according to
    OpenStreetMap. Use it by clicking on the location where you would like the
    route to start and then clicking on the location where you would like the
    route to end on the map. The route will be calculated and drawn on the map.
    After you click "Finish snapping" you can edit the route by dragging
    individual points. This can be useful for representing links that are not
    part of the existing transport network, such as a new bridge or path.
    However,
    <strong>you cannot add or remove points</strong> with the Route tool. If the
    planned route intervention you would like to sketch as part of a scheme contains
    one or more new links (for example containing new bridges or paths between cul-de-sacs),
    you may want to use the Line tool instead.
  </p>
</Modal>
