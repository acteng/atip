<script lang="ts">
  export let colors: string[];
  export let labels: string[];

  if (colors.length != labels.length) {
    throw new Error(`colors and labels must match`);
  }
  let width = `${100 / colors.length}%`;
</script>

<table>
  <tr>
    {#each colors as color}
      <td style:background-color={color} />
    {/each}
  </tr>
  <tr>
    {#each labels as label}
      <td style:width>{label}</td>
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
