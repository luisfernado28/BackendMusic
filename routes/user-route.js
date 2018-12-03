var express = require('express');

var userCtrl = require('../controllers/userController');
var auth = require('../middlewares/auth');
var api = express.Router();

api.get("/all", userCtrl.getUsers);
api.post('/ins', userCtrl.insertUser);

module.exports = api;