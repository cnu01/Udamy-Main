const { connect } = require("mongoose");

module.exports = () =>
  connect("mongodb+srv://jas:jaskaran@cluster0.prfds.mongodb.net/udemy");
