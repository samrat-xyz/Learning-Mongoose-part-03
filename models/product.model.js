const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
    minlength: [5, ["Name must be at least 5 characters long"]],
    maxlength: [100, ["Name cannot exceed 100 characters"]],
  },
  description: String,
  category: {
    type: String,
    enum: ["t-shirt,pents,hoodies", "shoes", "shirt", "jacket"],
  },
  price: {
    type: Number,
    min: 0,
    max: 10000000,
    required: true,
  },
  stockQuantity: {
    type: Number,
    required: true,
    min: 0,
    default: 0,
  },
  isAvailable: {
    type: Boolean,
    default: true,
  }
});

const ProductModel = mongoose.model("Product", productSchema);

module.exports = ProductModel;
