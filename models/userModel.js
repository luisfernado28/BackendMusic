var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect("mongodb://localhost/users");

var user_scheme = new Schema({
    nombre:String,
    usuario:String,
    pass:String
})
var User = mongoose.model("usuario", user_scheme);
module.exports.User = User;