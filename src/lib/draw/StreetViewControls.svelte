<script lang="ts">
  import { ExternalLink } from "lib/common";
  import { Radio } from "lib/govuk";
  import { userSettings } from "stores";
</script>

<Radio
  legend="Source"
  id="streetViewImagery"
  choices={[
    ["google", "Google Street View"],
    ["bing", "Bing Streetside"],
  ]}
  bind:value={$userSettings.streetViewImagery}
/>

<ul>
  <li>
    <b>Click</b>
    on the map to open a new tab with a 3rd-party imagery provider
  </li>
  <li>
    Press <b>Escape</b>
    to exit this mode
  </li>
  <li>
    Cursor by <ExternalLink
      href="https://icon-icons.com/icon/screenshot-cursor-camera/100181"
    >
      Luc Chaissac
    </ExternalLink>
  </li>
</ul>
