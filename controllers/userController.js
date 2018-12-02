var User = require('../models/userModel').User;

var service = require('../services/authService')

function login(req,res){
    User.findOne({usuario: req.body.user}, (err,user)=>{
        if(err) return res.status(500).send({mensaje:err});
        if(!user) return res.status(500).send({mensaje:'Usuario no encontrado'});
        service.createToken
        res.status(200).send({token:service.createToken(user)});
    })
}
function obtenerUsuarios(req,res){
    User.find({}, (err,user)=>{
        if(err) return res.status(500).send({mensaje: err});
        res.status(200).send(user);
    })
}
function insert(req,res){
    var user = new User({
        nombre: req.body.nombre,
        usuario:req.body.usuario,
        pass: req.body.pass
    })
    user.save().then((us)=>{
        console.log(JSON.stringify(us))
        res.send(us)
    },(err)=>{
        console.log(JSON.stringify(err))
        res.send(err)
    })
}
function deleteUsuario(req,res){
    User.deleteOne({nombre: req.params.nombre}, (err,user)=>{
        if(err) return res.status(500).send({mensaje: err});
        res.status(200).send({mensaje:"ok"});
    })
}
function updateUsuario(req,res){

    User.findOne({nombre: req.params.nombre},(err,user)=>{
        user.nombre = req.body.nombre;
        user.usuario = req.body.usuario;
        user.pass = req.body.pass;
        user.save().then((us)=>{
            console.log(JSON.stringify(us))
            res.send(us)
        },(err)=>{
            console.log(JSON.stringify(err))
            res.send(err)
        });
    })

}
module.exports = {
    login,
    insert,
    obtenerUsuarios,
    deleteUsuario,
    updateUsuario
}