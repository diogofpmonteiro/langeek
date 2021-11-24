const router = require("express").Router();
const User = require("./../models/User.model");
const Post = require("./../models/Post.model");
const isLoggedIn = require("./../middlewares/is.logged.in");

/* GET home page Also renders the search form */
router.get("/", async (req, res, next) => {
  //! It's not working with sort
  const allPosts = await Post.find(null, null, { sort: { createdAt: -1 }}).populate("author"); /* author comments */

  res.render("index", { allPosts , user: req.session.user});
});

// GET search=? query
router.get("/search", async (req, res) => {
  const languageToSearch = req.query.languageToSearch;
  const capitalizedLanguageSearch =
    languageToSearch.substr(0, 1).toUpperCase() + languageToSearch.substr(1).toLowerCase();
  const languagesSearchResults = await Post.find({ languageTag: capitalizedLanguageSearch }, null, {
    sort: { createdAt: -1 },
  }).populate("author");

  res.render("search-results", { languagesSearchResults, user: req.session.user });
});

// GET /about-us
router.get("/about-us", (req, res) => {
  res.render("about-us");
});

module.exports = router;
