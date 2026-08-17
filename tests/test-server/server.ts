import path from "path";
import express, {
  type Express,
  type NextFunction,
  type Request,
  type Response,
} from "express";

let app: Express = express();

app.use(async (req: Request, resp: Response, next: NextFunction) => {
  resp.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.use(
  "/route-snappers",
  express.static(path.join(import.meta.dirname, "route-snappers")),
);

app.get("/", async (req: Request, resp: Response) => {
  resp.send("hello");
});

let port: string = process.env.PORT || "8001";

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
