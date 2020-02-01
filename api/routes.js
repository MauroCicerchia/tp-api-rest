import express from "express";
import clientRouter from "./clients";
import coursesRouter from "./courses";
const router = express.Router();

router.use("/courses", coursesRouter);
router.use("/clients", clientRouter);

export default router;
