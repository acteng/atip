<script lang="ts">
  import { HelpButton } from "lib/common";

  let version = "unknown";
  if (window.location.hostname == "localhost") {
    version = "Local development";
  } else if (window.location.hostname == "acteng.github.io") {
    if (window.location.pathname == "/atip/browse.html") {
      version = "Current development (public)";
    } else {
      let parts = window.location.pathname.split("/");
      if (parts.length == 4 && parts[1] == "atip") {
        version = `Development branch: ${parts[2]}`;
      }
    }
  } else if (window.location.hostname.endsWith(".appspot.com")) {
    // TODO Include a git commit, build timestamp, or similar
    version = "Test (on GCP)";
  }
</script>

<p>
  App version: {version}
  <HelpButton>
    {#if version == "Test (on GCP)"}
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
