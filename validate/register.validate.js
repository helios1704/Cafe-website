var mongoose = require('mongoose');
var User = require('../models/user.model');

module.exports.postLogin = async(req, res, next) => {
    console.log(req.body);
    var arrError = [];
    var user = null;
    if (!req.body.name) {
        arrError.push("Name is required!");
    } else if (!req.body.email) {
        arrError.push("Email is required!");
    } else if (!req.body.password) {
        arrError.push("Password is required!");
    } else {
        user = await User.findOne({ email: req.body.email, password: req.body.password });
        console.log(user)
        if (user == null) {
            arrError.push("Email or password is wrong!")
            res.send('Email or password is wrong!');
        }
    }
    if (arrError.length) {
        res.render('auth/login', {
            errors: arrError,
            values: req.body
        })
        return;
    }
    // res.cookie('userID', user.id, {
    //     signed: true
    // });
    next();
}