const express = require("express");
const route = express.Router();

const controller = require("../../../controllers/admins/auth/login.admin.controller");
const validate = require("../../../validate/admins/auth/login.admin.validate");
const logoutController =require("../../../controllers/admins/auth/logout.admin.controller")

// var upload = multer({ dest: "public/uploads/" });
route.get("/login", controller.login);
route.post("/login", validate.postLogin, controller.postLogin);
route.get("/logout", logoutController.logout);
route.get("/", controller.index);
module.exports = route;