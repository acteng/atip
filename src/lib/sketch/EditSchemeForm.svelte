<script lang="ts">
  import GenericSchemeForm from "./GenericSchemeForm.svelte";
  import PipelineSchemeForm from "./pipeline/PipelineSchemeForm.svelte";
  import { schema } from "stores";
  import type { Schemes } from "types";
  import type { Writable } from "svelte/store";

  export let gjSchemes: Writable<Schemes>;
  export let scheme_reference: string;
</script>

{#if $schema == "pipeline"}
  <PipelineSchemeForm {gjSchemes} {scheme_reference} />
{:else}
  <GenericSchemeForm {gjSchemes} {scheme_reference} />
{/if}
