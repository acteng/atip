<script>
  export let title;
  let hidden = true;

  let button;
  let contents;

  // TODO Very imperative. Also the accordians aren't mutually exclusive.
  // Not going to bother improving, since we're likely switching to a component library for this soon.
  function show() {
    hidden = false;
    button.classList.add("active-accordian");
    contents.style.maxHeight = contents.scrollHeight + "px";
  }

  function hide() {
    hidden = true;
    button.classList.remove("active-accordian");
    contents.style.maxHeight = null;
  }

  function toggle() {
    if (hidden) {
      show();
    } else {
      hide();
    }
  }
</script>

<button type="button" class="accordian" bind:this={button} on:click={toggle}
  >{title}</button
>
<div class="accordian-contents" bind:this={contents}>
  <slot />
</div>

<style>
  .accordian {
    cursor: pointer;
    padding: 18px;
    width: 100%;
    text-align: left;
    transition: 0.4s;
  }

  .active-accordian,
  .accordion:hover {
    background-color: #ccc;
  }

  .accordian-contents {
    padding: 0 10px;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.2s ease-out;
  }
</style>
