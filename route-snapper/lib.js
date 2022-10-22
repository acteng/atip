import init, { JsRouteSnapper } from "./pkg/route_snapper.js";

await init();

export class RouteSnapper {
  constructor(map, drawControls) {
    this.map = map;
    this.drawControls = drawControls;
    this.inner = new JsRouteSnapper();

    this.map.on("load", () => {
      this.map.addSource("route-snapper", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: [],
        },
      });
      this.map.addLayer({
        id: "route-polygons",
        type: "fill",
        source: "route-snapper",
        paint: {
          "fill-color": [
            "match",
            ["get", "type"],
            "confirmed route intersection",
            "blue",
            "hovering intersection",
            "red",
            "preview intersection",
            "green",
            // other
            "black",
          ],
        },
        filter: ["in", "$type", "Polygon"],
      });
      this.map.addLayer({
        id: "route-lines",
        type: "line",
        source: "route-snapper",
        layout: {
          "line-cap": "round",
          "line-join": "round",
        },
        paint: {
          "line-color": "#000",
          "line-width": 2.5,
        },
        filter: ["in", "$type", "LineString"],
      });

      this.map.on("mousemove", (e) => {
        if (this.inner.onMouseMove(e.lngLat.lng, e.lngLat.lat)) {
          this.#syncToDrawControls();
        }
      });

      this.map.on("click", () => {
        this.inner.onClick();
        this.#syncToDrawControls();
      });

      this.map.on("dragstart", (e) => {
        if (this.inner.onDragStart()) {
          this.map.dragPan.disable();
        }
      });

      this.map.on("mouseup", (e) => {
        if (this.inner.onMouseUp()) {
          this.map.dragPan.enable();
        }
      });
    });
  }

  #syncToDrawControls() {
    // Render the tool
    this.map
      .getSource("route-snapper")
      .setData(JSON.parse(this.inner.renderGeojson()));
    // Update the source-of-truth in drawControls
    const rawJSON = this.inner.toFinalFeature();
    if (rawJSON) {
      const json = JSON.parse(rawJSON);
      // This won't have any properties, so if we've filled out the form,
      // preserve those properties and just overwrite the geometry
      const existing = this.drawControls.get(json.id);
      if (existing) {
        json.properties = existing.properties;
      }
      this.drawControls.add(json);
    }
  }
}
