<script lang="ts">
  import schemaJson from "../../schemas/criticals.json";
  import AutogenerateForm from "./AutogenerateForm.svelte";
  import type { Field } from "./types";
  import type { InterventionProps } from "../../types";

  export let props: InterventionProps;

  props.criticals ||= {};

  let x: Field = schemaJson;
</script>

<AutogenerateForm spec={x} bind:value={props.criticals} />
