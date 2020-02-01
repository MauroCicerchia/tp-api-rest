import express from "express";
import controller from "./clients.controller";
const router = express.Router();

router.get("/:id", controller.getOne);
router.post("/", controller.create);

export default router;
