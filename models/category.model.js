var mongoose = require('mongoose');

var CategorySchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String,

});

var Category = mongoose.model('Category', userSchema, 'categories');

module.exports = Category;