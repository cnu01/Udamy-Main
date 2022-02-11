const express = require("express");

const router = express.Router();

const Main = require("../models/mainCat.model");

router.get("", async (req, res) => {
  try {
    let name = req.query.name;
    let main;
    if (name) {
      main = await Main.findOne({ name: name }).lean().exec();
    } else {
      main = await Main.find().lean().exec();
    }
    res.status(200).send(main);
  } catch (err) {
    res.status(500).send(err.message);
  }
});
router.get("/:id", async (req, res) => {
  try {
    const main = await Main.findById(req.params.id).lean().exec();
    res.status(200).send(main);
  } catch (err) {
    res.status(500).send(err.message);
  }
});
router.post("", async (req, res) => {
  try {
    const main = await Main.create(req.body);
    res.status(201).send(main);
  } catch (err) {
    res.status(500).send(err.message);
  }
});
router.patch("/:id", async (req, res) => {
  try {
    const main = await Main.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();
    res.status(201).send(main);
  } catch (err) {
    res.status(500).send(err.message);
  }
});
module.exports = router;
