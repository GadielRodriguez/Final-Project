//Entry point for our API
//Path Password
//MWS4aarKgu37oySX

import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

//We are importing from the router folder to be use here
import productRoutes from "./routes/product.route.js";

dotenv.config();

//Creates an instance of express that is assing to
//to the app application
const app = express();

app.use(express.json()); //Allows to accept json data in the req.body

//This makes our code more cleaner as it preffix
//the use of api/products
app.use("/api/products", productRoutes);

app.listen(5000, () => {
  connectDB();
  console.log("Server started at http://localhost:5000 ");
});
