var express= require('express');

var userCtrl = require('../controllers/userController');
var auth = require('../middlewares/auth');
var api = express.Router();

api.get("/all", userCtrl.getUsers);


module.exports = api;