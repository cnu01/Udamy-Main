const express = require("express");

const router = express.Router();

const Sub = require("../models/subCat.model");

router.get("/:id", async (req, res) => {
  try {
    const sub = await Sub.findById(req.params.id).lean().exec();
    res.status(200).send(sub);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.get("", async (req, res) => {
  try {
    let name = req.query.name;
    let main = req.query.maincat;
    let sub;
    if (name) {
      sub = await Sub.findOne({ name: name })
        .populate({ path: "mainCat", select: { name: 1, _id: 0 } })
        .lean()
        .exec();
    } else if (main) {
      sub = await Sub.find({ mainCat: main })
        .populate({ path: "mainCat", select: { name: 1, _id: 0 } })
        .lean()
        .exec();
    } else {
      sub = await Sub.find()
        .populate({ path: "mainCat", select: { name: 1, _id: 0 } })
        .lean()
        .exec();
    }

    res.status(200).send(sub);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.post("", async (req, res) => {
  try {
    const sub = await Sub.create(req.body);
    res.status(201).send(sub);
  } catch (err) {
    res.status(500).send(err.message);
  }
});
module.exports = router;
