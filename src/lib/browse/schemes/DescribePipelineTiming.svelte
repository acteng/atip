<script lang="ts">
  import type { PipelineTiming } from "types";

  export let props: PipelineTiming;
</script>

{#if props.status}
  <p>
    Status: <b>{props.status}</b>
  </p>
{/if}

{#if props.timescale}
  <p>
    Timescale: <b>{props.timescale}</b>
  </p>
{/if}

{#if props.timescale_year}
  <p>
    Estimated completion year: <b>{props.timescale_year}</b>
  </p>
{/if}

{#if props.year_published}
  <p>
    Scheme most recently published: <b>{props.year_published}</b>
  </p>
{/if}

{#if props.year_consulted}
  <p>
    Scheme most recently consulted on: <b>{props.year_consulted}</b>
  </p>
{/if}
