const express = require("express");
const route = express.Router();
const multer = require("multer"); // v1.0.5
const controller = require("../../../controllers/admins/users/users.controller");
// const validate = require("../validate/products.validate");

// var upload = multer({ dest: "public/uploads/" });
route.get("/", controller.index);
route.get("/data-table", controller.data_table);
// route.get("/create", controller.create);
// route.post("/", upload.single("image"), validate.store, controller.store);
// route.get("/:id", controller.show);
// route.patch("/:id/update", controller.update);
// route.delete("/:id", controller.delete);
module.exports = route;