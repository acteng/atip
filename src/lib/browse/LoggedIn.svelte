<script lang="ts">
  import Cookies from "js-cookie";
  import { ErrorMessage } from "lib/govuk";

  let email = Cookies.get("email");
</script>

{#if email}
  <p>Logged in as {email}</p>
{:else}
  <ErrorMessage
    errorMessage="You shouldn't be able to view this app without being logged in!"
  />
{/if}
