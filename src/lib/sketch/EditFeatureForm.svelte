<script lang="ts">
  import FormV1 from "./FormV1.svelte";
  import PipelineForm from "./pipeline/PipelineForm.svelte";
  import { schema } from "stores";
  import UnexpectedProperties from "./UnexpectedProperties.svelte";
  import type { Config } from "scheme-sketcher-lib/config";
  import type { FeatureProps } from "scheme-sketcher-lib/draw/types";
  import type { InterventionProps, OurSchemeData, Schemes } from "types";
  import type { Writable } from "svelte/store";

  export let cfg: Config<InterventionProps, OurSchemeData>;
  export let gjSchemes: Writable<Schemes>;
  export let id: number | null;
  export let props: FeatureProps<InterventionProps>;

  // Workaround unused var warning
  cfg;
</script>

{#if id != null}
  <UnexpectedProperties bind:props />
{/if}
{#if $schema == "v1"}
  <FormV1 {gjSchemes} bind:props />
{:else if $schema == "pipeline"}
  <PipelineForm {gjSchemes} bind:props />
{/if}
