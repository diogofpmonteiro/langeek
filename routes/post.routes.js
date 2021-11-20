const router = require("express").Router();
const User = require("./../models/User.model");
const Post = require("./../models/Post.model");

const languages = require("./../languages");
const fileUploader = require("../config/cloudinary.config");


// GET /create-post
router.get('/create-post', (req, res) => {
    res.render('posts/create-post', { languages });
});


// POST /create-post

// GET /edit-post

// POST /edit-post

// POST /edit-post/delete

module.exports = router;
