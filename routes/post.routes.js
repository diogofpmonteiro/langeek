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
router.post('/create-post', fileUploader.single("postPicture"), async (req, res) => {
    try {

        const { title, description, languageTag} = req.body;
        const fileOnCloudinary = req.file.path;
    
        const createdPost = await Post.create({
            title,
            description,
            languageTag,
            postPicture: fileOnCloudinary,
            author: req.session.user._id
          });
    
    res.redirect('/')
    } catch (error) {
        console.log(error)
    }

});


// GET /edit-post

// POST /edit-post

// POST /edit-post/delete

module.exports = router;
