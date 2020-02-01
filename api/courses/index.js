import express from "express";
import controller from "./courses.controller";
import studentsRouter from "./students";
const router = express.Router();

router.get("/", controller.get);
router.post("/", controller.create);
router.get("/:id", controller.getOne);
router.delete("/:id", controller.remove);
router.use("/:id/students", studentsRouter);

export default router;
