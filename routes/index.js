const router = require("express").Router();
const User = require("./../models/User.model");
const Post = require("./../models/Post.model");

/* GET home page Also renders the search form */
router.get("/", async (req, res, next) => {


  //! It's not working with sort
  const allPosts = await Post.find({sort: {createdAt: 1}}).populate("author")

  res.render("index", {allPosts, user: req.session.user});
});

// GET search=? query
router.get("/search", (req, res) => {

});

router.get('/about-us', (req, res) => {
  res.render('about-us');
})

module.exports = router;
