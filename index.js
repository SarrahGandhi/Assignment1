const express = require("express");
const path = require("path");
const session = require("express-session");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const port = process.env.PORT || 3005;
app.set("views", path.join(__dirname, "views"));
app.use("/images", express.static(path.join(__dirname, "images")));

app.set("view engine", "pug");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(
  session({
    secret: process.env.SESSIONSECRET,
    name: "session",
    saveUninitialized: false,
    resave: false,
    cookie: {},
  })
);
app.get("/", (req, res) => {
  res.render("common/index", {
    loggedIn: req.session.loggedIn,
    username: req.session.user,
  });
});

app.use("/admin", require("./components/admin/routes"));
app.use("/products", require("./components/products/routes"));
app.use("/furniture", require("./components/furniture/routes"));
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
