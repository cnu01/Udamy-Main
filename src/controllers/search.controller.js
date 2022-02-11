const express = require("express");

const router = express.Router();

const Tags = require("../models/tags.model");

router.get("/:name", async (req, res) => {
  try {
    const regex = new RegExp(req.params.name);
    const tag = await Tags.find({ name: regex }).limit(10).lean().exec();
    res.status(200).send(tag);
  } catch (err) {
    console.log(err);
  }
});
module.exports = router;
