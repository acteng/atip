<script lang="ts">
  import type { Mode } from "../../types";
  import StreetViewController from "../common/StreetViewController.svelte";
  import type { EventHandler } from "./event_handler";

  export let eventHandler: EventHandler;

  export let changeMode: (m: Mode) => void;
  let streetViewController: StreetViewController;

  export function start() {
    streetViewController.enableStreetView();
  }
  export function stop() {
    streetViewController.disableStreetView();
  }

  eventHandler.documentHandlers.keydown = (e: KeyboardEvent) => {
    if (e.key == "Escape") {
      changeMode("edit-attribute");
      e.preventDefault();
    }
  };
</script>

<StreetViewController
  bind:this={streetViewController}
  displayEnableButton={false}
  isInactive
/>
