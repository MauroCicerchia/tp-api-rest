const express = require("express");
const router = express.Router();
const controller = require("./courses.controller");

router.get("/", controller.get);
router.post("/", controller.create);
router.delete("/:studentId", controller.remove);
router.get("/best", controller.getBest);

module.exports = router;
