var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String,
});

var Product = mongoose.model('Product', userSchema, 'products');

module.exports = Product;