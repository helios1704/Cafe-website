const express = require("express");
const route = express.Router();
const multer = require("multer"); // v1.0.5
const controller = require("../../controllers/users/histories.controller");
// const validate = require("../validate/products.validate");

// var upload = multer({ dest: "public/uploads/" });
route.get("/", controller.index);

module.exports = route;