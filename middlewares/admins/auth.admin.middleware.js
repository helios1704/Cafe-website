var User = require('../../models/user.model');
var Role = require('../../models/role.model');

module.exports.requireAuth = async(req, res, next) => {

    // console.log(req.cookies, req.signedCookies);
    if (!req.signedCookies.adminId) {
        res.redirect('/admin/login');
        return;
    }

    user = await User.findById(req.signedCookies.adminId);
    if (!user) {
        res.redirect('/admin/login');
        return;
    } else {
        role = await Role.findOne({ name: "admin" });
        // console.log(user);
        if (user.role_id != role._id) {
            res.clearCookie('adminId');
            res.redirect('/admin/login');
            return;
        }
    }
    res.locals.user = user;
    next();
}