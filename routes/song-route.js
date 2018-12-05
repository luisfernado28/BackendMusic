var express = require('express');

var songCtrl = require('../controllers/songController');

var api = express.Router();

api.post("/insertSong", songCtrl.insertSong);
api.get("/getAllSongs", songCtrl.getAllSongs);
api.get("/getOneSong", songCtrl.getOneSong);
api.delete("/deleteSong", songCtrl.deleteSong);
api.put("/modifySong", songCtrl.modifySong);

module.exports = api;

