<script lang="ts">
  import FormV1 from "./FormV1.svelte";
  import PipelineForm from "./pipeline/PipelineForm.svelte";
  import { schema } from "stores";
  import UnexpectedProperties from "./UnexpectedProperties.svelte";

  export let id: number;
  export let props: { [name: string]: any };
</script>

<UnexpectedProperties {id} {props} />
{#if $schema == "v1"}
  <FormV1 bind:props />
{:else if $schema == "pipeline"}
  <PipelineForm bind:props />
{/if}
