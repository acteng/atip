<script lang="ts">
  import Draggable from "./Draggable.svelte";
  import Dot from "./Dot.svelte";

  export let src: string;

  let x1 = 100;
  let y1 = 100;

  let x2 = 200;
  let y2 = 200;

  let realDims = [0, 0];
  let renderedDims = [0, 0];

  function measure(element: HTMLImageElement) {
    renderedDims = [element.width, element.height];
    realDims = [element.naturalWidth, element.naturalHeight];
  }
</script>

<p>width {realDims[0]}, height {realDims[1]}.</p>
<p>pt1 is {x1}, {y1}. pt2 is {x2}, {y2}.</p>

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
