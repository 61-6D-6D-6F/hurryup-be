var Review = require("../models/review.model");
var Marker = require("../models/marker.model");
var jwt = require("jsonwebtoken");
var config = require("../config");

var secret = process.env.secret || config.secret;

exports.create = function(req, res) {
  jwt.verify(req.token, secret, function(err, user) {
    if (err) {
      res.sendStatus(403);
    }
    if (typeof req.body.locationId === "undefined") {
      return res.status(400).send({
        message: "R-C-01 Id is required."
      });
    } else if (typeof req.body.rating === "undefined") {
      return res.status(400).send({
        message: "R-C-02 Rating is required."
      });
    } else if (typeof req.body.reviewText === "undefined") {
      return res.status(400).send({
        message: "R-C-03 Review is required."
      });
    } else if (req.body.locationId === "") {
      return res.status(400).send({
        message: "R-C-04 Id can't be blank."
      });
    } else if (req.body.rating === "") {
      return res.status(400).send({
        message: "R-C-05 Rating can't be blank."
      });
    } else if (parseInt(req.body.rating) < 1 || 5 < parseInt(req.body.rating)) {
      return res.status(400).send({
        message: "R-C-06 Rating has a number to be between 1-5."
      });
    } else if (req.body.reviewText === "") {
      return res.status(400).send({
        message: "R-C-07 Review can't be blank."
      });
    } else if (
      req.body.reviewText.length < 0 ||
      256 < req.body.reviewText.length
    ) {
      return res.status(400).send({
        message: "R-C-08 Review has to be between 1-256 characters."
      });
    }

    var review = new Review({
      locationId: req.body.locationId,
      createdBy: user.name,
      createdAt: new Date()
        .toISOString()
        .replace(/T/, " ")
        .replace(/\..+/, ""),
      text: req.body.reviewText,
      rating: parseInt(req.body.rating)
    });

    review
      .save()
      .then(function(review) {
        Marker.updateOne(
          { ID: req.body.locationId },
          { $push: { rating: parseInt(req.body.rating) } }
        )
          .then(function(data) {
            res.send(review);
          })
          .catch(function(err) {
            res.status(500).send({
              message:
                err.message ||
                "Some rror occurred while updating marker rating."
            });
          });
      })
      .catch(function(err) {
        res.status(500).send({
          message: err.message || "Some error occurred while creating review."
        });
      });
  });
};

exports.findAllById = function(req, res) {
  var id = req.params.id;

  Review.find({ locationId: id }, function(err, array) {
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while querying reviews."
      });
    }
    if (array.length === 0) {
      res.status(204).send([]);
    } else {
      res.send(array);
    }
  });
};
