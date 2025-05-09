var middleware = require("../middleware.js");
var verifyToken = middleware.verifyToken;
var verfyApiKey = middleware.verifyApiKey;

var user = require("../controller/user.controller.js");
var marker = require("../controller/marker.controller.js");
var review = require("../controller/review.controller.js");

var appRouter = function(app) {
  app.post("/api/register", verfyApiKey, function(req, res) {
    user.create(req, res);
  });
  app.post("/api/login", verfyApiKey, function(req, res) {
    user.login(req, res);
  });
  app.post("/api/markers", verfyApiKey, function(req, res) {
    marker.findAll(req, res);
  });
  app.post("/api/addMarker", verfyApiKey, verifyToken, function(req, res) {
    marker.create(req, res);
  });
  app.post("/api/reviews/:id", verfyApiKey, function(req, res) {
    review.findAllById(req, res);
  });
  app.post("/api/addReview", verfyApiKey, verifyToken, function(req, res) {
    review.create(req, res);
  });
};

module.exports = appRouter;
