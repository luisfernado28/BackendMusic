var Song= require('../models/songModel').Song;

function getOneSong(req, res){
    Song.findOne({_id: req.query.id},(err, song)=>{
        if (err) return res.status(500).send({message: err});
        res.status(200).send(song);
    });
}

function getAllSongs(req, res){
    Song.find({},(err, songs)=>{
        if (err) return res.status(500).send({message: err});
        res.status(200).send(songs);
    });
}

function insertSong(req, res){
    let song = new Song({
        title: req.body.title,
        album: req.body.album,
        artist: req.body.artist,
        duration: req.body.duration,
        year: req.body.year,
        genre: req.body.genre,
        link: req.body.link
    });
    song.save().then((sng)=> {
        console.log(JSON.stringify(sng));
        res.status(200).send(sng);
    },(err) => {
        console.log(JSON.stringify(err));
    });
}

function deleteSong(req, res){
    Song.deleteOne({_id:req.query.id}, (err, song)=>{
        if(err) res.status(500).send(err);
        else res.status(200).send(song);
    });
}

function modifySong(req, res){
    Song.updateOne({_id:req.query.id},
        {$set: {
            title: req.body.title,
            album: req.body.album,
            artist: req.body.artist,
            duration: req.body.duration,
            year: req.body.year,
            genre: req.body.genre,
            link: req.body.link
        }}, (err, song)=>{
        if(err) res.status(500).send(err);
        else res.status(200).send(song);
    });
}

module.exports = {
    insertSong,
    getAllSongs,
    getOneSong,
    deleteSong,
    modifySong
};