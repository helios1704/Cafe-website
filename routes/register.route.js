var express = require("express");
var route = express.Router();
var controller = require("../controllers/register.controller");
var validate = require("../validate/register.validate");
route.get("/", controller.register);
// route.post("/", validate.register, controller.postRegister);

module.exports = route;
