const express = require("express");

const router = express.Router();

router.get("", (req, res) => {
  try {
    res.render("becomeinstructor");
  } catch (err) {
    console.log(err);
  }
});

router.get("/create/1", (req, res) => {
  try {
    res.render("upload1");
  } catch (err) {
    console.log(err);
  }
});
router.get("/create/2", (req, res) => {
  try {
    res.render("upload2");
  } catch (err) {
    console.log(err);
  }
});
router.get("/create/3", (req, res) => {
  try {
    res.render("upload3");
  } catch (err) {
    console.log(err);
  }
});
router.get("/create/4", (req, res) => {
  try {
    res.render("upload4");
  } catch (err) {
    console.log(err);
  }
});
router.get("/create/upload", (req, res) => {
  try {
    res.render("courseupload");
  } catch (err) {
    console.log(err);
  }
});
module.exports = router;
