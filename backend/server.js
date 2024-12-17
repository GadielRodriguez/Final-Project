//Entry point for our API
//Path Password
//MWS4aarKgu37oySX

import express from "express";
import dotenv from "dotenv";
import { connectDB } from "../config/db.js";
import Product from "../models/product.model.js";

dotenv.config();

//Creates an instance of express that is assing to
//to the app application
const app = express();

app.use(express.json()); //Allows to accept json data in the req.body

//Create a route
app.post("api/products", async (req, res) => {
  const product = req.body; //user will send this data

  if (!product.name || !product.price || !product.image) {
    return res
      .status(400)
      .json({ success: false, message: "Please Provide all fields" });
  }

  const newProduct = new Product(product);

  try {
    await newProduct.save();
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    console.error("Error in saving Produc:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

//

app.listen(5000, () => {
  connectDB();
  console.log("Server started at http://localhost:5000 ");
});
