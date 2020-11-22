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

var loginRoute = require('./routes/auth/login.route');
var registerRoute = require('./routes/auth/register.route');
var logoutRoute = require('./routes/auth/logout.route');
var authMiddleware = require('./middlewares/auth.middleware');
const { logout } = require('./controllers/logout.controller');
const productsRoute = require("./routes/products.route");

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cookieParser("helios1704"));
app.use(express.static("public"));
// app.use(sessionMiddleware);

app.set("views", "./views");


app.engine("handlebars", exphbs({ defaultLayout: null, }));
app.set("view engine", "handlebars");
app.get('/', async(req, res) => {

    var userId = req.signedCookies.userId;
    var user = await User.findById(userId)

    if (user) {
        console.log(user.name)
        res.render('index', {
            name: user.name
        })
    } else {
        res.render('index', {

        })
    }
})

app.use('/login', loginRoute);
app.use('/register', registerRoute);
app.use('/logout', logoutRoute);
app.use("/products", productsRoute);


const port = process.env.port || 3000;

app.listen(port, () => {
    console.log("Example Listen at: " + port);
});