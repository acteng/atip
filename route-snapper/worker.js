importScripts("./pkg/route_snapper.js");

console.log("Hi from worker");

// Weird workaround to make WASM work in web workers. See
// https://rustwasm.github.io/wasm-bindgen/examples/wasm-in-web-worker.html
const { JsRouteSnapper } = wasm_bindgen;
async function setup() {
console.log("Hi from setup");
  await wasm_bindgen("./pkg/route_snapper_bg.wasm");
console.log("setup done");
}
//setup();

// Web worker magic
self.onmessage = async (e) => {
	console.log("got msg");
	await setup();
	console.log("now doing stuff");
  console.time("Deserialize and setup JsRouteSnapper");
  const inner = new JsRouteSnapper(e.data);
	console.log("cool done, now pass it back");
  console.timeEnd("Deserialize and setup JsRouteSnapper");
  self.postMessage(inner);
};
