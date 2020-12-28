const Product = require("../../../models/product.model");
const Category = require("../../../models/category.model");
module.exports.index = async (req, res) => {
  // const products = await Product.find();
  res.render("admins/products/index", {});
};
//data-tables
module.exports.data_table = async (req, res) => {
  const products = await Product.find();
  res.json({ data: products });
};

module.exports.create = async (req, res) => {
  const categories = await Category.find();
  console.log(categories);
  res.render("admins/products/create", {
   // categories: categories,
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
