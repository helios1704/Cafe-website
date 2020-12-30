const Product = require("../models/product.model");
const Category = require("../models/category.model");
var ObjectId = require("mongodb").ObjectID;
var multer = require('multer');

var upload =multer({dest:'./public/products'});


module.exports.index = async (req, res) => {
  var userName = req.cookies.userName;
  var categories = await Category.find();
  var productArray = [];
  var i = 0;
  categories.forEach(async (category) => {
    var name = category.name;
    var object = {};
    object[name]  = await Product.find({category_id : category._id})
    productArray.push(object);
    i++
    if(i==3) {
      await res.render('index' ,{
        products: productArray,
        name: userName
      });
    }

  });
  

};
