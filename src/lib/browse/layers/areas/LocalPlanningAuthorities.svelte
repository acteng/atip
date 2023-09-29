<script lang="ts">
  import {
    ColorLegend,
    ExternalLink,
    HelpButton,
    publicResourceBaseUrl,
  } from "lib/common";
  import { Checkbox } from "lib/govuk";
  import {
    FillLayer,
    hoverStateFilter,
    LineLayer,
    Popup,
    VectorTileSource,
    type LayerClickInfo,
  } from "svelte-maplibre";
  import { colors } from "../../colors";
  import OsOglLicense from "../OsOglLicense.svelte";

  let name = "local_planning_authorities";
  let color = colors.local_planning_authorities;
  let outlineLayer = `${name}-outline`;

  let show = false;
  $: visibility = show ? "visible" : "none";

  // TODO Note there are overlapping features, so the tooltip may be incomplete
  // -- but can't we fix that now?
</script>

<Checkbox id={name} bind:checked={show}>
  <ColorLegend {color} />
  Local Planning Authorities
  <span slot="right">
    <HelpButton>
      <p>
        LPAs may be a <ExternalLink
          href="https://www.planning.data.gov.uk/dataset/local-authority"
        >
          local authority
        </ExternalLink>, <ExternalLink
          href="https://www.planning.data.gov.uk/dataset/national-park-authority"
        >
          national park authorit
        </ExternalLink>y, or <ExternalLink
          href="https://www.planning.data.gov.uk/dataset/development-corporation"
        >
          development corporation
        </ExternalLink>.
      </p>
      <p>
        <strong>
          Note there are overlapping LPAs near Northhamptonshire. Only one
          authority name is shown when hovering. Use <ExternalLink
            href="https://www.planning.data.gov.uk/map/?dataset=local-planning-authority"
          >
            this map
          </ExternalLink> to get more details.
        </strong>
      </p>
      <p>
        Data from ONS Geography via <ExternalLink
          href="https://www.planning.data.gov.uk/dataset/local-planning-authority"
        >
          planning.data.gov.uk
        </ExternalLink>, as of November 2022.
      </p>
      <OsOglLicense />
    </HelpButton>
  </span>
</Checkbox>

<VectorTileSource
  url={`pmtiles://${publicResourceBaseUrl()}/v1/${name}.pmtiles`}
>
  <FillLayer
    id={name}
    sourceLayer={name}
    paint={{
      "fill-color": color,
      "fill-opacity": hoverStateFilter(0.0, 0.5),
    }}
    layout={{
      visibility,
    }}
    manageHoverState
  >
    <Popup openOn="hover" let:features>
      <p>{features[0].properties.name}</p>
    </Popup>
  </FillLayer>
  <LineLayer
    id={outlineLayer}
    sourceLayer={name}
    paint={{
      "line-color": color,
      "line-width": 2.5,
    }}
    layout={{
      visibility,
    }}
  />
</VectorTileSource>
