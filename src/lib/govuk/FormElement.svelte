<script lang="ts">
  // The label to show
  export let label: string;
  // A unique (per page) ID of the form element being labelled. Something in
  // this component's slot must have this ID.
  export let id: string;
</script>

<div class="govuk-form-group">
  <label class="govuk-label" for={id}>{label}</label>
  <slot />
</div>
