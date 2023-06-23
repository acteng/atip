import { MapMouseEvent } from "maplibre-gl";

export const MapEvents = [
  "click",
  "dblclick",
  "mousemove",
  "mousedown",
  "mouseup",
  "mouseout",
  "dragstart",
];

export const DocumentEvents = ["keypress", "keyup", "keydown"];

export class EventHandler {
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
      keypress: (e: KeyboardEvent) => {},
      keyup: (e: KeyboardEvent) => {},
      keydown: (e: KeyboardEvent) => {},
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
    keypress: (e: KeyboardEvent) => void;
    keyup: (e: KeyboardEvent) => void;
    keydown: (e: KeyboardEvent) => void;
  };
}
