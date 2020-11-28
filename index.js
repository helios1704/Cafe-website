var mongoose = require("mongoose");
var express = require("express");
var app = express();

var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var exphbs = require("express-handlebars");
var mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
mongoose.connect(process.env.mongo_url);
//models
var User = require("./models/user.model");

//route
var adminAuthRoute = require("./routes/admins/auth/login.admin.route");
var adminUserRoute = require("./routes/admins/users/user.route");
var loginRoute = require("./routes/auth/login.route");
var registerRoute = require("./routes/auth/register.route");
var logoutRoute = require("./routes/auth/logout.route");
const productsRoute = require("./routes/products.route");
const adminProductRoute = require("./routes/admins/products/products.route");

//middleware
var authAdminMiddleware = require("./middlewares/admins/auth.admin.middleware");

const { logout } = require("./controllers/logout.controller");

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cookieParser("helios1704"));
app.use(express.static("public"));
// app.use(sessionMiddleware);

app.set("views", "./views");

app.engine("handlebars", exphbs({ defaultLayout: null }));
app.set("view engine", "handlebars");
app.get("/", async (req, res) => {
  var userId = req.signedCookies.userId;
  var user = await User.findById(userId);

  if (user) {
    console.log(user.name);
    res.render("index", {
      name: user.name,
    });
  } else {
    res.render("index", {});
  }
});

app.use("/login", loginRoute);
app.use("/register", registerRoute);
app.use("/logout", logoutRoute);
app.use("/products", productsRoute);
app.use("/admin/users", authAdminMiddleware.requireAuth, adminUserRoute);
app.use("/admin", adminAuthRoute);
app.use("/admin/products", authAdminMiddleware.requireAuth, adminProductRoute);
const port = process.env.port || 3000;

app.listen(port, () => {
  console.log("Example Listen at: " + port);
});
