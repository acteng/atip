<script lang="ts">
  // A label for the entire group of radio buttons
  export let legend: string;
  // A unique (per page) ID of the radio group
  export let id: string;
  // A list of [value, label] representing the choices
  export let choices: [string, string][];
  // Lay out radio buttons horizontally and decrease font size
  export let inlineSmall = false;

  // The current value
  export let value: string;
</script>

<div class="govuk-form-group">
  <fieldset class="govuk-fieldset">
    <legend class="govuk-fieldset__legend">{legend}</legend>
    <div
      class="govuk-radios"
      class:govuk-radios--inline={inlineSmall}
      class:govuk-radios--small={inlineSmall}
      data-module="govuk-radios"
    >
      {#each choices as [thisValue, thisLabel]}
        <div class="govuk-radios__item">
          <input
            class="govuk-radios__input"
            id={id + thisValue}
            type="radio"
            bind:group={value}
            value={thisValue}
            on:change
          />
          <label class="govuk-label govuk-radios__label" for={id + thisValue}>
            {thisLabel}
          </label>
        </div>
      {/each}
    </div>
  </fieldset>
</div>
