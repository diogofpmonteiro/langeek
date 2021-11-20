const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  languagesISpeak: { type: [String], required: true },
  languagesIWantToLearn: { type: [String], required: true },
  socialMediaLink: { type: String, required: true },
  profilePictureURL: { type: String, required: true },
  userPosts: [{ type: Schema.Types.ObjectId, ref: "Post" }],
});

const User = model("User", userSchema);

module.exports = User;
