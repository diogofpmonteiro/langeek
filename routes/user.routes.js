const router = require("express").Router();
const User = require("./../models/User.model");
const Post = require("./../models/Post.model");
const isLoggedIn = require("./../middlewares/is.logged.in");
const languages = require("./../languages");
const fileUploader = require("../config/cloudinary.config");

// GET /:userId
router.get("/:userId", isLoggedIn, async (req, res) => {
  try {
    const userId = req.params.userId;
    const foundUser = await User.findById(userId).populate("userPosts");

    res.render("profile/user-profile", { foundUser, user: req.session.user });
  } catch (error) {
    console.log(error);
  }
});

// GET /:userId/edit-user
router.get("/:userId/edit-user", isLoggedIn, async (req, res) => {
  try {
    const userId = req.params.userId;
    const foundUser = await User.findById(userId);

    res.render("profile/edit-profile", { foundUser, languages, user: req.session.user });
  } catch (error) {
    console.log(error);
  }
});

// POST /:userId/edit-user
router.post("/:userId/edit-user", fileUploader.single('newImage'), async (req, res) => {
  try {
    const { username, languagesISpeak, languagesIWantToLearn, socialMediaLink, existingImage} = req.body;
    const userId = req.params.userId;

    let imageUrl; 
    if (req.file) {
      imageUrl = req.file.path;
    } else {
      imageUrl = existingImage;
    }

    const userInfo = { username, languagesISpeak, languagesIWantToLearn, socialMediaLink, profilePictureURL: imageUrl}; 
    const updatedUser = await User.findByIdAndUpdate(userId, userInfo);

    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
