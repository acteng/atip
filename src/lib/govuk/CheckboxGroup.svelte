<script lang="ts">
  export let small = false;

  let cssClass = small ? "govuk-checkboxes--small" : "govuk-checkboxes";
</script>

<fieldset class="govuk-fieldset">
  <div class={cssClass} data-module="govuk-checkboxes">
    <slot />
  </div>
</fieldset>
