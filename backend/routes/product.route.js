//This file will help us make our website more modular
import express from "express";
const router = express.Router();
export default router;
import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/product.controller.js";

router.get("/", getProducts);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

//The Delete Method is going to be dynamic, is going to get
//the Id of the product we want to delete
//What does the Async word does?
