const { Schema, model } = require("mongoose");

const maincatSchema = new Schema(
  {
    name: { type: String, required: true },
  },
  {
    timestamps: false,
  }
);

module.exports = model("maincat", maincatSchema);
