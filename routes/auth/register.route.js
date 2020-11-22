var express = require('express');
var router = express.Router();
var controller = require('../../controllers/register.controller');
var validate = require('../../validate/auth/register.validate');


router.get('/', controller.register)
router.post('/', validate.register, controller.postRegister);
// router.post('/', controller.postRegister);

module.exports = router;
s