const router = require("express").Router();
const languages = require('languages');

// AUTH ROUTES GO HERE:

// GET  /signup
router.get("/signup", (req, res) => {
  res.render("auth/signup", {languages});
});

// POST /signup
router.post('/signup', (req, res) => {

});

// GET /login
router.get('/login', (req, res) => {
    res.render("auth/login")
});

// POST /login
router.post('/login', (req, res) => {

});

// GET /logout
router.get('/logout', (req, res) => {

});


module.exports = router;
