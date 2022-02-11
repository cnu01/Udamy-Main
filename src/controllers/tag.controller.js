const express = require("express");

const router = express.Router();

const Tag = require("../models/tags.model");

const authenticate = require("../middlewares/authenticate");

router.get("", async (req, res) => {
  console.log(req.user);
  try {
    let name = req.query.name;
    let tag;
    if (name) {
      tag = await Tag.findOne({ name: name })
        .populate({
          path: "subCat",
          select: { name: 1, _id: 0 },
          populate: { path: "mainCat", select: { name: 1, _id: 0 } },
        })
        .lean()
        .exec();
    } else {
      tag = await Tag.find()
        .populate({
          path: "subCat",
          select: { name: 1, _id: 0 },
          populate: { path: "mainCat", select: { name: 1, _id: 0 } },
        })
        .lean()
        .exec();
    }

    res.status(200).send(tag);
  } catch (err) {
    res.status(500).send(err.message);
  }
});
router.post("", async (req, res) => {
  try {
    const tag = await Tag.create(req.body);
    res.status(201).send(tag);
  } catch (err) {
    res.status(500).send(err.message);
  }
});
module.exports = router;
