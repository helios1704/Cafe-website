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

var authRoute = require("./routes/auth.route");
var registerRoute = require("./routes/register.route");
const productsRoute = require("./routes/products.route");

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cookieParser("helios1704"));
app.use(express.static("public"));
// app.use(sessionMiddleware);

app.set("views", "./views");

// app.set('view engine', 'pug')
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: null,
  })
);

app.set("view engine", "handlebars");

const port = process.env.port || 3000;

app.get("/", async (req, res) => {
  var users = await User.find();
  res.json(users);
});

app.use("/login", authRoute);
app.use("/register", registerRoute);
app.use("/products", productsRoute);
app.listen(port, () => {
  console.log("Example Listen at: " + port);
});
