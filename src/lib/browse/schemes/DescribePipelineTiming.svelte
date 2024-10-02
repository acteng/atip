<script lang="ts">
  import type { PipelineTiming } from "types";

  export let props: PipelineTiming;
</script>

{#if props.status}
  <p>
    <b>Status</b>
    : {props.status}
  </p>
{/if}

{#if props.timescale}
  <p>
    <b>Timescale</b>
    : {props.timescale}
  </p>
{/if}

{#if props.timescale_year}
  <p>
    <b>Estimated completion year</b>
    : {props.timescale_year}
  </p>
{/if}

{#if props.year_published}
  <p>
    <b>Scheme most recently published</b>
    : {props.year_published}
  </p>
{/if}

{#if props.year_consulted}
  <p>
    <b>Scheme most recently consulted on</b>
    : {props.year_consulted}
  </p>
{/if}
