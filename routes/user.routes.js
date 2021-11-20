const router = require("express").Router();
const User = require("./../models/User.model");

// GET /:userId
router.get("/:userId", (req, res) => {
  const userId = req.params.userId;
});

// GET /:userId/edit-user
router.post("/:userId/edit-user", (req, res) => {});

// POST /:userId/edit-user
router.post("/:userId/edit-user", (req, res) => {});

module.exports = router;
