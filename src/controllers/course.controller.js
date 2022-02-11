const express = require("express");

const Main = require("../models/mainCat.model");
const Sub = require("../models/subCat.model");
const Tag = require("../models/tags.model");
const Course = require("../models/course.model");

const router = express.Router();

router.get("", async (req, res) => {
  try {
    const q = req.query.q || false;
    const page = +req.query.page || 1;
    const size = +req.query.limit || 10;
    const level = req.query.level || false;
    const total = (page - 1) * size;
    let courses;
    let length;
    let filters = {};
    if (q) {
      const tag = await Tag.findOne({ name: q }).lean().exec();
      filters.tag = tag._id;
    }
    if (level) {
      filters.level = level;
    }
    courses = await Course.find(filters).lean().limit(size).skip(total).exec();
    length = await Course.find(filters).count();

    res.render("product", {
      data: courses,
      length: length,
      main: "courses",
      sub: null,
      tag: null,
    });
  } catch (err) {
    console.log(err);
  }
});
router.get("/:name", async (req, res) => {
  try {
    const page = +req.query.page || 1;
    const size = +req.query.limit || 10;
    const level = req.query.level || false;

    const total = (page - 1) * size;
    const main = await Main.findOne({ name: req.params.name }).lean().exec();

    const sub = await Sub.find({ mainCat: main._id });
    let courses = [];
    for (let i = 0; i < sub.length; i++) {
      let tag = await Tag.find({ subCat: sub[i]._id });
      for (let j = 0; j < tag.length; j++) {
        let filters = { tag: tag[j]._id };
        if (level) {
          filters.level = level;
        }
        let course = await Course.find(filters).lean().exec();
        if (i == 0 && j == 0) {
          courses = course;
        } else courses.concat(course);
      }
    }
    return res.render("product", {
      data: courses.slice((page - 1) * size, page * size),
      length: courses.length,
      main: req.params.name,
      sub: null,
      tag: null,
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
});
router.get("/:name/:sub", async (req, res) => {
  try {
    const page = +req.query.page || 1;
    const size = +req.query.limit || 10;
    const level = req.query.level || false;

    const total = (page - 1) * size;

    const sub = await Sub.findOne({ name: req.params.sub });
    let courses = [];
    let tags = await Tag.find({ subCat: sub._id });

    for (let i = 0; i < tags.length; i++) {
      let filters = { tag: tags[i]._id };
      if (level) {
        filters.level = level;
      }
      let course = await Course.find(filters).lean().exec();
      if (i == 0) {
        courses = course;
      } else courses.concat(course);
    }
    return res.render("product", {
      data: courses.slice((page - 1) * size, page * size),
      length: courses.length,
      main: req.params.name,
      sub: req.params.sub,
      tag: null,
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
});
router.get("/:name/:sub/:tag", async (req, res) => {
  try {
    const page = +req.query.page || 1;
    const size = +req.query.limit || 10;
    const level = req.query.level || false;

    const total = (page - 1) * size;
    let tag = await Tag.findOne({ name: req.params.tag }).populate({
      path: "subCat",
      select: { name: 1, _id: 0 },
    });
    let filters = { tag: tag._id };
    if (level) {
      filters.level = level;
    }
    let courses = await Course.find(filters)
      .populate("tag")
      .limit(size)
      .skip(total)
      .lean()
      .exec();

    return res.render("product", {
      data: courses,
      length: courses.length,
      main: req.params.name,
      sub: req.params.sub,
      tag: req.params.tag,
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
});
module.exports = router;
