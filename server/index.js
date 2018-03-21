var express = require("express");
var bodyParser = require("body-parser");
var _ = require("lodash");
var jwt = require("jsonwebtoken");

var passport = require("passport");
var passportJWT = require("passport-jwt");

var ExtractJwt = passportJWT.ExtractJwt;
var JwtStrategy = passportJWT.Strategy;


var app = express();
app.use(passport.initialize());


app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json())

require('./routes/organizations')(app);
require('./routes/categories')(app);
require('./routes/products')(app);

var users = [
  {
    id: 1,
    name: 'ethan',
    password: '%2yx4'
  },
  {
    id: 2,
    name: 'test',
    password: 'test'
  }
];

var jwtOptions = {}
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");
jwtOptions.secretOrKey = 'tasmanianDevil';

var strategy = new JwtStrategy(jwtOptions, function(jwt_payload, next) {
    console.log('payload received', jwt_payload);
    var user = users[_.findIndex(users, {id: jwt_payload.id })];
    if (user) {
      next(null, user);
    } else {
      next(null, false);
    }
});

passport.use(strategy);

app.get("/", function(req, res) {
  res.json({message: "Express is up and Running"});
});

app.post("/login", function(req, res) {
  if(req.body.name && req.body.password){
    var name = req.body.name;
    var password = req.body.password;
  }
  var user = users[_.findIndex(users, {name: name})];
  if( ! user ){
    res.status(401).json({message:"no such user found"});
  }
  if(user.password === req.body.password) {
    var payload = {id: user.id};
    var token = jwt.sign(payload, jwtOptions.secretOrKey);
    res.json({message: "ok", token: token});
  } else {
    res.status(401).json({message:"passwords did not match"});
  }
});

app.get("/secret", passport.authenticate('jwt', { session: false }), function(req, res){
  res.json("Success! You can not see this without a token");
});

app.get('/users', function(req, res, next) {
  queries.getAllUsers()
  .then(function(users) {
    res.status(200).json(users);
  })
  .catch(function(error) {
    next(error);
  });
});



app.listen(3000, function() {
  console.log("Express running");
});
