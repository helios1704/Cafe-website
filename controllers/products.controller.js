const Product = require("../models/product.model");
const Category = require("../models/category.model");
var ObjectId = require("mongodb").ObjectID;

module.exports.index = async (req, res) => {
  // const categories = await Category.find();
  const category_id = ObjectId(
    req.query.category ||
      (
        await Category.findOne({
          name: "Coffee",
        })
      )._id
  );
  const products = await Product.find({
    $or: [
      {
        category_id: category_id,
      },
    ],
  });
  console.log(products);
  res.json(products);
  // res.render("products/index");
};
