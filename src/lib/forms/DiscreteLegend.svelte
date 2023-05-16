<script lang="ts">
  export let colors: string[];
  export let steps: number[];

  if (colors.length != steps.length + 1) {
    throw new Error(`There must be one more color than step`);
  }

  let ranges = [];
  let low = 0;
  for (let high of steps) {
    ranges.push(`${low}-${high}`);
    low = high;
  }
  ranges.push(`>${low}`);
</script>

<table>
  <tr>
    {#each colors as color}
      <td style:background-color={color} />
    {/each}
  </tr>
  <tr>
    {#each ranges as range}
      <td>{range}</td>
    {/each}
  </tr>
</table>

<style>
  table,
  tr {
    width: 100%;
  }

  td {
    height: 30px;
    text-align: center;
  }
</style>
