<script lang="ts">
  export let label: string;
  export let open = false;
</script>

<details {open} class="govuk-details" data-module="govuk-details">
  <summary class="govuk-details__summary">
    <span class="govuk-details__summary-text">{label}</span>
  </summary>
  <div class="govuk-details__text">
    <slot />
  </div>
</details>
