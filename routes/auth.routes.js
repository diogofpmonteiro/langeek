const router = require("express").Router();
const languages = require("./../languages");
const User = require("./../models/User.model");
const fileUploader = require("../config/cloudinary.config");
const bcrypt = require("bcryptjs");
const isLoggedIn = require("./../middlewares/is.logged.in");

const SALT_ROUNDS = 10;

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

    const usernameNotProvided = !username || username === "";
    const passwordNotProvided = !password || password === "";

    if (usernameNotProvided || passwordNotProvided) {
      res.render("auth/signup", { errorMessage: "Provide username and password", languages });

      return;
    }

    const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;

    if (!regex.test(password)) {
      res.status(400).render("auth/signup", {
        errorMessage:
          "Password needs to have at least 8 chars and must contain at least one number, one lowercase and one uppercase letter.",
        languages,
      });
      return;
    }

    const foundUser = await User.findOne({ username });
    if (foundUser) {
      throw new Error("The username already exists");
    }

    const salt = await bcrypt.genSalt(SALT_ROUNDS);
    const hashedPassword = await bcrypt.hash(password, salt);

    const createdUser = await User.create({
      username,
      password: hashedPassword,
      languagesISpeak,
      languagesIWantToLearn,
      socialMediaLink,
      profilePictureURL: fileOnCloudinary,
    });

    res.redirect("/");
  } catch (error) {
    console.log(error);
    res.render("auth/signup", { errorMessage: error.message || "Error while trying to sign up", languages });
  }
});

// GET /login
router.get("/login", (req, res) => {
  res.render("auth/login");
});

// POST /login
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    const usernameNotProvided = !username || username === "";
    const passwordNotProvided = !password || password === "";

    if (usernameNotProvided || passwordNotProvided) {
      res.render("auth/login", { errorMessage: "Provide username and password" });

      return;
    }

    const foundUser = await User.findOne({ username });
    if (!foundUser) {
      throw new Error("Wrong credentials");
    }

    const isCorrectPassword = await bcrypt.compare(password, foundUser.password);

    if (!isCorrectPassword) {
      throw new Error("Wrong credentials");
    } else if (isCorrectPassword) {
      req.session.user = foundUser;
      res.redirect("/");
    }
  } catch (error) {
    res.render("auth/login", { errorMessage: error.message || "Error while trying to login", languages });
  }
});

// GET /logout
router.get("/logout", isLoggedIn, (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.render("error");
    }

    res.redirect("/");
  });
});

module.exports = router;
