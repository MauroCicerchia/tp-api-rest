import express from "express";
import controller from "./courses.controller";
import studentsController from "./students.controller";
const router = express.Router();

router.get("/", controller.get);
router.post("/", controller.create);
router.get("/:id", controller.getOne);
router.delete("/:id", controller.remove);

router.get("/:id/students", studentsController.get);
router.post("/:id/students", studentsController.create);
router.delete("/:id/students/:studentId", studentsController.remove);
router.get("/:id/students/best", studentsController.getBest);

export default router;
