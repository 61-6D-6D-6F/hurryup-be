var mongoose = require("mongoose");
var beautifyUnique = require("mongoose-beautiful-unique-validation");

var MarkerSchema = mongoose.Schema({
  ID: { type: String, unique: "M-M-01 Marker already exists." },
  createdBy: { type: String },
  createdAt: { type: String },
  name: { type: String, required: [true, "can't be blank."] },
  latitude: { type: Number, required: [true, "can't be blank."] },
  longitude: { type: Number, required: [true, "can't be blank."] },
  rating: { type: [Number], required: [true, "can't be blank."] },
  babyChange: { type: Boolean, required: [true, "can't be blank."] },
  wheelchair: { type: Boolean, required: [true, "can't be blank."] },
  free: { type: Boolean, required: [true, "can't be blank."] },
  openingHours: {
    0: {
      isOpenToday: { type: Boolean, required: [true, "can't be blank."] },
      open: { type: String, required: [true, "can't be blank."] },
      close: { type: String, required: [true, "can't be blank."] }
    },
    1: {
      isOpenToday: { type: Boolean, required: [true, "can't be blank."] },
      open: { type: String, required: [true, "can't be blank."] },
      close: { type: String, required: [true, "can't be blank."] }
    },
    2: {
      isOpenToday: { type: Boolean, required: [true, "can't be blank."] },
      open: { type: String, required: [true, "can't be blank."] },
      close: { type: String, required: [true, "can't be blank."] }
    },
    3: {
      isOpenToday: { type: Boolean, required: [true, "can't be blank."] },
      open: { type: String, required: [true, "can't be blank."] },
      close: { type: String, required: [true, "can't be blank."] }
    },
    4: {
      isOpenToday: { type: Boolean, required: [true, "can't be blank."] },
      open: { type: String, required: [true, "can't be blank."] },
      close: { type: String, required: [true, "can't be blank."] }
    },
    5: {
      isOpenToday: { type: Boolean, required: [true, "can't be blank."] },
      open: { type: String, required: [true, "can't be blank."] },
      close: { type: String, required: [true, "can't be blank."] }
    },
    6: {
      isOpenToday: { type: Boolean, required: [true, "can't be blank."] },
      open: { type: String, required: [true, "can't be blank."] },
      close: { type: String, required: [true, "can't be blank."] }
    }
  }
});

MarkerSchema.plugin(beautifyUnique, {
  defaultMessage: "This custom message"
});

module.exports = mongoose.model("Marker", MarkerSchema);
