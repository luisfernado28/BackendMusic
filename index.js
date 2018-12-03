var express = require('express');
var bodyParser = require('body-parser');
var config = require('./config');
var userRoute = require('./routes/user-route');
//var cors = require('cors');
var app = express();

const PORT = config.port || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//app.use(cors());
app.get("/", (req, res) => {
    res.send({mensaje: "Hello world"})
});
// localhost:3000/usuario/insert
app.use("/user", userRoute);

app.listen(PORT, () => {
    console.log("Listening on port: " + PORT)
});