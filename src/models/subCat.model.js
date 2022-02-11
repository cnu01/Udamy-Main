const { Schema, model } = require("mongoose");

const subcatSchema = new Schema(
  {
    name: { type: String, required: true },
    mainCat: { type: Schema.Types.ObjectId, ref: "maincat", required: true },
  },
  {
    timestamps: false,
  }
);

module.exports = model("subcat", subcatSchema);
