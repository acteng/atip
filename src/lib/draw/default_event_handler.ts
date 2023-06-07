import { MapMouseEvent } from "maplibre-gl";
import type { EventHandler } from "../../types";

export class DefaultEventHandler {
  constructor() {
    this.mapHandlers = {
      click: (e: MapMouseEvent) => {},
      dblclick: (e: MapMouseEvent) => {},
      mousemove: (e: MapMouseEvent) => {},
      mousedown: (e: MapMouseEvent) => {},
      mouseup: (e: MapMouseEvent) => {},
      mouseout: (e: MapMouseEvent) => {},
      dragstart: (e: MapMouseEvent) => {},
    };
    this.documentHandlers = {
      keyPress: (e: KeyboardEvent) => {},
      keyUp: (e: KeyboardEvent) => {},
      keyDown: (e: KeyboardEvent) => {},
    };
  }

  mapHandlers: {
    click: (e: MapMouseEvent) => void;
    dblclick: (e: MapMouseEvent) => void;
    mousemove: (e: MapMouseEvent) => void;
    mousedown: (e: MapMouseEvent) => void;
    mouseup: (e: MapMouseEvent) => void;
    mouseout: (e: MapMouseEvent) => void;
    dragstart: (e: MapMouseEvent) => void;
  };

  documentHandlers: {
    keyPress: (e: KeyboardEvent) => void;
    keyUp: (e: KeyboardEvent) => void;
    keyDown: (e: KeyboardEvent) => void;
  };
}
