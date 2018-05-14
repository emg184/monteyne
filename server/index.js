var express = require("express");
var bodyParser = require("body-parser");
var cors = require('cors')

var app = express();

app.use(cors())
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json())

require('./routes/organizations')(app);
require('./routes/categories')(app);
require('./routes/products')(app);
require('./routes/users')(app);
require('./routes/mailer')(app);

app.listen(5000, function() {
  console.log("Express running");
});
