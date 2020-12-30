const Product = require("../../../models/product.model");
const Category = require("../../../models/category.model");
const { ObjectId } = require('mongodb');


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
    categories: categories,
  });
};

module.exports.store = async (req, res) => {
  req.body.image = req.file.path.split("\\").slice(1).join("/");
  req.body.category_id = ObjectId(req.body.category_id);
  console.log(req.body);
  const products = {
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category_id: req.body.category_id,
    image: req.body.image
  }
  await Product.create(products);
  // db.get("products").push(req.body).write();
  res.redirect("products");
};

module.exports.show = async (req, res) => {
  const id = req.params.id;
  const product = await Product.findById(id);

  res.render("admins/products/update", {
    product: product,
  });
};

module.exports.update = async (req, res) => {
  // console.log(req.body)
  const id = req.params.id;
  console.log(id);
  const updateProduct = req.body;
  console.log(updateProduct);
  await Product.update({ _id: ObjectId(id) }, { $set: updateProduct });
  res.redirect("/admin/products");
};

module.exports.delete = async (req, res) => {
  const id = req.params.id;
  await Product.findByIdAndRemove(id);
  res.redirect("/products");
};
