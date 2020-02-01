import express from "express";
import controller from "./courses.controller";
const router = express.Router();

router.get("/", controller.get);
router.post("/", controller.create);
router.delete("/:studentId", controller.remove);
router.get("/best", controller.getBest);

export default router;
