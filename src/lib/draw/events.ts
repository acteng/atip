import type { Map } from "maplibre-gl";
import type { EventHandler, Mode } from "../../types";
import { currentMode, map } from "../../stores";
import { DefaultEventHandler } from "../../default_event_handler";
import { isMap } from "util/types";
import { get } from "svelte/store";

// Use this to create and destroy event handlers on the map and document. When
// the handlers are object methods, it's tedious to specify exactly the same
// value for on() and off().
export class EventManager {
  map: Map;
  // TODO We could try to store better callback types?
  mapHandlers: { [name: string]: any } = {};
  documentHandlers: { [name: string]: any } = {};

  eventHandlers: { [mode in Mode]: EventHandler } = {
    "edit-attribute": new DefaultEventHandler(),
    "edit-geometry": new DefaultEventHandler(),
    route: new DefaultEventHandler(),
    point: new DefaultEventHandler(),
    "free-polygon": new DefaultEventHandler(),
    "snap-polygon": new DefaultEventHandler(),
    "split-route": new DefaultEventHandler(),
    "street-view": new DefaultEventHandler()
  };

  constructor() {
    this.mapHandlers = {};
    this.documentHandlers = {};
  }

  genericEventHandler = (eventName: string, isMapEventHandler: boolean) => (event) => {
    const mode: Mode = get(currentMode);
    const handlers = isMapEventHandler ? this.eventHandlers[mode].mapHandlers : this.eventHandlers[mode].documentHandlers;
    handlers[eventName](event);
  } 

  updateSpecificModeHandler(mode: Mode, isMapEventHandler: boolean, eventName: string, callback: Function, functionOwner: any) {
    this.addGenericEventHandler(eventName, isMapEventHandler);
    const eventHandler = this.eventHandlers[mode];
    const handlerDictionary = isMapEventHandler ? eventHandler.mapHandlers : eventHandler.documentHandlers;
    handlerDictionary[eventName] = callback.bind(functionOwner);

  }

  addGenericEventHandler(eventName: string, isMapEventHandler: boolean) {
    const handlersToAddTo = isMapEventHandler ? this.mapHandlers : this.documentHandlers;
    if (handlersToAddTo[eventName] === null || handlersToAddTo[eventName] === undefined) {
      const handler = this.genericEventHandler(eventName, isMapEventHandler).bind(this);
      handlersToAddTo[eventName] = handler;
      this.registerGenericHandler(eventName, isMapEventHandler, handler);
    }
  }

  registerGenericHandler(eventName: string, isMapEventHandler: boolean, handler: any) {
    if (isMapEventHandler) {
      const mapInstance = get(map);
      mapInstance.on(eventName, handler);
    } else {
      document.addEventListener(eventName, handler);
    }
  }

  tearDown() {
    const mapInstance = get(map);
    for (let [name, handler] of Object.entries(this.mapHandlers)) {
      mapInstance.off(name, handler);
    }
    this.mapHandlers = {};
    for (let [name, handler] of Object.entries(this.documentHandlers)) {
      document.removeEventListener(name, handler);
    }
    this.documentHandlers = {};
  }
}

const singletonEventManager = new EventManager()

export default singletonEventManager;