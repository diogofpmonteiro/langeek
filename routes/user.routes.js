const router = require("express").Router();
const User = require("./../models/User.model");
const Post = require("./../models/Post.model");
const isLoggedIn = require("./../middlewares/is.logged.in");
const languages = require("./../languages");

// GET /:userId
router.get("/:userId", isLoggedIn, async (req, res) => {
  try {
    const userId = req.params.userId;
    const foundUser = await User.findById(userId);

    res.render("profile/user-profile", { foundUser });
  } catch (error) {
    console.log(error);
  }
});

// GET /:userId/edit-user
router.get("/:userId/edit-user", isLoggedIn, async (req, res) => {
  try {
    const userId = req.params.userId;
    const foundUser = await User.findById(userId);
    res.render("profile/edit-profile", { foundUser, languages });
  } catch (error) {
    console.log(error);
  }
});

// POST /:userId/edit-user
router.post("/:userId/edit-user", async (req, res) => {
  try {
    const { username, languagesISpeak, languagesIWantToLearn, socialMediaLink } = req.body;
    const userInfo = { username, languagesISpeak, languagesIWantToLearn, socialMediaLink };
    const userId = req.params.userId;

    const updatedUser = await User.findByIdAndUpdate(userId, userInfo);

    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
