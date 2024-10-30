<script lang="ts">
  import { TextInput } from "govuk-svelte";
  import type { Schemes } from "types";
  import type { Writable } from "svelte/store";

  export let gjSchemes: Writable<Schemes>;
  export let scheme_reference: string;
</script>

<TextInput
  label="Scheme name"
  required
  bind:value={$gjSchemes.schemes[scheme_reference].scheme_name}
/>
