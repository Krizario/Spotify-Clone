var mongoose = require('mongoose');
var schema = new mongoose.Schema(
    {
        userName: String,
        playlists: Array
    }
);

module.exports = mongoose.model('users', schema);