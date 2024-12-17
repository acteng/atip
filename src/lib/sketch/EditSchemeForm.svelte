<script lang="ts">
  import { schema } from "stores";
  import type { Writable } from "svelte/store";
  import type { Schemes } from "types";
  import GenericSchemeForm from "./GenericSchemeForm.svelte";
  import PipelineSchemeForm from "./pipeline/PipelineSchemeForm.svelte";

  export let gjSchemes: Writable<Schemes>;
  export let scheme_reference: string;
</script>

{#if $schema == "pipeline"}
  <PipelineSchemeForm {gjSchemes} {scheme_reference} />
{:else}
  <GenericSchemeForm {gjSchemes} {scheme_reference} />
{/if}
