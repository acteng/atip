<script lang="ts">
    import { routesToMerge } from "stores";
</script>

<ol>
  {#each $routesToMerge as route}
    <li>item: {route.properties?.name}</li>
  {/each}
</ol>
