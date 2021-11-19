const router = require("express").Router();

// AUTH ROUTES GO HERE:

// GET  /signup
router.get("/signup", (req, res) => {
  res.render("auth/signup");
});

// POST /signup

// GET /login

// POST /login

// GET /logout

module.exports = router;
