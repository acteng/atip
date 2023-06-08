<script lang="ts">
  import schemaJson from "../../schemas/criticals.json";
  import type { InterventionProps } from "../../types";
  import AutogenerateForm from "./AutogenerateForm.svelte";
  import type { Field } from "./types";

  export let props: InterventionProps;

  props.criticals ||= {};

  let x: Field = schemaJson;
</script>

<AutogenerateForm spec={x} bind:value={props.criticals} />
