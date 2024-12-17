<script lang="ts">
  import { ErrorMessage } from "govuk-svelte";
  import Cookies from "js-cookie";
  import { appVersion } from "lib/common";

  let email = Cookies.get("email");
</script>

{#if appVersion() == "Private (development)"}
  {#if email}
    <p>Logged in as {email}</p>
  {:else}
    <ErrorMessage
      errorMessage="You shouldn't be able to view this app without being logged in!"
    />
  {/if}
{/if}
