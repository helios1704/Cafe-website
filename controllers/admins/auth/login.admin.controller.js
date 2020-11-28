const User = require("../../../models/user.model");


module.exports.login = (req, res) => {
    res.render('admins/auth/login', {});
}

module.exports.postLogin = async(req, res) => {
    res.redirect('/admin/users');
}

module.exports.index = (req, res) => {
    res.redirect('/admin/users')
}