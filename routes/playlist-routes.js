var express = require('express');

var playlistCtrl = require('../controllers/playlistControllers');
var auth = require('../middlewares/auth');
var api = express.Router();

api.get("/allPlaylist",playlistCtrl.getPlaylists);
api.post("/insertPlaylist",playlistCtrl.insertPlaylists);
api.get("/getOne",playlistCtrl.getOnePlaylist);
api.put("/editPlaylist/:id",playlistCtrl.editPlaylists);
api.delete("/deletePlaylist/:id",playlistCtrl.deletePlaylists);
