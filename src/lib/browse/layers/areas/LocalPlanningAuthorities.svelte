<script lang="ts">
  import {
    ColorLegend,
    ExternalLink,
    HelpButton,
    Popup,
    publicResourceBaseUrl,
  } from "lib/common";
  import { Checkbox } from "govuk-svelte";
  import { layerId } from "lib/maplibre";
  import {
    FillLayer,
    hoverStateFilter,
    LineLayer,
    VectorTileSource,
  } from "svelte-maplibre";
  import { colors } from "../../colors";
  import OsOglLicense from "../OsOglLicense.svelte";

  let name = "local_planning_authorities";
  let color = colors.local_planning_authorities;

  let show = false;

  // TODO Note there are overlapping features, so the tooltip may be incomplete
  // -- but can't we fix that now?
</script>

<Checkbox bind:checked={show}>
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
    {...layerId(name)}
    sourceLayer={name}
    paint={{
      "fill-color": color,
      "fill-opacity": hoverStateFilter(0.0, 0.5),
    }}
    layout={{
      visibility: show ? "visible" : "none",
    }}
    manageHoverState
    eventsIfTopMost
  >
    <Popup let:props>
      <p>{props.name}</p>
    </Popup>
  </FillLayer>
  <LineLayer
    {...layerId(`${name}-outline`)}
    sourceLayer={name}
    paint={{
      "line-color": color,
      "line-width": 2.5,
    }}
    layout={{
      visibility: show ? "visible" : "none",
    }}
  />
</VectorTileSource>
