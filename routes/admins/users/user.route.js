const express = require("express");
const route = express.Router();
const multer = require("multer"); // v1.0.5
const controller = require("../../../controllers/admins/users/users.controller");
// const validate = require("../validate/products.validate");

// var upload = multer({ dest: "public/uploads/" });
route.get("/", controller.index);
route.get("/data-table", controller.data_table);
route.get("/histories/:id", controller.showHistories);
route.get("/histories/id/data-table", controller.data_tableHistories);

// route.delete("/:id", controller.delete);

module.exports = route;