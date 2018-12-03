let mongoose = require('mongoose');
let Schema = mongoose.Schema;
mongoose.connect("mongodb://localhost/music");

let playlist_scheme = new Schema({
    song: [{id: String}]
});

let Playlist = mongoose.model("playlists", playlist_scheme);

module.exports.Playlist = Playlist;