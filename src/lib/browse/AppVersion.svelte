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
    <p>
      Please contact <a href="mailto:dcarlino@turing.ac.uk">Dustin</a>
      and
      <a href="mailto:Peter.York@activetravelengland.gov.uk">Pete</a>
      about any problems, ideas, or feedback for this site.
    </p>
  </HelpButton>
</p>
