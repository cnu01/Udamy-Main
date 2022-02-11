const { Schema, model } = require("mongoose");

const courseSchema = new Schema(
  {
    title: { type: String, required: true },
    created_by: { type: Schema.Types.ObjectId, ref: "user", required: true },
    price: { type: Number, required: true },
    thumbnails: { type: String, required: true },
    creater_name: { type: String, required: true },
    original_price: { type: String, required: true },
    duration: { type: Number, required: true },
    lecture: { type: Number, required: true },
    description: { type: String, required: true },
    level: { type: String, required: true },
    video: { type: String, required: true },
    tag: { type: String, ref: "tag", required: true },
    delete: { type: Boolean, required: true, default: false },
    comment: [{ type: Schema.Types.ObjectId, ref: "comment", required: false }],
    category: { type: String, required: false },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = model("course", courseSchema);
