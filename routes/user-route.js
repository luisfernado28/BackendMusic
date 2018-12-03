var express = require('express');

var userCtrl = require('../controllers/userController');
var auth = require('../middlewares/auth');
var api = express.Router();

api.get("/all", userCtrl.getUsers);
api.post('/ins', userCtrl.insertUser);
api.get("/getone", userCtrl.getOne);
api.delete("/del", userCtrl.deleteUser);

module.exports = api;

