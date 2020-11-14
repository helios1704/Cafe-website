var mongoose = require('mongoose');
var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser')
var exphbs = require('express-handlebars');

// var userRoute = require('./routes/users.route');
// var apiProductRoute = require('./api/routes/product.route');
// var authRoute = require('./routes/auth.route');
// var productRoute = require('./routes/product.route');
// var cartRoute = require('./routes/cart.route');
// var middlewares = require('./middlewares/auth.middleware');
// var sessionMiddleware = require('./middlewares/session.middleware');

mongoose.connect('mongodb://localhost/thuctapcongnhan', {});

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

app.get('/', (req, res) => {
    res.render("index", {
        name: "Tran van Si Café",
    });
})


// app.use('/users', middlewares.requireAuth, userRoute);
// app.use('/', authRoute);
// app.use('/cart', cartRoute);
// app.use('/products', productRoute);
// app.use('/api', apiProductRoute);

app.listen(port, () => {
    console.log('Example Listen at: ' + port);
})