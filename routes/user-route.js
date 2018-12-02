var express= require('express')

var userCtrl = require('../controllers/userController')
var auth = require('../middlewares/auth')
var api = express.Router();

api.post("/insert", userCtrl.insert);
api.post("/login", userCtrl.login);
api.get("/todos", userCtrl.obtenerUsuarios);
api.delete("/delete/:nombre", userCtrl.deleteUsuario);
api.put("/modificar/:nombre", userCtrl.updateUsuario);
module.exports = api;