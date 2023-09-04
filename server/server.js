import express from "express";

let app = express();

app.use(express.static("dist"))

let port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
