import init, { JsRouteSnapper } from "./pkg/route_snapper.js";

await init();

export class RouteSnapper {
  constructor(app, mapBytes) {
    const circleRadiusPixels = 10;

    this.app = app;
    this.map = app.map;
    console.time("Deserialize and setup JsRouteSnapper");
    this.inner = new JsRouteSnapper(mapBytes);
    console.timeEnd("Deserialize and setup JsRouteSnapper");
    console.log("JsRouteSnapper ready, waiting for idle event");
    this.active = false;

    // on(load) is a bad trigger, because downloading the RouteSnapper input can race. Just wait for the map to be usable.
    this.map.once("idle", () => {
      console.log("JsRouteSnapper now usable");
      this.map.addSource("route-snapper", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: [],
        },
      });
      this.map.addLayer({
        id: "route-points",
        type: "circle",
        source: "route-snapper",
        paint: {
          "circle-radius": circleRadiusPixels,
          "circle-color": [
            "match",
            ["get", "type"],
            "important",
            "red",
            "unimportant",
            "blue",
            // other
            "black",
          ],
        },
        filter: ["in", "$type", "Point"],
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
        if (!this.active) {
          return;
        }
        const nearbyPoint = { x: e.point.x - circleRadiusPixels, y: e.point.y };
        const circleRadiusMeters = this.map
          .unproject(e.point)
          .distanceTo(this.map.unproject(nearbyPoint));
        if (
          this.inner.onMouseMove(e.lngLat.lng, e.lngLat.lat, circleRadiusMeters)
        ) {
          this.#redraw();
        }
      });

      this.map.on("click", () => {
        if (!this.active) {
          return;
        }
        this.inner.onClick();
        this.#redraw();
      });

      this.map.on("dragstart", (e) => {
        if (!this.active) {
          return;
        }
        if (this.inner.onDragStart()) {
          this.map.dragPan.disable();
        }
      });

      this.map.on("mouseup", (e) => {
        if (!this.active) {
          return;
        }
        if (this.inner.onMouseUp()) {
          this.map.dragPan.enable();
        }
      });

      this.#inactiveControl();
    });
  }

  #inactiveControl() {
    this.active = false;

    this.inner.clearState();
    this.#redraw();

    const div = document.getElementById("snap-tool");
    div.innerHTML = "";
    var btn = document.createElement("button");
    btn.type = "button";
    btn.innerText = "Route tool";
    btn.onclick = () => {
      this.#activeControl();
    };
    div.appendChild(btn);
  }

  #activeControl() {
    this.active = true;

    const div = document.getElementById("snap-tool");
    div.innerHTML = "";
    var btn = document.createElement("button");
    btn.type = "button";
    btn.innerText = "Finish snapping";
    btn.onclick = () => {
      // Update the source-of-truth in drawControls
      const rawJSON = this.inner.toFinalFeature();
      if (rawJSON) {
        const json = JSON.parse(rawJSON);
        const ids = this.app.drawControls.add(json);
        json.id = ids[0];
        // drawControls assigns an ID. When we open the form, pass in the feature with that ID
        this.app.openForm(json);
        this.app.updateSidebar();
        this.app.saveToLocalStorage();

        // Act like we've selected the line-string we just drew
        this.app.drawControls.changeMode("direct_select", {
          featureId: json.id,
        });
      }

      this.#inactiveControl();
    };
    div.appendChild(btn);
  }

  #redraw() {
    this.map
      .getSource("route-snapper")
      .setData(JSON.parse(this.inner.renderGeojson()));
  }
}

export async function fetchWithProgress(url, progressId) {
  const response = await fetch(url);
  const reader = response.body.getReader();

  const contentLength = response.headers.get("Content-Length");
  const progressBar = document.getElementById(progressId);

  let receivedLength = 0;
  let chunks = [];
  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      break;
    }

    chunks.push(value);
    receivedLength += value.length;

    const percent = (100.0 * receivedLength) / contentLength;
    progressBar.style = `background: linear-gradient(to right, red ${percent}%, transparent 0);`;
  }

  let allChunks = new Uint8Array(receivedLength);
  let position = 0;
  for (let chunk of chunks) {
    allChunks.set(chunk, position);
    position += chunk.length;
  }

  return allChunks;
}
