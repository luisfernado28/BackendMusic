var express = require('express');

var userCtrl = require('../controllers/userController');
var auth = require('../middlewares/auth');
var api = express.Router();

api.get("/all", userCtrl.getUsers);
api.get("/getone", userCtrl.getOne);

api.post('/ins', userCtrl.insertUser);
api.post('/addplaylist', userCtrl.addPlaylist);


api.delete("/del", userCtrl.deleteUser);
api.delete("/delplaylist", userCtrl.removePlaylist);

api.put("/edit", userCtrl.editUsername);


module.exports = api;

