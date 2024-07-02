<script lang="ts">
  import GenericSchemeForm from "./GenericSchemeForm.svelte";
  import PipelineSchemeForm from "./PipelineSchemeForm.svelte";
  import { schema } from "stores";

  export let scheme_reference: string;
</script>

{#if $schema == "pipeline"}
  <PipelineSchemeForm {scheme_reference} />
{:else}
  <GenericSchemeForm {scheme_reference} />
{/if}
