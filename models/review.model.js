var mongoose = require("mongoose");

var ReviewSchema = mongoose.Schema({
  locationId: { type: String, required: [true, "can't be blank."] },
  createdBy: { type: String },
  createdAt: { type: String },
  text: { type: String, required: [true, "can't be blank."] },
  rating: { type: Number, required: [true, "can't be blank."] }
});

module.exports = mongoose.model("Review", ReviewSchema);
