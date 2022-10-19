import init, { JsRouteSnapper } from "./pkg/route_snapper.js";

await init();

export class RouteSnapper {
  constructor(map) {
    this.map = map;
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
          this.map
            .getSource("route-snapper")
            .setData(JSON.parse(this.inner.renderGeojson()));
        }
      });

      this.map.on("click", () => {
        this.inner.onClick();
        this.map
          .getSource("route-snapper")
          .setData(JSON.parse(this.inner.renderGeojson()));
      });
    });
  }
}
