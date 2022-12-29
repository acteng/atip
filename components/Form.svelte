<script>
  export let id;
  export let name;
  export let intervention_type;
  export let description;

  function capitalize(x) {
    return x.charAt(0).toUpperCase() + x.slice(1);
  }
</script>

<br />

<label>
  Name<br />
  <input type="text" size="30" bind:value={name} />
</label>

<br />

<div class="radio">
  {#each ["area", "route", "crossing", "other"] as value}
    <label>
      <input
        type="radio"
        bind:group={intervention_type}
        name="type_{id}"
        {value}
      />
      {capitalize(value)}
    </label>
  {/each}
</div>

<br />

<label>
  Description<br />
  <textarea rows="3" cols="40" bind:value={description} />
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
