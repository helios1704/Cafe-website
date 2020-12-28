module.exports.logout = (req, res) => {
    // res.render('auth/register', {});
    res.clearCookie('userId');
    res.clearCookie('userName');
    res.redirect('/');
}

// module.exports.postRegister = (req, res) => {
//     res.redirect('/login');
// }