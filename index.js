var express = require('express');
var bodyParser = require('body-parser');
var config = require('./config');
var userRoute = require('./routes/user-route');
var playlistRoute = require('./routes/playlist-routes');
let songRoute = require('./routes/song-route');

//var cors = require('cors');
var app = express();

const PORT = config.port || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
//app.use(cors());
app.get("/",(req,res)=>{
    res.send({mensaje:"Hola mundo"})
});
// localhost:3000/usuario/insert

app.use("/user", userRoute);
app.use("/playlist", playlistRoute);
app.use("/song", songRoute);

app.listen(PORT,()=>{
    console.log("Port: "+ PORT)
});