const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  fname: { type: String, required: true },
  lname: { type: String, required: false },
  email: { type: String, required: true },
  password: { type: String, required: true },
  Headline: { type: String, required: false },
  bio: { type: String, required: false },
  img: { type: String, required: false },
  cat: [
    { type: mongoose.Schema.Types.ObjectId, ref: "course", required: false },
  ],
});

userSchema.pre("save", function (next) {
  if (!this.isModified("password")) return next();
  this.password = bcrypt.hashSync(this.password, 8);
  return next();
});

userSchema.methods.checkPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model("user", userSchema);

