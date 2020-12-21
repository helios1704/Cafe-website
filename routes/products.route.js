const express = require("express");
const route = express.Router();
const multer = require("multer"); // v1.0.5
const controller = require("../controllers/products.controller");

route.get("/", controller.index);
module.exports = route;
