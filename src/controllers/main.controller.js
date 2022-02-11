const express = require("express");

const router = express.Router();
let data = [
  {
    name: "dd",
    price: 300,
    rate: 3,
  },
  {
    name: "ddsadsa",
    price: 3040,
    rate: 4,
  },
];

router.get("", (req, res) => {
  try {
    res.render("index", {
      name: data,
    });
  } catch (err) {
    console.log(err);
  }
});
module.exports = router;
