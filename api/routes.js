const express = require("express");
const router = express.Router();

router.use("/courses", require("./courses"));
router.use("/clients", require("./clients"));

module.exports = router;
