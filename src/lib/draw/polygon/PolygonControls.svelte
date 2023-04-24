<script lang="ts">
  import { PolygonTool } from "./polygon_tool";

  export let polygonTool: PolygonTool;
</script>

<ul>
  <li><b>Click</b> the map to add a vertex</li>
  <li><b>Click</b> a vertex to delete it</li>
  <li><b>Drag</b> a vertex or the polygon to move it</li>
  <li>Press <b>Enter</b> to finish</li>
</ul>

<div style="display: flex; justify-content: space-between">
  <button type="button" on:click={() => polygonTool.finish()}>Finish</button>
  <button type="button" on:click={() => polygonTool.cancel()}>Cancel</button>
</div>
