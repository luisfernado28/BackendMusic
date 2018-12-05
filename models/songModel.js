let mongoose = require('mongoose');
let Schema = mongoose.Schema;
mongoose.connect("mongodb://localhost/music");

let song_scheme = new Schema({
    title: String,
    album: String,
    artist: String,
    duration: Number,
    year: Number,
    genre: String,
    link: String
});

let Song = mongoose.model("songs", song_scheme);

module.exports.Song= Song;