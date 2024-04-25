<script lang="ts">
  export let label: string;
  export let color: string;
</script>

<span style="background-color: {color}">{label}</span>

<style>
  span {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: inline-block;
    text-align: center;
    color: white;
  }

  span:hover {
    border: 1px solid black;
    cursor: move;
  }
</style>
