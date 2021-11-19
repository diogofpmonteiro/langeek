const { Schema, model } = require("mongoose");

const postSchema = new Schema({
  title: { type: String, required: true },
  postPicture: { type: String, required: true },
  description: { type: String, required: true },
  languageTag: { type: String, required: true },
  author: { type: [{ type: Schema.Types.ObjectId, ref: "User" }] },
});

const Post = model("Post", postSchema);

module.exports = Post;
