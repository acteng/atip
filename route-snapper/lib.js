import init, { JsRouteSnapper } from "./pkg/route_snapper.js";

await init();

export class RouteSnapper {
  constructor(map) {
    this.map = map;
    this.inner = new JsRouteSnapper();

    this.map.on("load", () => {
      this.map.addSource("route-snapper", {
        type: "geojson",
        data: {},
      });
      this.map.addLayer({
        id: "route-polygons",
        type: "fill",
        source: "route-snapper",
        paint: {
          "fill-color": "rgb(255, 0, 0)",
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
        this.inner.onMouseMove(e.lngLat.lng, e.lngLat.lat);
      });

      this.map.on("click", () => {
        this.inner.onClick();
        this.map
          .getSource("route-snapper")
          .setData(JSON.parse(this.inner.renderGeojson()));

        document.getElementById("textbox").value = this.inner.renderGeojson();
      });
    });
  }
}
