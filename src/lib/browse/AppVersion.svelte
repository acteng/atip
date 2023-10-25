<script lang="ts">
  import { appVersion, HelpButton } from "lib/common";

  let version = appVersion();
</script>

<p>
  App version: {version}
  <HelpButton>
    {#if version == "Private (development)"}
      <p>
        The scheme data shown is fake. Load the real data from a file below.
        We're working to put real scheme data here.
      </p>
    {/if}
    <p>Note the ATF scheme data has not been validated.</p>
  </HelpButton>
</p>
