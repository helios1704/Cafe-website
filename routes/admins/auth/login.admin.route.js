const express = require("express");
const route = express.Router();

const controller = require("../../../controllers/admins/auth/login.admin.controller");
const validate = require("../../../validate/admins/auth/login.admin.validate");

// var upload = multer({ dest: "public/uploads/" });
route.get("/login", controller.login);
route.post("/login", validate.postLogin, controller.postLogin);
route.get("/", controller.index);
module.exports = route;