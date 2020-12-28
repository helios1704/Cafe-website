const Product = require("../../../models/product.model");
const Category = require("../../../models/category.model");
var ObjectId = require("mongodb").ObjectID;

module.exports.store = (req, res, next) => {
  console.log(req.body);
  let errors = [];
  if (!req.body.name) {
    errors.push("Name is required");
  }
  console.log(checkInDatabase("name", req.body.name));
  // if (checkInDatabase("name", req.body.name)) {
  //   errors.push("This name is already");
  // }
  if (!req.file) {
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
    console.log(errors);
    res.render("admins/products/create", {
      errors: errors,
      data: req.body,
    });
    return;
  }
  next();
};
let checkInDatabase = async (key, value) => {
  if (key === "category_id") {
    return await Category.findById({ _id: ObjectId(value) });
  }
  const products = await Product.find({ key: value });
  return products;
};
