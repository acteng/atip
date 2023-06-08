export const MapEvents = [
  "click",
  "dblclick",
  "mousemove",
  "mousedown",
  "mouseup",
  "mouseout",
  "dragstart",
];

export type MapEvent = (typeof MapEvents)[number];

export const DocumentEvents = ["keyPress", "keyUp", "keyDown"];

export type DocumentEvent = (typeof DocumentEvents)[number];

export interface EventHandler {
  mapHandlers: {
    click: Function;
    dblclick: Function;
    mousemove: Function;
    mousedown: Function;
    mouseup: Function;
    mouseout: Function;
    dragstart: Function;
  };
  documentHandlers: {
    keyPress: Function;
    keyUp: Function;
    keyDown: Function;
  };
}
