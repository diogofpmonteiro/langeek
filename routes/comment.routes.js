const router = require("express").Router();
const User = require("./../models/User.model");
const Post = require("./../models/Post.model");
const Comment = require("./../models/Comment.model");
const isLoggedIn = require("./../middlewares/is.logged.in");


router.post('/add-comment/:postId', isLoggedIn, (req, res) => {
    const postid = req.params.postId;


});

module.exports = router;