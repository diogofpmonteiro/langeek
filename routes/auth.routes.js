const router = require("express").Router();
const languages = require("./../languages");
const User = require("./../models/User.model");
const fileUploader = require("../config/cloudinary.config");

// AUTH ROUTES GO HERE:

// GET  /signup
router.get("/signup", (req, res) => {
  res.render("auth/signup", { languages });
});

// POST /signup
router.post("/signup", fileUploader.single("profilePictureURL"), async (req, res) => {
  try {
    const { username, password, languagesISpeak, languagesIWantToLearn, socialMediaLink } = req.body;
    const fileOnCloudinary = req.file.path;

    const createdUser = await User.create({
      username,
      password,
      languagesISpeak,
      languagesIWantToLearn,
      socialMediaLink,
      profilePictureURL: fileOnCloudinary,
    });
    res.redirect("/");
    console.log(createdUser);
  } catch (error) {
    console.log(error);
  }
});

// GET /login
router.get("/login", (req, res) => {
  res.render("auth/login");
});

// POST /login
router.post("/login", (req, res) => {});

// GET /logout
router.get("/logout", (req, res) => {});

module.exports = router;
