const express = require("express");
const router = express.Router();
const controller = require("./clients.controller");

router.get("/:id", controller.getOne);
router.post("/", controller.create);

module.exports = router;
