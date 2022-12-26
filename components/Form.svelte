<script>
  export let feature;

  function capitalize(x) {
    return x.charAt(0).toUpperCase() + x.slice(1);
  }
</script>

<br />

<label>
  Name<br />
  <input type="text" size="30" value={feature.properties.name} />
</label>

<br />

<div class="radio">
  {#each ["area", "route", "crossing", "other"] as value}
    <label>
      <input
        type="radio"
        bind:group={feature.properties.intervention_type}
        name="type"
        {value}
      />
      {capitalize(value)}
    </label>
  {/each}
</div>

<br />

<label>
  Description<br />
  <textarea rows="3" cols="40">{feature.properties.Description}</textarea>
</label>

<br />

<div>
  <button type="button">Delete</button>
  <button type="button" style="float: right;">Save</button>
</div>

<br />

<style>
  .radio {
    display: flex;
    justify-content: space-between;
  }

  textarea {
    resize: none;
  }
</style>
