var express = require("express");
var bodyParser = require("body-parser");
var config = require("./config.js");
var routes = require("./routes/routes.js");
var app = express();

var PORT = config.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configuring the database
var dbConfig = require("./database.config.js");
var mongoose = require("mongoose");

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose
  .connect(dbConfig.url, {
    useNewUrlParser: true
  })
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch(err => {
    console.log("Could not connect to the database. Exiting now...", err);
    process.exit();
  });

routes(app);

app.listen(PORT, () => {
  console.log("server is running on Port: " + PORT);
});
