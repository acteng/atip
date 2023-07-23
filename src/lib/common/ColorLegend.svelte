<script lang="ts">
  export let color: string;
</script>

<span style:background={color} />

<style>
  span {
    display: block;
    float: left;
    height: 16px;
    width: 30px;
    margin-right: 5px;
    border: 1px solid #999;
  }
</style>
