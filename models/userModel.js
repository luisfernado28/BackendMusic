var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect("mongodb://localhost/music");

var user_scheme = new Schema({
    username: String,
    playlists: [{id: String}],
    discordid: String
});

var User = mongoose.model("users", user_scheme);

module.exports.User = User;