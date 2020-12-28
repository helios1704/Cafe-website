var mongoose = require('mongoose');
var User = require('../../../models/user.model');
var Role = require('../../../models/role.model');
var bcrypt = require('bcrypt');

module.exports.postLogin = async(req, res, next) => {
    var arrError = [];
    var user = null;
    var roles = await Role.findOne({ name: "admin" })
    if (!req.body.email) {
        arrError.push("Email is required!");
    } else if (!req.body.password) {
        arrError.push("Password is required!");
    }

    if (req.body.email && req.body.password) {
        user = await User.findOne({ email: req.body.email });
        if (!user) {
            arrError.push("Email does not exist!")
            console.log("Sai");
            if (arrError.length) {
                res.render('admins/auth/login', {
                    errors: arrError,
                    values: req.body
                })
                return;
            }
        }
        // console.log(user);
        if (user.role_id == roles._id) {
            bcrypt.compare(req.body.password, user.password, (err, result) => {
                if (result == true) {
                    res.cookie('adminId', user._id, {
                        signed: true
                    });
                    console.log("Dung");
                    next();
                } else {
                    arrError.push("Password is wrong!")
                    console.log("Sai");
                    if (arrError.length) {
                        res.render('admins/auth/login', {
                            errors: arrError,
                            values: req.body
                        })
                        return;
                    }
                }
            });
        } else {
            arrError.push("Password is wrong!")
            console.log("Sai");
            if (arrError.length) {
                res.render('admins/auth/login', {
                    errors: arrError,
                    values: req.body
                })
                return;
            }
        }
    }
    if (arrError.length) {
        res.render('admins/auth/login', {
            errors: arrError,
            values: req.body
        })
        return;
    }
}