<script lang="ts">
  import type { Config } from "scheme-sketcher-lib/config";
  import type { FeatureProps } from "scheme-sketcher-lib/draw/types";
  import { schema } from "stores";
  import type { Writable } from "svelte/store";
  import type { InterventionProps, OurSchemeData, Schemes } from "types";
  import FormV1 from "./FormV1.svelte";
  import FormV2 from "./FormV2.svelte";
  import PipelineForm from "./pipeline/PipelineForm.svelte";
  import UnexpectedProperties from "./UnexpectedProperties.svelte";

  export let cfg: Config<InterventionProps, OurSchemeData>;
  export let gjSchemes: Writable<Schemes>;
  export let id: number | null;
  export let props: FeatureProps<InterventionProps>;

  // Workaround unused var warning
  cfg;

  // If the feature has just been created, initialize the properties shared by all schemas
  props.name ||= "";
  props.description ||= "";
</script>

{#if id != null}
  <UnexpectedProperties bind:props />
{/if}
{#if $schema == "v1"}
  <FormV1 {gjSchemes} bind:props />
{:else if $schema == "pipeline"}
  <PipelineForm {gjSchemes} bind:props />
{:else if $schema == "v2"}
  <FormV2 {gjSchemes} bind:props />
{/if}
