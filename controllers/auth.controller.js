module.exports.login = (req, res) => {
    res.render('auth/login', {});
}

module.exports.postLogin = (req, res) => {
    res.redirect('/');
}