var mongoose = require("mongoose");

var CategorySchema = new mongoose.Schema({
  name: String,
  description: String,
});

var Category = mongoose.model("Category", CategorySchema, "categories");

module.exports = Category;
