var express = require('express');
var router = express.Router();
var controller = require('../../controllers/login.controller');
var validate = require('../../validate/auth/login.validate');
router.get('/', controller.login)
router.post('/', validate.postLogin, controller.postLogin);
// router.post('/', controller.postLogin);

module.exports = router;