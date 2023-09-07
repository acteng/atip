// TODO Hook up TS, fmt, etc

// API reference: https://googleapis.dev/nodejs/storage/latest/
import { Storage } from "@google-cloud/storage";
import express from "express";

// TODO Magic auth here. Locally, it finds my gcloud credentials. On App
// Engine, it seems to use the service account, which already has access to the
// bucket, without changing IAM...
let storage = new Storage();
let bucket = "atip-test-1";

let app = express();

// Serve the ATIP frontend, which is just statically built HTML, CSS, JS, WASM
// files that's bundled in the App Engine deployment directly.
app.use(express.static("dist"));

// Proxy requests to /data to a private GCS bucket
app.get("/data/*", async (req, resp) => {
  let path = req.params[0];
  console.log(`Proxying request for ${path} to GCS bucket ${bucket}`);
  let file = storage.bucket(bucket).file(path);

  // TODO How much does this roundtrip add? Can we catch the error somehow?
  let [exists] = await file.exists();
  if (!exists) {
    resp.status(404).send("File not found");
    return;
  }
  let [metadata] = await file.getMetadata();

  // TODO Look into cache response headers
  // TODO Handle everything needed for pmtiles... HTTP range requests, at minimum

  try {
    if (path.endsWith(".geojson")) {
      resp.type("application/geo+json");
    } else if (path.endsWith(".pmtiles")) {
      // TODO What should we do?
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
    // TODO Off by 1?
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

// GCS middleware references:
// https://www.npmjs.com/package/s3-proxy
// https://www.npmjs.com/package/express-http-proxy
// https://stackoverflow.com/questions/32976838/express-caching-image-stream-from-google-cloud-storage
// https://stackoverflow.com/questions/40849631/serve-static-files-from-google-cloud-storage-through-express-middleware
// https://caddyserver.com/docs/json/storage/gcs/
// https://gist.github.com/manuelroth/8c03fe64bb2926e7f96e688c6bb1353c
// https://github.com/search?q=res.status%28206%29&type=code&ref=advsearch
