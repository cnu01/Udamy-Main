const express = require("express");

const router = express.Router();

const authenticate = require("../middlewares/authenticate");

const Comment = require("../models/comments.model");

router.get("", authenticate, async (req, res) => {
  try {
    const comment = await Comment.find().lean().exec();
    res.status(200).send(comment);
  } catch (err) {
    console.log(err);
  }
});
router.post("", authenticate, async (req, res) => {
  try {
    req.body.user = req.user._id;
    const comment = await Comment.create(req.body);
    res.status(200).send(comment);
  } catch (err) {
    console.log(err);
  }
});
module.exports = router;
