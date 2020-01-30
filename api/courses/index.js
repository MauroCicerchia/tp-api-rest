const express = require("express");
const router = express.Router();
const controller = require("./students.controller");

router.get("/", controller.get);
router.post("/", controller.create);
router.get("/:id", controller.getOne);
router.delete("/:id", controller.remove);
router.use("/:id/students", require("./students"));

module.exports = router;
