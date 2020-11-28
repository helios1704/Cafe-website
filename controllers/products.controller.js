const Product = require("../models/product.model");
const Category = require("../models/category.model");
var ObjectId = require("mongodb").ObjectID;

module.exports.index = async (req, res) => {
  // const categories = await Category.find();
  const category_id =
    req.query.category ||
    (
      await Category.findOne({
        name: "Coffee",
      })
    )._id;
  const products = await Product.find({
    category_id: ObjectId(category_id),
  });
  console.log(products);
  res.render("products/index");
};

module.exports.create = async (req, res) => {
  const categories = Category.find();
  res.render("products/create", {
    categories: categories,
  });
};

module.exports.store = (req, res) => {
  console.log(req);
};

module.exports.show = async (req, res) => {
  const id = req.params.id;
  const product = await Product.findById(id);
  res.render("products/update", {
    product: product,
  });
};

module.exports.update = async (req, res) => {
  const id = req.params.id;
  const updateProduct = req.body;
  await Product.update({ _id: ObjectId(id) }, { $set: updateProduct });
  res.redirect("/products");
};

module.exports.delete = async (req, res) => {
  const id = req.params.id;
  await Product.findByIdAndRemove(id);
  res.redirect("/products");
};
