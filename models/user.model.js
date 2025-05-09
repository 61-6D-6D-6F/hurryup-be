var mongoose = require("mongoose");
var bcrypt = require("bcrypt");
var beautifyUnique = require("mongoose-beautiful-unique-validation");
var SALT_WORK_FACTOR = 10;

var UserSchema = mongoose.Schema({
  createdAt: { type: String },
  name: {
    type: String,
    unique: "U-M-01 Name is taken.",
    required: [true, "can't be blank."],
    match: [/^[áéúőóüöíÁÉÚŐÓÜÖÍa-zA-Z0-9]+$/, "is invalid"]
  },
  email: {
    type: String,
    lowercase: true,
    unique: "U-M-02 Email is taken.",
    required: [true, "can't be blank."],
    match: [/\S+@\S+\.\S+/, "is invalid"]
  },
  password: {
    type: String,
    required: [true, "can't be blank."],
    match: [/^.{6,}$/, "min 6 char"]
  },
  token: { type: String, required: [true, "can't be blank."] }
});

UserSchema.plugin(beautifyUnique, {
  defaultMessage: "This custom message."
});

UserSchema.pre("save", function(next) {
  var user = this;

  if (!user.isModified("password")) {
    return next();
  }

  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
    if (err) {
      return next(err);
    }
    bcrypt.hash(user.password, salt, function(err, hash) {
      if (err) {
        return next(err);
      }
      user.password = hash;
      next();
    });
  });
});

UserSchema.methods.comparePassword = function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) {
      return cb(err);
    }
    cb(null, isMatch);
  });
};

module.exports = mongoose.model("User", UserSchema);
