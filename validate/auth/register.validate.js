var mongoose = require('mongoose');
var User = require('../../models/user.model');
var bcrypt = require('bcrypt');
const saltRounds = 10;
module.exports.register = async(req, res, next) => {
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
        var hashPassword = null;
        bcrypt.hash(req.body.password, saltRounds, async(err, hash) => {
            hashPassword = hash;
            temp = {
                email: req.body.email,
                password: hashPassword,
                name: req.body.name,
                phone: req.body.phone,
                address: req.body.address
            }
            user = await User.create(temp);
            console.log(user)
        });

        // if (user == null) {
        //     arrError.push("Email or password is wrong!")
        //     res.send('Email or password is wrong!');
        // }
        // return;
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