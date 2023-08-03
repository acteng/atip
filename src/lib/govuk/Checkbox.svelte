<script lang="ts">
  // This component must be placed inside a CheckboxGroup. The default slot is
  // required, and is the label for the checkbox. There's an optional "right"
  // slot placed to the right of the checkbox on the same row, but clicking it
  // doesn't activate the checkbox.

  // A unique ID
  export let id: string;
  export let checked: boolean;
  // TODO Using class="govuk-hint govuk-checkboxes__hint" takes too much space
  // in the use cases so far, so use a tooltip instead.
  export let hint: string | null = null;

  // If the caller is aligning something to the right of the checkbox and
  // label, we have to disable this in the govuk style.
  let haveRightSlot = $$slots.right !== undefined;
  let style = haveRightSlot ? "float: none" : "";
</script>

<div class="govuk-checkboxes__item" {style}>
  <input
    type="checkbox"
    class="govuk-checkboxes__input"
    {id}
    bind:checked
    on:change
  />
  <label class="govuk-label govuk-checkboxes__label" for={id} title={hint}>
    <slot />
  </label>
  <span style="float: right">
    <slot name="right" />
  </span>
</div>
