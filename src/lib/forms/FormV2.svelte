<script lang="ts">
  import schemaJson from "../../schemas/v2_route.json";
  import FieldComponent from "./Field.svelte";
  import type { Field } from "./types";
  import type { InterventionProps } from "../../types";

  export let props: InterventionProps;

  props.v2 ||= {};

  let x: Field = schemaJson;
</script>

<FieldComponent spec={x} bind:value={props.v2} />
