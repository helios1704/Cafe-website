var mongoose = require('mongoose');
var User = require('../../models/user.model');
var Role = require('../../models/role.model');
var bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports.register = async(req, res, next) => {
    console.log(req.body);
    var roles = await Role.findOne({ name: "user" })
    var arrError = [];
    var user = null;
    if (!req.body.name) {
        arrError.push("Name is required!");
    } else if (!req.body.email) {
        arrError.push("Email is required!");
    } else if(user = await User.findOne({email:req.body.email})){
        arrError.push("Email is exist!");
    }
    else if (!req.body.password) {
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
                address: req.body.address,
                role_id: roles._id
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
        res.render('auth/register', {
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