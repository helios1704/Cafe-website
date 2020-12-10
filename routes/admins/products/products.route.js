const express = require("express");
const route = express.Router();
const multer = require("multer"); // v1.0.5
const controller = require("../../../controllers/admins/products/products.controller");
var upload = multer({ dest: "public/uploads/" });
const validate = require("../../../validate/admins/products/products.validate");

route.get("/", controller.index);
route.get("/data-tables", controller.data_table);
route.get("/create", controller.create);
route.post("/", upload.single("image"), validate.store, controller.store);
route.get("/:id", controller.show);
route.patch("/:id/update", controller.update);
route.delete("/:id", controller.delete);
module.exports = route;
