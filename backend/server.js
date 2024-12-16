//Entry point for our API
//Path Password
//MWS4aarKgu37oySX

import express from "express";
import dotenv from "dotenv";
import { connectDB } from "../config/db.js";

dotenv.config();

//Creates an instance of express that is assing to
//to the app application
const app = express();

//Create a route
app.post("/products", (req, res) => {});

app.listen(5000, () => {
  connectDB();
  console.log("Server started at http://localhost:5000 ");
});
