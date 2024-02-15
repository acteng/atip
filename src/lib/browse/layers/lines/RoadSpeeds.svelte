<script lang="ts">
  import {
    ExternalLink,
    HelpButton,
    Popup,
    privateResourceBaseUrl,
  } from "lib/common";
  import { Checkbox, Radio } from "lib/govuk";
  import { layerId, makeColorRamp } from "lib/maplibre";
  import {
    hoverStateFilter,
    LineLayer,
    VectorTileSource,
  } from "svelte-maplibre";
  import { colors, denseLineWidth } from "../../colors";
  import SequentialLegend from "../SequentialLegend.svelte";

  let name = "road_speeds";
  let colorScale = colors.sequential_low_to_high;
  let limits = [0, 20, 30, 40, 50, 90];

  let showSpeed = "indicative_mph";

  let show = false;

  let times: Record<string, string> = {
    mf4to7: "Monday-Friday 4-7am",
    mf7to9: "Monday-Friday 7-9am",
    mf9to12: "Monday-Friday 9am-12pm",
    mf12to14: "Monday-Friday 12-2pm",
    mf14to16: "Monday-Friday 2-4pm",
    mf16to19: "Monday-Friday 4-7pm",
    mf19to22: "Monday-Friday 7-10pm",
    mf22to4: "Monday-Friday 10pm-4am",
    ss4to7: "Saturday-Sunday 4-7am",
    ss7to10: "Saturday-Sunday 7-10am",
    ss10to14: "Saturday-Sunday 10am-2pm",
    ss14to19: "Saturday-Sunday 2-7pm",
    ss19to22: "Saturday-Sunday 7-10pm",
    ss22to4: "Saturday-Sunday 10pm-4am",
  };
</script>

<Checkbox bind:checked={show}>
  OS Speeds
  <span slot="right">
    <HelpButton>
      <p>
        The average speed data is collected over a six-month period by <ExternalLink
          href="https://basemap.co.uk/speed-data"
        >
          Basemap
        </ExternalLink> from 135,000 vehicle telematic systems and provided through
        Ordnance Survey. The averages are grouped by different time periods for weekdays
        and weekends. This map shows the highest average.
      </p>
      <p>Data valid as of 1 September, 2023</p>
      <p>
        License: Contains OS data &copy; Crown copyright and database right
        2023. Made available under the <ExternalLink
          href="https://www.ordnancesurvey.co.uk/documents/licensing/psga-member-licence.pdf"
        >
          Public Sector Geospatial Agreement
        </ExternalLink>.
      </p>
    </HelpButton>
  </span>
</Checkbox>
{#if show}
  <SequentialLegend {colorScale} {limits} />
  <Radio
    legend="Show speed types"
    choices={[
      ["indicative_mph", "Posted speed limit"],
      ["highest_mph", "Highest measured average speed"],
    ]}
    bind:value={showSpeed}
    inlineSmall
  />
{/if}

<VectorTileSource
  url={`pmtiles://${privateResourceBaseUrl()}/v1/${name}.pmtiles`}
>
  <LineLayer
    {...layerId(name)}
    sourceLayer={name}
    manageHoverState
    eventsIfTopMost
    paint={{
      "line-color": makeColorRamp(["get", showSpeed], limits, colorScale),
      "line-width": denseLineWidth,
      "line-opacity": hoverStateFilter(1.0, 0.5),
    }}
    layout={{
      visibility: show ? "visible" : "none",
    }}
  >
    <Popup let:props>
      <p>Posted speed limit: {props.indicative_mph} mph</p>
      <p>
        Highest average speed: {props.highest_mph} mph (during {times[
          props.highest_description
        ]})
      </p>
    </Popup>
  </LineLayer>
</VectorTileSource>
