import mongoose from "mongoose";

/*
Creating a product Schema 

*Each Product is gonna have a name, price and Img




*/

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      require: true,
    },
    Image: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true, //CreatedAt, UpdateAt
  }
);

//Create Product Model

const Product = mongoose.model('Product', productSchema);


export default Product; 