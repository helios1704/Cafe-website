var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var HistorySchema = new mongoose.Schema({
    user_id: String,
    bill_id: String,
    // name: String,
});

var History = mongoose.model('History', HistorySchema, 'histories');

module.exports = History;