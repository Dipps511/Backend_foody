const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required field"],
    trim: true,
  },
  category: {
    type: String,
    required: [true, "Category is required field"],
    trim: true,
  },
  brand: {
    type: String,
    required: [true, "Brand is required field"],
    trim: true,
  },
  image: {
    type: String,
    required: [true, "Image URL is required field"],
    trim: true,
  },
  price: {
    type: mongoose.Decimal128,
    required: [true, "Price is required field"],
    trim: true,
  },
  rating: {
    type: Number,
    default: 4,
  },
});

module.exports = mongoose.model("Products", ProductSchema);
