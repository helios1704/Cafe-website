var User = require('../models/user.model');


module.exports.login = (req, res) => {
    res.render('auth/login', {});
}

module.exports.postLogin = async(req, res) => {
    // console.log(req.signedCookies.userId);
    // user = await User.findById(req.signedCookies.userId);
    // if (!user) {
    //     res.json(user);
    // }

    // // res.send(user.id)
    res.redirect('/');

}