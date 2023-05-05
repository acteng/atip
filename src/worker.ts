import * as Comlink from "comlink";
import init, { Helper } from "abst_helper";
import type { Feature, LineString } from "geojson";

export class Worker {
  helper: Helper | null;

  constructor() {
    this.helper = null;
  }

  async loadFile(url: string) {
    await init();
    console.log(`Grabbing abstreet map data from ${url}`);
    let resp = await fetch(url);
    let mapBytes = await resp.arrayBuffer();
    this.helper = new Helper(new Uint8Array(mapBytes));
    console.log(`Helper is ready!`);
  }

  nameForRoute(linestring: Feature<LineString>): string {
    if (!this.helper) {
      throw new Error("Need to loadFile before using Worker");
    }

    return this.helper.nameForRoute(linestring);
  }
}

Comlink.expose(Worker);
