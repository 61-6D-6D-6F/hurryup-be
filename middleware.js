var config = require("./config");
var apiKey = config.apiKey;

exports.verifyToken = function(req, res, next) {
  var bearerHeader = req.headers["authorization"];

  if (typeof bearerHeader !== "undefined") {
    var bearer = bearerHeader.split(" ");
    var bearerToken = bearer[1];
    req.token = bearerToken;
    next();
  } else {
    res.sendStatus(403);
  }
};

exports.verifyApiKey = function(req, res, next) {
  if (
    typeof req.headers.apikey !== "undefined" &&
    apiKey === req.headers.apikey
  ) {
    next();
  } else {
    res.sendStatus(403);
  }
};
