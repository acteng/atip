// TODO Port to TS

// API reference: https://googleapis.dev/nodejs/storage/latest/
import { Storage } from "@google-cloud/storage";
import express from "express";
import { OAuth2Client } from "google-auth-library";

// This automatically finds gcloud credentials when running locally or the
// service account on GAE
let storage = new Storage();
// TODO Upfront check the bucket is accessible and has some expected files, so
// we could failfail for a bad deployment
let bucket = process.env.GCS_BUCKET;
let oauthClient = new OAuth2Client();

let expectedAudience = `/projects/${process.env.PROJECT_NUMBER}/apps/${process.env.GOOGLE_CLOUD_PROJECT}`;

let app = express();

if (process.env.USE_IAP !== "false") {
  app.use(checkIap);
}

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
    } else if (path.endsWith(".geojson.gz")) {
      resp.type("application/geo+json");
      resp.append("Content-Encoding", "gzip");
    } else if (path.endsWith(".bin.gz")) {
      resp.type("application/octet-stream");
      resp.append("Content-Encoding", "gzip");
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

// See https://cloud.google.com/iap/docs/signed-headers-howto
async function checkIap(req, resp, next) {
  let iapJwt = req.header("x-goog-iap-jwt-assertion");
  if (!iapJwt) {
    resp.status(401).send("Missing x-goog-iap-jwt-assertion header");
    return;
  }

  try {
    // TODO Can we cache this between requests?
    let iapPublicKeys = await oauthClient.getIapPublicKeys();
    let ticket = await oauthClient.verifySignedJwtWithCertsAsync(
      iapJwt,
      iapPublicKeys.pubkeys,
      expectedAudience,
      ["https://cloud.google.com/iap"]
    );
    // Plumb back the email to display in Svelte using session cookies
    // NOTE! This shouldn't be considered secure; the user can modify it. Only
    // use it for client-side display. Always use this IAP token to determine
    // who the user is for permissions.
    resp.cookie("email", ticket.payload.email);

    next();
  } catch (err) {
    console.log(`IAP auth broke: ${err}`);
    resp.status(401).send(err);
  }
}

let port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
