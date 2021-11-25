const router = require("express").Router();
const User = require("./../models/User.model");
const Post = require("./../models/Post.model");
const isLoggedIn = require("./../middlewares/is.logged.in");
const languages = require("./../languages");
const fileUploader = require("../config/cloudinary.config");

// GET /create-post
router.get("/create-post", isLoggedIn, (req, res) => {
  res.render("posts/create-post", { languages, user: req.session.user });
});

// POST /create-post
router.post("/create-post", fileUploader.single("postPicture"), async (req, res) => {
  try {
    const { title, description, languageTag } = req.body;
    const fileOnCloudinary = req.file.path;

    const createdPost = await Post.create({
      title,
      description,
      languageTag,
      postPicture: fileOnCloudinary,
      author: req.session.user._id,
    });
    await User.findByIdAndUpdate(req.session.user._id, { $push: { userPosts: createdPost._id } });

    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
});

// POST /edit-post/delete
router.post("/delete-post/:postId", async (req, res) => {
  try {
    const postId = req.params.postId;
    console.log(req.params.postId);
    await Post.findByIdAndRemove(postId);
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
});

// GET /favorite-posts
router.get("/favorite-posts", async (req, res) => {
  try {
    const userWhoFavorited = await User.findById(req.session.user._id).populate({
      path: "favoritePosts",
      model: "Post",
      populate: {
        path: "author",
        model: "User",
      },
    });

    res.render("profile/user-favorites", { userWhoFavorited, user: req.session.user });
  } catch (error) {
    console.log(error);
  }
});

// POST /add-favorite/:postId
router.post("/add-favorite/:postId", async (req, res) => {
  try {
    const postId = req.params.postId;
    const userId = req.session.user._id;

    await User.findByIdAndUpdate(userId, { $push: { favoritePosts: postId } });

    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
});

router.post('/remove-favorite/:postId', async (req, res) => {

  try {
    const postId = req.params.postId;
    const userId = req.session.user._id;

    await User.findByIdAndUpdate(userId, { $pull: { favoritePosts: postId } });
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }


});

module.exports = router;
