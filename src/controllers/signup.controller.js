const express = require("express");

const router = express.Router();

router.get("", (req, res) => {
  try {
    res.render("signup");
  } catch (err) {
    console.log(err);
  }
});
module.exports = router;
