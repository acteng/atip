<script lang="ts">
  import schemaJson from "../../schemas/v2.json";
  import type { InterventionProps } from "../../types";
  import AutogenerateForm from "./AutogenerateForm.svelte";
  import type { Field } from "./types";

  export let props: InterventionProps;

  props.v2 ||= {};

  let x: Field = schemaJson;
</script>

<AutogenerateForm spec={x} bind:value={props.v2} />
