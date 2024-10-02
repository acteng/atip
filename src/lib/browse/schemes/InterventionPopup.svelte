<script lang="ts">
  import { SecondaryButton } from "govuk-svelte";
  import type { FeatureCollection } from "geojson";
  import { bbox } from "lib/maplibre";
  import { map } from "stores";
  import { prettyPrintMeters } from "lib/maplibre";
  import { setLocalStorageItem } from "lib/common";
  import DescribePipelineTiming from "./DescribePipelineTiming.svelte";
  import DescribePipelineBudget from "./DescribePipelineBudget.svelte";
  import type { Schemes, SchemeData } from "types";
  import { afterUpdate } from "svelte";

  export let props: { [name: string]: any };
  export let schemes: Map<string, SchemeData>;
  export let schemesGj: Schemes;
  export let filterSchemeText: string;
  export let filterInterventionText: string;

  $: scheme = schemes.get(props.scheme_reference)!;

  let div: HTMLDivElement | undefined;
  afterUpdate(() => {
    if (div) {
      div.scrollTop = 0;
    }
  });

  // When the user is filtering name/description by freeform text, highlight the matching pieces.
  function highlightFilter(input: string, filter: string): string {
    if (!filter) {
      return input;
    }
    return input.replace(
      new RegExp(filter, "gi"),
      (match) => `<mark>${match}</mark>`,
    );
  }

  function showScheme() {
    // TODO Highlight on the map? Or fade everything else?
    let gj: FeatureCollection = {
      type: "FeatureCollection",
      features: schemesGj.features.filter(
        (f) => f.properties.scheme_reference == scheme.scheme_reference,
      ),
    };
    $map?.fitBounds(bbox(gj), { padding: 20, animate: false });
  }

  function editScheme() {
    let gj: Schemes = {
      type: "FeatureCollection",
      features: schemesGj.features.filter(
        (f) => f.properties.scheme_reference == scheme.scheme_reference,
      ),
      schemes: {},
    };
    gj.schemes[scheme.scheme_reference] = scheme;
    let filename = scheme.browse?.authority_or_region || "unknown authority";
    let schema = scheme.pipeline ? "pipeline" : "v1";
    if (schema == "pipeline") {
      filename += "_pipeline";
    }

    // Put the file in local storage, so it'll be loaded from the next page
    setLocalStorageItem(filename, JSON.stringify(gj));
    window.open(
      `scheme.html?authority=${scheme.browse?.authority_or_region}&schema=${schema}`,
      "_blank",
    );
  }
</script>

{#key props}
  <div
    style="max-width: 30vw; max-height: 60vh; overflow: auto;"
    bind:this={div}
  >
    <h2>
      {@html highlightFilter(props.name, filterInterventionText)} ({props.intervention_type})
    </h2>
    {#if props.length_meters}
      <p>
        Length: <b>{prettyPrintMeters(props.length_meters)}</b>
      </p>
    {/if}
    {#if props.description}
      <p>{@html highlightFilter(props.description, filterInterventionText)}</p>
    {/if}

    {#if props.pipeline}
      {@const p = props.pipeline}
      {#if p.atf4_type}
        <p>
          ATF4 type: <b>{p.atf4_type}</b>
        </p>
      {/if}
      {#if p.accuracy}
        <p>
          Accuracy: <b>{p.accuracy}</b>
        </p>
      {/if}
      {#if p.is_alternative}
        <p>Represents an alternative route</p>
      {/if}
      <DescribePipelineBudget props={p} />
      <DescribePipelineTiming props={p} />
    {/if}

    <hr />

    <p>
      Part of scheme: {@html highlightFilter(
        scheme.scheme_name ?? "",
        filterSchemeText,
      )} ({@html highlightFilter(props.scheme_reference, filterSchemeText)})
    </p>
    <p>
      Authority or region: <b>{scheme.browse?.authority_or_region}</b>
    </p>
    {#if scheme.browse?.capital_scheme_id}
      <p>
        Capital scheme ID: <b>{scheme.browse?.capital_scheme_id}</b>
      </p>
    {/if}
    <p>
      Funding programme: <b>{scheme.browse?.funding_programme}</b>
    </p>
    {#if scheme.browse?.current_milestone}
      <p>
        Current milestone: <b>{scheme.browse?.current_milestone}</b>
      </p>
    {/if}

    {#if scheme.pipeline}
      {@const p = scheme.pipeline}
      {#if p.scheme_type}
        <p>
          Scheme type: <b>{p.scheme_type}</b>
        </p>
      {/if}
      {#if p.atf4_lead_type}
        <p>
          ATF4 lead type: <b>{p.atf4_lead_type}</b>
        </p>
      {/if}
      {#if p.scheme_description}
        <p>Descripton: {p.scheme_description}</p>
      {/if}
      <DescribePipelineBudget props={p} />
      <DescribePipelineTiming props={p} />
    {/if}

    <SecondaryButton on:click={showScheme}>
      Zoom to show entire scheme
    </SecondaryButton>
    <SecondaryButton on:click={editScheme}>
      Edit a copy of this scheme
    </SecondaryButton>
  </div>
{/key}
