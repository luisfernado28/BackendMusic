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

function editUser(req, res) {
    //TODO edit users
}

function deleteUser(req, res) {
    //TODO delete users
}

module.exports = {
    getUsers,
    insertUser
};