var mongoose = require("mongoose");

var ProductSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String,
  price: String,
  category_id: Object,
});

var Product = mongoose.model("Product", ProductSchema, "products");

module.exports = Product;
