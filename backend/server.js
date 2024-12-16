//Entry point for our API

import express from "express";

//Creates an instance of express that is assing to
const app = express();

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.listen(5000, () => {
  console.log("Server started at http://localhost:5000");
});
