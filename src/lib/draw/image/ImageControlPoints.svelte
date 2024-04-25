<script lang="ts">
  import Draggable from "./Draggable.svelte";
  import Dot from "./Dot.svelte";
  import { percentX1, percentY1, percentX2, percentY2 } from "./stores";

  export let src: string;

  let x1 = 100;
  let y1 = 100;

  let x2 = 200;
  let y2 = 200;

  $: if (renderedDims[0] > 0) {
    $percentX1 = x1 / renderedDims[0];
    $percentY1 = y1 / renderedDims[1];
    $percentX2 = x2 / renderedDims[0];
    $percentY2 = y2 / renderedDims[1];
  }

  let realDims = [0, 0];
  let renderedDims = [0, 0];

  function measure(element: HTMLImageElement) {
    renderedDims = [element.width, element.height];
    realDims = [element.naturalWidth, element.naturalHeight];
  }
</script>

<p>real width {realDims[0]}, height {realDims[1]}.</p>
<p>rendered width {renderedDims[0]}, height {renderedDims[1]}.</p>
<p>pt1 is {x1}, {y1}. pt2 is {x2}, {y2}.</p>
<p>
  = {$percentX1.toFixed(2)}, {$percentY1.toFixed(2)} and {$percentX2.toFixed(
    2,
  )}, {$percentY2.toFixed(2)}
</p>

<div style="position: relative">
  <img {src} width="300" use:measure />

  <Draggable
    bind:x={x1}
    bind:y={y1}
    width={renderedDims[0]}
    height={renderedDims[1]}
  >
    <Dot color="red" label="A" />
  </Draggable>
  <Draggable
    bind:x={x2}
    bind:y={y2}
    width={renderedDims[0]}
    height={renderedDims[1]}
  >
    <Dot color="blue" label="B" />
  </Draggable>
</div>
