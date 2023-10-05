<script lang="ts">
  export let errorMessage: string | null;
</script>

{#if errorMessage}
  <div class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span>
    {errorMessage}
  </div>
{/if}
