const router = require("express").Router();

/* GET home page Also renders the search form */
router.get("/", (req, res, next) => {
  res.render("index", {user: req.session.user});
});

// GET search=? query
router.get("/search", (req, res) => {

});

router.get('/about-us', (req, res) => {
  res.render('about-us');
})

module.exports = router;
