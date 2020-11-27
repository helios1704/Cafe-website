var mongoose = require('mongoose');

var roleSchema = new mongoose.Schema({
    name: String,
});

var Role = mongoose.model('Role', roleSchema, 'roles');

module.exports = Role;