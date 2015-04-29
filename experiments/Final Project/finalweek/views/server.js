var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var multer = require('multer');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var cookieParser = require('cookie-parser');
var session = require('express-session');
var mongoose = require('mongoose');
var connectionString = process.env.OPENSHIFT_MONGODB_DB_URL || 'mongodb://localhost/cs5610-final'
mongoose.connect(connectionString);
// user collection
var UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    firstname: String,
    lastname: String,
    email: String,
    following: [String],
    follower: [String],
    favorite:[{imgUrl:String, title:String, author:String, description:String, bookId:String}]
},{ collection: 'user' });
var UserModel = mongoose.model('UserModel', UserSchema);

// comment collection
var CommentSchema = new mongoose.Schema({
    bookId: String,
    content: String,
    date: Date,
    username: String
},{ collection: 'comment' });
var CommentModel = mongoose.model('CommentModel', CommentSchema);

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(multer()); // for parsing multipart/form-data
app.use(session({ secret: 'this is the secret' }));
app.use(cookieParser())
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(__dirname + '/finalweek'));

var ip = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port = process.env.OPENSHIFT_NODEJS_PORT || 3000;
app.listen(port, ip);


// experiment1
passport.use(new LocalStrategy(
function (username, password, done) {
    UserModel.findOne({ username: username, password: password }, function (err, user) {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        return done(null, user);
    })
}));
passport.serializeUser(function (user, done) {
    done(null, user);
});
passport.deserializeUser(function (user, done) {
    done(null, user);
});

app.post("/login", passport.authenticate('local'), function (req, res) {
    var user = req.user;
    console.log(user);
    res.json(user);
});

//experiment2
var movies = [
   { title: "Avatar", rating: "PG-13", year: 2009, plot: "Come cool blue guys re-enact Dancing with Wolfs" },
   { title: "Star Wars VII", rating: "PG-13", year: 2015, plot: "Plot Unkown" },
   { title: "Star Trek", rating: "PG-13", year: 2013, plot: "Citizen what is your name" }
];

var auth = function (req, res, next) {
    if (!req.isAuthenticated())
        res.send(401);
    else
        next();
};

app.get("/api/movies", auth, function (req, res) {
    res.json(movies);
});

//experiment3
app.post('/register', function (req, res) {
    var newUser = req.body;
    UserModel.findOne({ username: newUser.username }, function (err, user) {
        if (err) { return next(err); }
        if (user) {
            res.json(null);
            return;
        }
        var newUser = new UserModel(req.body);
        newUser.save(function (err, user) {
            req.login(user, function (err) {
                if (err) { return next(err); }
                res.json(user);
            });
        });
    });
});

//experiment4

app.get('/loggedin', function (req, res) {
    res.send(req.isAuthenticated() ? req.user : '0');
});

app.get("/rest/user", auth, function (req, res) {
    UserModel.find(function (err, users) {
        res.json(users);
    });
});

//experiment5
app.post('/logout', function (req, res) {
    req.logOut();
    res.send(200);
});


// submit comment
app.post("/api/comment", function (req, res) {
    var comment1 = new CommentModel(req.body);
    comment1.save(function (err, doc) {
    	CommentModel.find({bookId: comment1.bookId},function (err, data) {
            res.json(data);
        });
    });   
});

//get all comment of this book
app.get("/api/comments/:id", function (req, res) {
	CommentModel.find({bookId: req.params.id}, function (err, data) {
        res.json(data);
    });
});

//update user profile
app.put("/api/user/:username", function (req, res) {  
	UserModel.update({ username: req.params.username }, { $set: req.body }, function (err, doc) {
		UserModel.find({ username: req.params.username },function (err, data) {
            res.json(data);
        });
    });
});

//get the user for username
app.get("/api/user/:username", function (req, res) {
	UserModel.findOne({username: req.params.username },function (err, data) {
        res.json(data);
    });
});
