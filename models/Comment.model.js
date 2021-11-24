const { Schema, model } = require("mongoose");

const commentSchema = new Schema(
  {
    commentator: { type: Schema.Types.ObjectId, ref: "User" },
    text: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Comment = model("Comment", commentSchema);

module.exports = Comment;