// TODO Port to TS

// API reference: https://googleapis.dev/nodejs/storage/latest/
import { Storage } from "@google-cloud/storage";
import express from "express";

// This automatically finds gcloud credentials when running locally or the
// service account on GAE 
let storage = new Storage();
let bucket = "atip-test-2";

let app = express();

// Serve the ATIP frontend, which is just statically built HTML, CSS, JS, WASM
// files bundled in the App Engine deployment directly.
app.use(express.static("dist"));

// Proxy requests to /data to a private GCS bucket
app.get("/data/*", async (req, resp) => {
  let path = req.params[0];
  console.log(`Proxying request for ${path} to GCS bucket ${bucket}`);
  let file = storage.bucket(bucket).file(path);

  // TODO How much do these roundtrips add?
  let [exists] = await file.exists();
  if (!exists) {
    resp.status(404).send("File not found");
    return;
  }
  let [metadata] = await file.getMetadata();

  // TODO Look into cache response headers

  try {
    if (path.endsWith(".geojson")) {
      resp.type("application/geo+json");
    } else if (path.endsWith(".pmtiles")) {
      resp.type("binary/octet-stream");
    }

    // Return the whole file?
    if (!req.headers.range) {
      let stream = storage.bucket(bucket).file(path).createReadStream();
      stream.pipe(resp);
      return;
    }

    // Handle an HTTP range request.
    let parts = req.headers.range.replace("bytes=", "").split("-");
    let start = parseInt(parts[0]);
    // TODO Optional? Use file metadata length then
    let end = parseInt(parts[1]);

    let chunkSize = end - start + 1;

    resp.status(206);
    resp.setHeader("Content-Range", `bytes ${start}-${end}/${metadata.size}`);
    resp.setHeader("Accept-Ranges", "bytes");
    resp.setHeader("Content-Length", end - start + 1);

    file.createReadStream({ start, end }).pipe(resp);
  } catch (err) {
    console.log(`Something broke: ${err}`);
    resp.status(500).send(err);
  }
});

let port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
