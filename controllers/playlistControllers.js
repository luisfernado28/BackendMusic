var Playlist = require('../models/playlistModel').Playlist;

function getPlaylists(req,res) {
    Playlist.find({},(err,playlists)=>{
        if (err) return res.status(500).send({messaje:err});
        res.status(200).send(playlists);
    })
}

function getOnePlaylist(req,res) {
    Playlist.findOne({"_id":req.query._id},(err,playlists)=>{
        if(err) return res.status(500).send({messaje:err});
        if(!playlists) return res.status(500).send({messaje: "Playlist not found"});
        res.status(200).send(playlists);
    });
}

function getByName(req,res) {
    Playlist.findOne({name: req.query.name},(err,playlists)=>{
        if(err) return res.status(500).send({messaje:err});
        if(!playlists) return res.status(500).send({messaje: "Playlist not found"});
        res.status(200).send(playlists);
    });
}

function insertPlaylists(req,res) {
    let playlist = new Playlist({"id":req.body.id, name: req.body.name});
    playlist.save().then((innerPlaylist) =>{
        console.log(JSON.stringify(innerPlaylist));
        res.send(innerPlaylist);
    }, (err)=>{
        if (err){
            console.log(JSON.stringify(err));
            res.send(err);
        }
    })
}


function editPlaylists(req, res) {
    Playlist.updateOne({_id: req.query._id}, {$set: {name: req.body.name}}, (err,playlists)=>{
        if(err) return res.status(500).send({messaje:err});
        if(!playlists) return res.status(500).send({messaje:"playlist not found"});
        res.status(200).send({messaje:"Playlist edited correctly"})
    });
}

function deletePlaylists(req,res) {
    Playlist.deleteOne({_id:req.query._id},(err,playlists)=>{
        if(err) return res.status(500).send({messaje:err});
        res.status(200).send({messaje:"Playlist deleted"})
    })
}

function addSongPlaylist(req,res) {
    Playlist.updateOne({"_id": req.query._id}, {$push: {"songs": req.body.id}}, (err,playlists)=>{
        if(err) return res.status(500).send({messaje:err});
        if(!playlists) return res.status(500).send({messaje:"song not found"});
        res.status(200).send(playlists)
    });
}

function deleteSongPlaylist(req,res) {
    Playlist.updateOne({_id: req.query._id}, {$pull: {songs: req.body.id}}, (err,playlists)=>{
        if(err) return res.status(500).send({messaje:err});
        if(!playlists) return res.status(500).send({messaje:"song not found"});
        res.status(200).send({messaje:"song delete correctly"});
    });
}

module.exports ={
  getPlaylists,
  getOnePlaylist,
  editPlaylists,
  insertPlaylists,
  deletePlaylists,
  addSongPlaylist,
  deleteSongPlaylist,
    getByName
};
