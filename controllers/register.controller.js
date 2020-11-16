module.exports.register = (req, res) => {
    res.render('auth/register', {});
}

module.exports.postRegister = (req, res) => {
    res.redirect('/login');
}