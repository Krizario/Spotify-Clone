var mongoose = require('mongoose');

var schema = new mongoose.Schema(
    {
        artiste: String,
        albumes: Array
    }
);

module.exports = mongoose.model('artistes', schema);