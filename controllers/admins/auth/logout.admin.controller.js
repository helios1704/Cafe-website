module.exports.logout = (req, res) => {
    // res.render('auth/register', {});
    res.clearCookie('adminId');
    res.redirect('/admin');
}

// module.exports.postRegister = (req, res) => {
//     res.redirect('/login');
// }