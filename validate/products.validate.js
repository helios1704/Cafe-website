const Product = require("../models/product.model");
const Category = require("../models/category.model");
var ObjectId = require("mongodb").ObjectID;

module.exports.store = (req, res, next) => {
  console.log(req);
  let errors = [];
  if (!req.body.name) {
    errors.push("Name is required");
  }
  if (checkInDatabase("name", req.body.name)) {
    errors.push("This name is already");
  }
  if (!req.body.image) {
    errors.push("Image is required");
  }
  if (!req.body.description) {
    errors.push("Description is required");
  }
  if (!req.body.price) {
    errors.push("Price is required");
  }
  if (!req.body.category_id) {
    errors.push("Category is required");
  }
  if (!checkInDatabase("category_id", req.body.category_id)) {
    errors.push("This category is incorrect");
  }
  if (errors.length) {
    // res.render("products/create", {
    //   errors: errors,
    //   value: req.body,
    // });
    res.json(errors);
    return;
  }
  next();
};
let checkInDatabase = async (key, value) => {
  if (key === "category_id") {
    return await Category.findById({ _id: ObjectId(value) });
  }
  return await Product.find({ key: value });
};
