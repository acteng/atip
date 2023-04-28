<script lang="ts">
  import type { InterventionProps } from "../types";

  export let props: InterventionProps;

  // TODO Should we start with these defaults, or make everything optional?
  props.v2 ||= {
    name: "",
  };
</script>

<label
  >Name:<br />
  <input type="text" bind:value={props.v2.name} style="width: 100%" />
</label>
