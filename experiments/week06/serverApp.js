var express = require('express')
var app = express()

app.use(express.static(__dirname + '/static'));

var courses = [
    { id: "cs5610", name: "Web Development" },
    { id: "cs6240", name: "Parallel Programming in mapreduce" },

];

app.get("/api/courses", function (req, res) {
    res.json(courses);
});

app.get("/api/courses/:id", function (req, res) {
    var idx = req.params.id;
    res.json(courses[idx]);

});


app.listen(3000)