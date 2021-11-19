const router = require("express").Router();

/* GET home page Also renders the search form */
router.get("/", (req, res, next) => {
  res.render("index");
});

// GET search=? query
router.get("/search", (req, res) => {

  

});

module.exports = router;
