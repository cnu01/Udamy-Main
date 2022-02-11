const express = require("express");
const app = express();

const { register, login } = require("./src/controllers/auth.controller");
const mainController = require("./src/controllers/main.controller");
const courseController = require("./src/controllers/course.controller");
const cartController = require("./src/controllers/cart.controller");
const loginController = require("./src/controllers/login.controller");
const signupController = require("./src/controllers/signup.controller");
const maincatController = require("./src/controllers/mainCat.controller");
const subcatController = require("./src/controllers/subCat.controller");
const tagsController = require("./src/controllers/tag.controller");
const courseData = require("./src/controllers/course.data.controller");
const instructorController = require("./src/controllers/instructor.controller");
const searchController = require("./src/controllers/search.controller");
const commentController = require("./src/controllers/comments.controller");

app.use(express.json());
let bodyParser = require("body-parser");
const { render } = require("express/lib/response");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.use(express.static("public"));

app.post("/register", register);
app.post("/login", login);
app.use("/", mainController);
app.use("/courses", courseController);
app.use("/cart", cartController);
app.use("/login", loginController);
app.use("/signup", signupController);
app.use("/maincategory", maincatController);
app.use("/subcategory", subcatController);
app.use("/tags", tagsController);
app.use("/coursedata", courseData);
app.use("/instructor", instructorController);
app.use("/search", searchController);
app.use("/comment", commentController);
app.use("/checkout", (req, res) => res.render("checkout"));
app.use("/payment", (req, res) => res.render("payment"));

app.listen(5000, async () => {
  await require("./src/configs/dp")();
  console.log("listning on port 5000");
});
