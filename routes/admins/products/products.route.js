const express = require("express");
const route = express.Router();
const multer = require("multer"); // v1.0.5
const controller = require("../../../controllers/admins/products/products.controller");
// const validate = require("../../validate/products.validate");

route.get("/", controller.index);

module.exports = route;
