var User = require("../models/user.model");
var jwt = require("jsonwebtoken");
var config = require("../config");
var mongoose = require("mongoose");

var secret = config.secret;

exports.create = function(req, res) {
  if (typeof req.body.name === "undefined") {
    return res.status(400).send({
      message: "U-C-01 Name is required."
    });
  } else if (typeof req.body.email === "undefined") {
    return res.status(400).send({
      message: "U-C-02 Email is required."
    });
  } else if (typeof req.body.password === "undefined") {
    return res.status(400).send({
      message: "U-C-03 Password is required."
    });
  } else if (typeof req.body.password_confirmation === "undefined") {
    return res.status(400).send({
      message: "U-C-04 Confirmation password is required."
    });
  } else if (req.body.name === "") {
    return res.status(400).send({
      message: "U-C-05 Name can't be blank."
    });
  } else if (!req.body.name.match(/^[áéúőóüöíÁÉÚŐÓÜÖÍa-zA-Z0-9]+$/)) {
    return res.status(400).send({
      message: "U-C-06 Name can only contain letters and numbers."
    });
  } else if (req.body.name.length < 3 || 20 < req.body.name.length) {
    return res.status(400).send({
      message: "U-C-07 Name has to be between 3-20 characters."
    });
  } else if (req.body.email === "") {
    return res.status(400).send({
      message: "U-C-08 Email can't be blank."
    });
  } else if (!req.body.email.match(/\S+@\S+\.\S+/)) {
    return res.status(400).send({
      message: "U-C-09 Email address is not valid."
    });
  } else if (req.body.password === "") {
    return res.status(400).send({
      message: "U-C-10 Password can't be blank."
    });
  } else if (req.body.password.lengths < 6 || 24 < req.body.password.lengths) {
    return res.status(400).send({
      message: "U-C-11 Password has to be between 6-24 characters."
    });
  } else if (req.body.password != req.body.password_confirmation) {
    return res.status(400).send({
      message: "U-C-12 Password and confirmation password have to match."
    });
  }

  var id = new mongoose.Types.ObjectId();
  var name = req.body.name;
  var token = jwt.sign({ id, name }, secret);

  var user = new User({
    createdAt: new Date()
      .toISOString()
      .replace(/T/, " ")
      .replace(/\..+/, ""),
    name: name,
    email: req.body.email,
    password: req.body.password,
    token: token
  });

  user
    .save()
    .then(function(user) {
      res.send(user);
    })
    .catch(function(err) {
      var message = err.errors.name
        ? err.errors.name.message
        : err.errors.email
        ? err.errors.email.message
        : err.message;
      res.status(500).send({
        message: message || "Some error occurred while creating user."
      });
    });
};

exports.login = function(req, res) {
  if (typeof req.body.email === "undefined") {
    return res.status(400).send({
      message: "U-C-13 Email is required."
    });
  } else if (typeof req.body.password === "undefined") {
    return res.status(400).send({
      message: "U-C-14 Password is required."
    });
  } else if (req.body.email === "") {
    return res.status(400).send({
      message: "U-C-15 Email can't be blank."
    });
  } else if (req.body.password === "") {
    return res.status(400).send({
      message: "U-C-16 Password can't be blank."
    });
  }
  var email = req.body.email;
  User.findOne({ email: email }, function(err, user) {
    if (err) {
      res.status(500).send({ message: err.message });
    }
    if (!user) {
      res
        .status(400)
        .send({ message: "U-C-17 User does not exist in the database." });
    } else {
      user.comparePassword(req.body.password, function(err, isMatch) {
        if (err) {
          res.status(500).send({ message: err.message });
        } else if (isMatch) {
          res.send({ jwt: user.token });
        } else {
          res
            .status(400)
            .send({ message: "U-C-18 Email and password do not match." });
        }
      });
    }
  });
};
