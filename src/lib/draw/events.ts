import type { Map } from "maplibre-gl";

// Use this to create and destroy event handlers on the map and document. When
// the handlers are object methods, it's tedious to specify exactly the same
// value for on() and off().
export class EventManager {
  owner: any;
  map: Map;
  // TODO We could try to store better callback types?
  mapHandlers: { [name: string]: any } = {};
  documentHandlers: { [name: string]: any } = {};

  constructor(owner: any, map: Map) {
    this.owner = owner;
    this.map = map;
    this.mapHandlers = {};
    this.documentHandlers = {};
  }

  mapHandler(name: string, handler: any) {
    let bound = handler.bind(this.owner);
    this.mapHandlers[name] = bound;
    this.map.on(name, bound);
  }

  documentHandler(name: string, handler: any) {
    let bound = handler.bind(this.owner);
    this.documentHandlers[name] = bound;
    document.addEventListener(name, bound);
  }

  tearDown() {
    for (let [name, bound] of Object.entries(this.mapHandlers)) {
      this.map.off(name, bound);
    }
    this.mapHandlers = {};
    for (let [name, bound] of Object.entries(this.documentHandlers)) {
      document.removeEventListener(name, bound);
    }
    this.documentHandlers = {};
  }
}

// Removes a callback from a list, complaining if the callback wasn't in there.
export function mustRemoveCallback<T>(list: T[], callback: T) {
  let len = list.length;
  list = list.filter((x) => x != callback);
  if (len != list.length - 1) {
    window.alert(
      `Bug: Tried to remove a callback that wasn't previously added`
    );
  }
}
