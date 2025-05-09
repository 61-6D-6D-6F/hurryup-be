var Marker = require("../models/marker.model");
var Review = require("../models/review.model");
var jwt = require("jsonwebtoken");
var config = require("../config");

var secret = process.env.secret || config.secret;

exports.create = function(req, res) {
  jwt.verify(req.token, secret, function(err, user) {
    if (err) {
      res.sendStatus(403);
    }
    if (typeof req.body.name === "undefined") {
      return res.status(400).send({
        message: "M-C-01 Name is required."
      });
    } else if (typeof req.body.latitude === "undefined") {
      return res.status(400).send({
        message: "M-C-02 Latitude is required."
      });
    } else if (typeof req.body.longitude === "undefined") {
      return res.status(400).send({
        message: "M-C-03 Longitude is required."
      });
    } else if (typeof req.body.rating === "undefined") {
      return res.status(400).send({
        message: "M-C-04 Rating is required."
      });
    } else if (typeof req.body.sundayIsOpen === "undefined") {
      return res.status(400).send({
        message: "M-C-05 SundayIsOpen is required."
      });
    } else if (typeof req.body.sundayIsOpen === "undefined") {
      return res.status(400).send({
        message: "M-C-06 SundayIsOpen is required."
      });
    } else if (typeof req.body.sundayOpen === "undefined") {
      return res.status(400).send({
        message: "M-C-07 SundayOpen is required."
      });
    } else if (typeof req.body.sundayClose === "undefined") {
      return res.status(400).send({
        message: "M-C-08 SundayClose is required."
      });
    } else if (typeof req.body.mondayIsOpen === "undefined") {
      return res.status(400).send({
        message: "M-C-09 MondayIsOpen is required."
      });
    } else if (typeof req.body.mondayOpen === "undefined") {
      return res.status(400).send({
        message: "M-C-10 MondayOpen is required."
      });
    } else if (typeof req.body.mondayClose === "undefined") {
      return res.status(400).send({
        message: "M-C-11 MondayClose is required."
      });
    } else if (typeof req.body.tuesdayIsOpen === "undefined") {
      return res.status(400).send({
        message: "M-C-12 TuesdayIsOpen is required."
      });
    } else if (typeof req.body.tuesdayOpen === "undefined") {
      return res.status(400).send({
        message: "M-C-13 TuesdayOpen is required."
      });
    } else if (typeof req.body.tuesdayClose === "undefined") {
      return res.status(400).send({
        message: "M-C-14 TuesdayClose is required."
      });
    } else if (typeof req.body.wednesdayIsOpen === "undefined") {
      return res.status(400).send({
        message: "M-C-15 WednesdayIsOpen is required."
      });
    } else if (typeof req.body.wednesdayOpen === "undefined") {
      return res.status(400).send({
        message: "M-C-16 WednesdayOpen is required."
      });
    } else if (typeof req.body.wednesdayClose === "undefined") {
      return res.status(400).send({
        message: "M-C-17 WednesdayClose is required."
      });
    } else if (typeof req.body.thursdayIsOpen === "undefined") {
      return res.status(400).send({
        message: "M-C-18 ThursdayIsOpen is required."
      });
    } else if (typeof req.body.thursdayOpen === "undefined") {
      return res.status(400).send({
        message: "M-C-19 ThursdayOpen is required."
      });
    } else if (typeof req.body.thursdayClose === "undefined") {
      return res.status(400).send({
        message: "M-C-20 ThursdayClose is required."
      });
    } else if (typeof req.body.fridayIsOpen === "undefined") {
      return res.status(400).send({
        message: "M-C-21 FridayIsOpen is required."
      });
    } else if (typeof req.body.fridayOpen === "undefined") {
      return res.status(400).send({
        message: "M-C-22 FridayOpen is required."
      });
    } else if (typeof req.body.fridayClose === "undefined") {
      return res.status(400).send({
        message: "M-C-23 FridayClose is required."
      });
    } else if (typeof req.body.saturdayIsOpen === "undefined") {
      return res.status(400).send({
        message: "M-C-24 SaturdayIsOpen is required."
      });
    } else if (typeof req.body.saturdayOpen === "undefined") {
      return res.status(400).send({
        message: "M-C-25 SaturdayOpen is required."
      });
    } else if (typeof req.body.saturdayClose === "undefined") {
      return res.status(400).send({
        message: "M-C-26 SaturdayClose is required."
      });
    } else if (typeof req.body.babyChange === "undefined") {
      return res.status(400).send({
        message: "M-C-27 BabyChange is required."
      });
    } else if (typeof req.body.wheelchair === "undefined") {
      return res.status(400).send({
        message: "M-C-28 Wheelchair is required."
      });
    } else if (typeof req.body.free === "undefined") {
      return res.status(400).send({
        message: "M-C-29 Free is required."
      });
    } else if (typeof req.body.reviewText === "undefined") {
      return res.status(400).send({
        message: "M-C-30 Review is required."
      });
    } else if (req.body.name === "") {
      return res.status(400).send({
        message: "M-C-31 Name can't be blank."
      });
    } else if (req.body.name.length < 2 || 24 < req.body.name.length) {
      return res.status(400).send({
        message: "M-C-32 Name has to be between 3-24 characters."
      });
    } else if (req.body.latitude === "") {
      return res.status(400).send({
        message: "M-C-33 Latitude can't be blank."
      });
    } else if (req.body.longitude === "") {
      return res.status(400).send({
        message: "M-C-34 Longitude can't be blank."
      });
    } else if (req.body.rating === "") {
      return res.status(400).send({
        message: "M-C-35 Rating can't be blank."
      });
    } else if (req.body.babyChange === "") {
      return res.status(400).send({
        message: "M-C-36 BabyChange can't be blank."
      });
    } else if (req.body.wheelchair === "") {
      return res.status(400).send({
        message: "M-C-37 Wheelchair can't be blank."
      });
    } else if (req.body.free === "") {
      return res.status(400).send({
        message: "M-C-38 Free can't be blank."
      });
    } else if (req.body.reviewText === "") {
      return res.status(400).send({
        message: "M-C-39 Review can't be blank."
      });
    } else if (req.body.reviewText.length < 0 || 256 < req.body.reviewText) {
      return res.status(400).send({
        message: "M-C-40 Review has to be between 1-256 characters."
      });
    } else if (parseInt(req.body.rating) < 1 || 5 < parseInt(req.body.rating)) {
      return res.status(400).send({
        message: "M-C-41 Rating has to be a number between 1-5."
      });
    } else if (req.body.sundayIsOpen === "") {
      return res.status(400).send({
        message: "M-C-42 SundayIsOpen can't be blank."
      });
    } else if (req.body.sundayOpen === "") {
      return res.status(400).send({
        message: "M-C-43 SundayOpen can't be blank."
      });
    } else if (req.body.sundayClose === "") {
      return res.status(400).send({
        message: "M-C-44 SundayClose can't be blank."
      });
    } else if (req.body.mondayIsOpen === "") {
      return res.status(400).send({
        message: "M-C-45 MondayIsOpen can't be blank."
      });
    } else if (req.body.mondayOpen === "") {
      return res.status(400).send({
        message: "M-C-46 MondayOpen can't be blank."
      });
    } else if (req.body.mondayClose === "") {
      return res.status(400).send({
        message: "M-C-47 MondayClose can't be blank."
      });
    } else if (req.body.tuesdayIsOpen === "") {
      return res.status(400).send({
        message: "M-C-48 TuesdayIsOpen can't be blank."
      });
    } else if (req.body.tuesdayOpen === "") {
      return res.status(400).send({
        message: "M-C-49 TuesdayOpen can't be blank."
      });
    } else if (req.body.tuesdayClose === "") {
      return res.status(400).send({
        message: "M-C-50 TuesdayClose can't be blank."
      });
    } else if (req.body.wednesdayIsOpen === "") {
      return res.status(400).send({
        message: "M-C-51 WednesdayIsOpen can't be blank."
      });
    } else if (req.body.wednesdayOpen === "") {
      return res.status(400).send({
        message: "M-C-52 WednesdayOpen can't be blank."
      });
    } else if (req.body.wednesdayClose === "") {
      return res.status(400).send({
        message: "M-C-53 WednesdayClose can't be blank."
      });
    } else if (req.body.thursdayIsOpen === "") {
      return res.status(400).send({
        message: "M-C-54 ThursdayIsOpen can't be blank."
      });
    } else if (req.body.thursdayOpen === "") {
      return res.status(400).send({
        message: "M-C-55 ThursdayOpen can't be blank."
      });
    } else if (req.body.thursdayClose === "") {
      return res.status(400).send({
        message: "M-C-56 ThursdayClose can't be blank."
      });
    } else if (req.body.fridayIsOpen === "") {
      return res.status(400).send({
        message: "M-C-57 FridayIsOpen can't be blank."
      });
    } else if (req.body.fridayOpen === "") {
      return res.status(400).send({
        message: "M-C-58 FridayOpen can't be blank."
      });
    } else if (req.body.fridayClose === "") {
      return res.status(400).send({
        message: "M-C-59 FridayClose can't be blank."
      });
    } else if (req.body.saturdayIsOpen === "") {
      return res.status(400).send({
        message: "M-C-60 SaturdayIsOpen can't be blank."
      });
    } else if (req.body.saturdayOpen === "") {
      return res.status(400).send({
        message: "M-C-61 SaturdayOpen can't be blank."
      });
    } else if (req.body.saturdayClose === "") {
      return res.status(400).send({
        message: "M-C-62 SaturdayClose can't be blank."
      });
    } else if (
      parseInt(req.body.sundayOpen) < 0 ||
      23 < parseInt(req.body.sundayOpen)
    ) {
      return res.status(400).send({
        message: "M-C-63 SundayOpen has to be a number between 0-23."
      });
    } else if (
      parseInt(req.body.sundayClose) < 0 ||
      23 < parseInt(req.body.sundayClose)
    ) {
      return res.status(400).send({
        message: "M-C-64 SundayClose has to be a number between 0-23."
      });
    } else if (
      parseInt(req.body.mondayOpen) < 0 ||
      23 < parseInt(req.body.mondayOpen)
    ) {
      return res.status(400).send({
        message: "M-C-65 MondayOpen has to be a number between 0-23."
      });
    } else if (
      parseInt(req.body.mondayClose) < 0 ||
      23 < parseInt(req.body.mondayClose)
    ) {
      return res.status(400).send({
        message: "M-C-66 MondayClose has to be a number between 0-23."
      });
    } else if (
      parseInt(req.body.tuesdayOpen) < 0 ||
      23 < parseInt(req.body.tuesdayOpen)
    ) {
      return res.status(400).send({
        message: "M-C-67 TuesdayOpen has to be a number between 0-23."
      });
    } else if (
      parseInt(req.body.tuesdayClose) < 0 ||
      23 < parseInt(req.body.tuesdayClose)
    ) {
      return res.status(400).send({
        message: "M-C-68 TuesdayClose has to be a number between 0-23."
      });
    } else if (
      parseInt(req.body.wednesdayOpen) < 0 ||
      23 < parseInt(req.body.wednesdayOpen)
    ) {
      return res.status(400).send({
        message: "M-C-69 WednesdayOpen has to be a number between 0-23."
      });
    } else if (
      parseInt(req.body.wednesdayClose) < 0 ||
      23 < parseInt(req.body.wednesdayClose)
    ) {
      return res.status(400).send({
        message: "M-C-70 WednesdayClose has to be a number between 0-23."
      });
    } else if (
      parseInt(req.body.thursdayOpen) < 0 ||
      23 < parseInt(req.body.thursdayOpen)
    ) {
      return res.status(400).send({
        message: "M-C-71 ThursdayOpen has to be a number between 0-23."
      });
    } else if (
      parseInt(req.body.thursdayClose) < 0 ||
      23 < parseInt(req.body.thursdayClose)
    ) {
      return res.status(400).send({
        message: "M-C-72 ThursdayClose has to be a number between 0-23."
      });
    } else if (
      parseInt(req.body.fridayOpen) < 0 ||
      23 < parseInt(req.body.fridayOpen)
    ) {
      return res.status(400).send({
        message: "M-C-73 FridayOpen has to be a number between 0-23."
      });
    } else if (
      parseInt(req.body.fridayClose) < 0 ||
      23 < parseInt(req.body.fridayClose)
    ) {
      return res.status(400).send({
        message: "M-C-74 FridayClose has to be a number between 0-23."
      });
    } else if (
      parseInt(req.body.saturdayOpen) < 0 ||
      23 < parseInt(req.body.saturdayOpen)
    ) {
      return res.status(400).send({
        message: "M-C-75 SaturdayOpen has to be a number between 0-23."
      });
    } else if (
      parseInt(req.body.saturdayClose) < 0 ||
      23 < parseInt(req.body.saturdayClose)
    ) {
      return res.status(400).send({
        message: "M-C-76 SaturdayClose has to be a number between 0-23."
      });
    }

    var marker = new Marker({
      ID: req.body.latitude + "-" + req.body.longitude,
      createdAt: new Date()
        .toISOString()
        .replace(/T/, " ")
        .replace(/\..+/, ""),
      createdBy: user.id,
      name: req.body.name,
      latitude: req.body.latitude,
      longitude: req.body.longitude,
      rating: [parseInt(req.body.rating)],
      babyChange: req.body.babyChange,
      wheelchair: req.body.wheelchair,
      free: req.body.free,
      openingHours: {
        0: {
          isOpenToday: req.body.sundayIsOpen,
          open: req.body.sundayOpen,
          close: req.body.sundayClose
        },
        1: {
          isOpenToday: req.body.mondayIsOpen,
          open: req.body.mondayOpen,
          close: req.body.mondayClose
        },
        2: {
          isOpenToday: req.body.tuesdayIsOpen,
          open: req.body.tuesdayOpen,
          close: req.body.tuesdayClose
        },
        3: {
          isOpenToday: req.body.wednesdayIsOpen,
          open: req.body.wednesdayOpen,
          close: req.body.wednesdayClose
        },
        4: {
          isOpenToday: req.body.thursdayIsOpen,
          open: req.body.thursdayOpen,
          close: req.body.thursdayClose
        },
        5: {
          isOpenToday: req.body.fridayIsOpen,
          open: req.body.fridayOpen,
          close: req.body.fridayClose
        },
        6: {
          isOpenToday: req.body.saturdayIsOpen,
          open: req.body.saturdayOpen,
          close: req.body.saturdayClose
        }
      }
    });

    var review = new Review({
      locationId: req.body.latitude + "-" + req.body.longitude,
      createdBy: user.name,
      createdAt: new Date()
        .toISOString()
        .replace(/T/, " ")
        .replace(/\..+/, ""),
      text: req.body.reviewText,
      rating: parseInt(req.body.rating)
    });

    marker
      .save()
      .then(function(marker) {
        review
          .save()
          .then(function(review) {
            res.send({ marker, review });
          })
          .catch(function(err) {
            res.status(500).send({
              message:
                err.message || "Some error occurred while creating review."
            });
          });
      })
      .catch(function(err) {
        var message = err.errors.ID ? err.errors.ID.message : err.message;
        res.status(500).send({
          message: message || "Some error occurred while creating marker."
        });
      });
  });
};

exports.findAll = function(req, res) {
  Marker.find({}, function(err, array) {
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while querying markers."
      });
    }
    if (array.length === 0) {
      res.status(204).send([]);
    } else {
      res.send(array);
    }
  });
};
