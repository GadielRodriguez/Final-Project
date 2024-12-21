// Entry point for our API
import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js"; // Corrected path

dotenv.config();

// Create an instance of Express
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Route for products
app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  connectDB();
  console.log("Server started at http://localhost:" + PORT);
});
