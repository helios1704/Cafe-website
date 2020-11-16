var mongoose = require('mongoose');
var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser')
var exphbs = require('express-handlebars');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/thuctapcongnhan', {});
//models
var User = require('./models/user.model');

// var userRoute = require('./routes/users.route');
// var apiProductRoute = require('./api/routes/product.route');
var authRoute = require('./routes/auth.route');
var registerRoute = require('./routes/register.route');

// var productRoute = require('./routes/product.route');
// var cartRoute = require('./routes/cart.route');
// var middlewares = require('./middlewares/auth.middleware');
// var sessionMiddleware = require('./middlewares/session.middleware');

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(cookieParser('helios1704'));
app.use(express.static('public'))
    // app.use(sessionMiddleware);

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
    var users = await User.find();
    res.json(users);
})

app.use('/login', authRoute);
app.use('/register', registerRoute);

// app.use('/users', middlewares.requireAuth, userRoute);
// app.use('/', authRoute);
// app.use('/cart', cartRoute);
// app.use('/products', productRoute);
// app.use('/api', apiProductRoute);

app.listen(port, () => {
    console.log('Example Listen at: ' + port);
})