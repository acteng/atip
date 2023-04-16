<script lang="ts">
  // TODO Be specific about "streets" | "hybrid", but then we need actual error
  // handling when we parse it from URL params
  export let style: string;

  function changeStyle() {
    let params = new URLSearchParams(window.location.search);
    params.set("style", style);
    let href = `${window.location.pathname}?${params.toString()}${
      window.location.hash
    }`;
    window.location.href = href;
  }
</script>

<div>
  Basemap:
  <select bind:value={style} on:change={changeStyle}>
    <option value="streets">Streets</option>
    <option value="hybrid">Satellite</option>
  </select>
</div>

<style>
  div {
    position: absolute;
    left: 10px;
    bottom: 50px;
    background-color: white;
    padding: 16px;
  }
</style>
