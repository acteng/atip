<script lang="ts">
  // This component must be placed inside a CheckboxGroup

  export let label: string;
  export let checked: boolean;
  // TODO Using class="govuk-hint govuk-checkboxes__hint" takes too much space
  // in the use cases so far, so use a tooltip instead.
  export let hint: string | null;

  // TODO Using the label as a unique ID, so users don't have to invent an arbitrary string
  let id = label;
</script>

<div class="govuk-checkboxes__item">
  <input type="checkbox" class="govuk-checkboxes__input" {id} bind:checked />
  <label class="govuk-label govuk-checkboxes__label" for={id} title={hint}>
    {label}
  </label>
</div>
