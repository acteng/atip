import * as Comlink from "comlink";
import init, { RouteInfo as RouteInfoWasm } from "route_info";
import type { Feature, LineString } from "geojson";
import type { Waypoint } from "./types";

/* This wraps the Rust/WASM API in the route_info crate, exposing it as a web
 * worker. Svelte components shouldn't directly use the WASM API because:
 *
 * - Initially loading a file can be slow, and blocking the main thread is bad UX
 * - We may want to later switch to calling a remote API over the network. Using
 *   a web worker now immediately forces us to have an async API everywhere.
 */
export class RouteInfo {
  inner: RouteInfoWasm | null;

  constructor() {
    this.inner = null;
  }

  async loadFile(url: string) {
    await init();
    console.log(`Grabbing A/B Street map model data from ${url}`);
    let resp = await fetch(url);
    let mapBytes = await resp.arrayBuffer();
    this.inner = new RouteInfoWasm(new Uint8Array(mapBytes));
    console.log(`RouteInfo is ready!`);
  }

  nameForRoute(linestring: Feature<LineString>): string {
    if (!this.inner) {
      throw new Error(
        "Still loading route info, please retry after a few seconds"
      );
    }

    return this.inner.nameForRoute(linestring);
  }

  speedLimitForRoute(waypoints: Waypoint[]): string {
    if (!this.inner) {
      throw new Error(
        "Still loading route info, please retry after a few seconds"
      );
    }

    return this.inner.speedLimitForRoute(waypoints);
  }

  allSpeedLimits(): string {
    if (!this.inner) {
      throw new Error(
        "Still loading route info, please retry after a few seconds"
      );
    }

    return this.inner.allSpeedLimits();
  }

  renderLaneDetails(): string[] {
    if (!this.inner) {
      throw new Error(
        "Still loading route info, please retry after a few seconds"
      );
    }
    console.log("do 1");
    let gj1 = this.inner.renderLanePolygons();
    console.log("do 2");
    let gj2 = this.inner.renderLaneMarkings();
    /*console.log("do 3");
    let gj3 = this.inner.renderIntersectionPolygons();
    console.log("do 4");
    let gj4 = this.inner.renderIntersectionMarkings();
    console.log("return all");
    return [gj1, gj2, gj3, gj4];*/
    return [gj1, gj2, "", ""];

    //return [this.inner.renderLanePolygons(), this.inner.renderLaneMarkings(), this.inner.renderIntersectionPolygons(), this.inner.renderIntersectionMarkings()];
  }
}

Comlink.expose(RouteInfo);
