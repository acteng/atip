<script lang="ts">
  import {
    ColorLegend,
    HelpButton,
    Popup,
    publicResourceBaseUrl,
  } from "lib/common";
  import { Checkbox, CheckboxGroup } from "lib/govuk";
  import { layerId } from "lib/maplibre";
  import {
    FillLayer,
    hoverStateFilter,
    VectorTileSource,
  } from "svelte-maplibre";
  import { colors } from "../../colors";
  import OsmLicense from "../OsmLicense.svelte";

  let showGroup = false;

  let layerDescriptions = [
    {
      name: "schools",
      capitalisedName: "Schools",
      color: colors["schools"],
      show: true,
      singularNoun: "school",
    },
    {
      name: "colleges",
      capitalisedName: "Colleges",
      color: "maroon",
      show: true,
      singularNoun: "college",
    },
    {
      name: "universities",
      capitalisedName: "Universities",
      color: "navy",
      show: true,
      singularNoun: "University",
    },
  ];
</script>

<Checkbox id={"education"} bind:checked={showGroup}>
  Education
  <span slot="right">
    <HelpButton>
      <p>
        This shows different places of education according to OpenStreetMap (as
        of 07 February 2024).
      </p>
      <OsmLicense />
    </HelpButton>
  </span>
</Checkbox>
{#if showGroup}
  <div style="border: 1px solid black; padding: 8px;">
    <CheckboxGroup>
      {#each layerDescriptions as layerDescription}
        <Checkbox
          id={layerDescription.name}
          bind:checked={layerDescription.show}
        >
          <ColorLegend color={layerDescription.color} />
          {layerDescription.capitalisedName}
        </Checkbox>
      {/each}
    </CheckboxGroup>
  </div>
{/if}

{#each layerDescriptions as layerDescription}
  <VectorTileSource
    url={`pmtiles://${publicResourceBaseUrl()}/v1/${
      layerDescription.name
    }.pmtiles`}
  >
    <FillLayer
      {...layerId(layerDescription.name)}
      sourceLayer={layerDescription.name}
      paint={{
        "fill-color": layerDescription.color,
        "fill-opacity": hoverStateFilter(0.7, 1.0),
      }}
      layout={{
        visibility: showGroup && layerDescription.show ? "visible" : "none",
      }}
      manageHoverState
      eventsIfTopMost
    >
      <Popup let:props>
        <p>{props.name ?? `Unnamed ${layerDescription.singularNoun}`}</p>
      </Popup>
    </FillLayer>
  </VectorTileSource>
{/each}
