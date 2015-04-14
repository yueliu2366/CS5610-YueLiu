var express = require('express');
var app = express();

app.use(express.static(__dirname + '/static'));
app.use(express.static(__dirname + '/app'));
var bodyParser = require('body-parser');
var multer = require('multer');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(multer()); // for parsing multipart/form-data 
var movies = [
   { title: "Avatar", rating: "PG-13", year: 2009, plot: "Come cool blue guys re-enact Dancing with Wolfs" },
   { title: "Star Wars VII", rating: "PG-13", year: 2015, plot: "Plot Unkown" },
   { title: "Star Trek", rating: "PG-13", year: 2013, plot: "Citizen what is your name" }
];

app.get("/api/movies", function (req, res) {
    res.json(movies);
});

app.delete("/api/movies/:id", function (req, res) {
    var idx = req.params.id;
    movies.splice(idx, 1);
    res.json(movies);
});

app.post("/api/movies", function (req, res) {
    movies.push(req.body);
    res.json(movies);
});

var ip = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port = process.env.OPENSHIFT_NODEJS_PORT || 3000;
app.listen(port, ip);
