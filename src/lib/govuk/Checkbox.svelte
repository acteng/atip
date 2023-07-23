<script lang="ts">
  // This component must be placed inside a CheckboxGroup

  // A unique ID
  export let id: string;
  export let checked: boolean;
  // TODO Using class="govuk-hint govuk-checkboxes__hint" takes too much space
  // in the use cases so far, so use a tooltip instead.
  export let hint: string | null;
</script>

<div class="govuk-checkboxes__item">
  <input type="checkbox" class="govuk-checkboxes__input" {id} bind:checked />
  <label class="govuk-label govuk-checkboxes__label" for={id} title={hint}>
    <slot />
  </label>
</div>
