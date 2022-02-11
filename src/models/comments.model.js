const { Schema, model } = require("mongoose");

const commentSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "user", required: true },
    content: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = model("comment", commentSchema);
