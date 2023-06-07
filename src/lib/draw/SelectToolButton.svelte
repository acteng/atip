<script lang="ts">
  import type { Mode } from "../../types";
  import { currentMode } from "../../stores";

  export let thisMode: Mode;
  export let label: string;
  export let icon: string;
  export let changeMode: (m: Mode) => void;
</script>

<button
  type="button"
  on:click={() => changeMode(thisMode)}
  disabled={$currentMode == thisMode}
  ><img src={icon} alt={label} /> {label}</button
>

<style>
  button {
    background-color: #4caf50;
    border: solid 2px #4caf50;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    width: 100%;
  }

  button:hover:enabled {
    background-color: white;
    color: black;
    transition-duration: 0.4s;
    border: solid 2px black;
  }

  button:disabled {
    opacity: 0.6;
    cursor: auto;
  }

  /* The SVG icons are defined with black. By default, make them white, using
   * https://codepen.io/sosuke/pen/Pjoqqp to calculate the filter. */
  img {
    filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(328deg)
      brightness(100%) contrast(101%);
    vertical-align: middle;
  }

  /* When an SVG button is hovered, transition to black, the icon's built-in color. */
  button:hover:enabled img {
    filter: none;
    transition-duration: 0.4s;
  }
</style>
