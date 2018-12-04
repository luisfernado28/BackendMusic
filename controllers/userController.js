var User = require('../models/userModel').User;

var service = require('../services/authService');

function getUsers(req, res) {
    User.find({}, (err, user) => {
        if (err) return res.status(500).send({message: err});
        res.status(200).send(user);
    })
}

function insertUser(req, res) {
    let user = new User({username: req.body.username, playlists: []});
    user.save().then((innerUser) => {
        console.log(JSON.stringify(innerUser));
        res.send(innerUser);
    }, (err) => {
        if (err) {
            console.log(JSON.stringify(err));
            res.send(err);
        }
    });
}

function getOne(req,res){
    User.findOne({"_id": req.query.id}, (err,user)=>{
        if(err) return res.status(500).send({message: err});
        if(!user) return res.status(500).send({message: "user not found"});
        res.status(200).send(user);
    })
}

function editUsername(req, res) {
    User.updateOne({"_id": req.query.id },{ $set:{ username: req.body.username} }, (err,user)=>{
        if(err) return res.status(500).send({message: err});
        if(!user) return res.status(500).send({message: "user not found"});
        res.status(200).send({message: "User edited correctly"})
    })
}

function deleteUser(req, res) {
    User.deleteOne({"_id" : req.query.id}, (err,user)=>{
        if(err) return res.status(500).send({mensaje: err});
        res.status(200).send({message :"user deleted"})
    })
}

module.exports = {
    getUsers,
    insertUser,
    getOne,
    deleteUser,
    editUsername
};