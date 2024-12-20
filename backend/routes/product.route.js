//This file will help us make our website more modular
import express from "express";
import mongoose from "mongoose";
const router = express.Router();

import Product from "../models/product.model.js";

export default router;

router.get("", async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    console.log("error in fetching products:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

//Create a route
router.post("", async (req, res) => {
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

router.put("id", async (req, res) => {
  const { id } = req.params;

  const product = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ success: false, message: "invalid Product Id" });
  }

  try {
    const updateProduct = await Product.findByIdAndUpdate(id, product, {
      new: true,
    });
    res.status(200).json({ success: true, data: updateProduct });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

//The Delete Method is going to be dynamic, is going to get
//the Id of the product we want to delete
//What does the Async word does?

router.delete("id", async (req, res) => {
  const { id } = req.params; //getting the ID
  try {
    await Product.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "Products deleted" });
  } catch (error) {
    //catching if we cant find the id we want to delete
    console.log("Error in deleting product:", error.message);
    res.status(404).json({ success: false, message: "Product not found" });
  }
});
