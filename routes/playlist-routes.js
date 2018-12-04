var express = require('express');

var playlistCtrl = require('../controllers/playlistControllers');
var auth = require('../middlewares/auth');
var api = express.Router();

api.get("/allPlaylist",playlistCtrl.getPlaylists);
api.post("/insertPlaylist",playlistCtrl.insertPlaylists);
api.get("/getOne",playlistCtrl.getOnePlaylist);
api.put("/editPlaylist",playlistCtrl.editPlaylists);
api.delete("/deletePlaylist",playlistCtrl.deletePlaylists);
api.put("/addSong",playlistCtrl.addSongPlaylist);
api.put("deleteSong",playlistCtrl.deleteSongPlaylist);