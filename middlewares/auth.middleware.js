var User = require('../models/user.model');

module.exports.requireAuth = async(req, res, next) => {
    // console.log(req.cookies, req.signedCookies);
    if (!req.signedCookies.userId) {
        res.redirect('/login');
        return;
    }

    user = await User.findById(req.signedCookies.userId);
    if (!user) {
        res.redirect('/login');
        return;
    }
    res.locals.user = user;

}