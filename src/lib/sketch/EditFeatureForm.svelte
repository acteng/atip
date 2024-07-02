<script lang="ts">
  import FormV1 from "./FormV1.svelte";
  import PipelineForm from "./pipeline/PipelineForm.svelte";
  import { schema } from "stores";
  import UnexpectedProperties from "./UnexpectedProperties.svelte";
  import { gjSchemeCollection } from "scheme-sketcher-lib/draw/stores";

  export let id: number;

  let feature = $gjSchemeCollection.features.find((f) => f.id == id)!;
</script>

{#if $schema == "v1"}
  <UnexpectedProperties id={feature.id} props={feature.properties} />
  <FormV1 bind:props={feature.properties} />
{:else if $schema == "pipeline"}
  <UnexpectedProperties id={feature.id} props={feature.properties} />
  <PipelineForm bind:props={feature.properties} />
{/if}
