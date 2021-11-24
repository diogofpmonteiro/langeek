const router = require("express").Router();
const User = require("./../models/User.model");
const Post = require("./../models/Post.model");
const Comment = require("./../models/Comment.model");
const isLoggedIn = require("./../middlewares/is.logged.in");


router.post('/add-comment/:postId', isLoggedIn, async (req, res) => {
    try {
        const postid = req.params.postId;
        const {text} = req.body;
        
       const createdComment = await Comment.create({
        commentator: req.session.user._id,
         text
     });

     await Post.findByIdAndUpdate(postid, {$push: {comments: createdComment._id}})
     res.redirect('/');  

    } catch (error) {
        console.log(error);
    }

});

module.exports = router;