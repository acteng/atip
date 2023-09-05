<script lang="ts">
  import { StreetViewController } from "lib/common";
  import type { Mode } from "types";
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
