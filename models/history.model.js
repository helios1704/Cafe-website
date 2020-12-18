var mongoose = require('mongoose');

var HistorySchema = new mongoose.Schema({
    user_id: String,
    bill_id: String,
    // name: String,
});

var History = mongoose.model('History', userSchema, 'histories');

module.exports = History;