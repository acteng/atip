import path from "path";
import express from "express";

let app = express();

app.use(async (req, resp, next) => {
  resp.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.use(
  "/route-snappers",
  express.static(path.join(import.meta.dirname, "route-snappers")),
);

app.get("/", async (req, resp, next) => {
  resp.send("hello");
});

let port = process.env.PORT || 8001;

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
