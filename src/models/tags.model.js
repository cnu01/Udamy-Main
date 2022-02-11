const { Schema, model } = require("mongoose");

const tagSchema = new Schema(
  {
    name: { type: String, required: true },
    subCat: { type: Schema.Types.ObjectId, ref: "subcat", required: true },
  },
  {
    timestamps: false,
  }
);

module.exports = model("tag", tagSchema);
