<script lang="ts">
  import type { FundingSources, PipelineBudget } from "types";

  export let props: PipelineBudget;

  function listFundingSources(props: PipelineBudget): string {
    if (!props.funding_sources) {
      return "";
    }
    let list = [];
    for (let key of ["atf2", "atf3", "atf4", "atf4e", "crsts", "luf"]) {
      if (props.funding_sources[key as keyof FundingSources]) {
        list.push(key.toUpperCase());
      }
    }
    if (props.funding_sources.other) {
      list.push(props.funding_sources.other);
    }
    return list.join(", ");
  }
  $: funding = listFundingSources(props);
</script>

{#if props.budget}
  <p>
    Cost: <b>{props.budget.toLocaleString()}</b>
    GBP
  </p>
{/if}

{#if props.development_funded}
  <p>Development is fully funded</p>
{/if}

{#if props.construction_funded}
  <p>Construction is fully funded</p>
{/if}

{#if funding}
  <p>
    Funding sources: <b>{funding}</b>
  </p>
{/if}
