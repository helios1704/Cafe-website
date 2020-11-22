var mongoose = require('mongoose');
var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser')
var exphbs = require('express-handlebars');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/thuctapcongnhan', { useNewUrlParser: true });
//models
var User = require('./models/user.model');

// var userRoute = require('./routes/users.route');
// var apiProductRoute = require('./api/routes/product.route');
var loginRoute = require('./routes/auth/login.route');
var registerRoute = require('./routes/auth/register.route');
var logoutRoute = require('./routes/auth/logout.route');
var authMiddleware = require('./middlewares/auth.middleware');
const { logout } = require('./controllers/logout.controller');
// var productRoute = require('./routes/product.route');
// var cartRoute = require('./routes/cart.route');
// var middlewares = require('./middlewares/auth.middleware');
// var sessionMiddleware = require('./middlewares/session.middleware');

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(cookieParser('helios1704'));
app.use(express.static('public'))

// app.use(authMiddleware.requireAuth)
var port = 3000;
app.set('views', './views');

// app.set('view engine', 'pug')
app.engine('handlebars', exphbs({
    defaultLayout: null
}));

app.set('view engine', 'handlebars');

// var user = {
//     email: "admin@gmail.com",
//     password: "123"
// }

app.get('/', async(req, res) => {
    // var users = await User.find();
    // res.json(users);
    var userId = req.signedCookies.userId;
    var user = await User.findById(userId)
        // console.log(user)
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

// app.use('/users', middlewares.requireAuth, userRoute);
// app.use('/', authRoute);
// app.use('/cart', cartRoute);
// app.use('/products', productRoute);
// app.use('/api', apiProductRoute);

app.listen(port, () => {
    console.log('Example Listen at: ' + port);
})