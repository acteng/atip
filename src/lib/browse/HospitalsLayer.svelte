<script lang="ts">
  import OptionalLayer from "./OptionalLayer.svelte";
</script>

<OptionalLayer
  name="hospitals"
  singularNoun="hospital"
  pluralNoun="Hospitals"
  color="blue"
  hint="Hospital data from OpenStreetMap. Doesn't include outpatient clinics or individual doctor's offices."
/>
