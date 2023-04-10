import express from "express";
import { get, create, getAll } from "../controllers/category";
import { checkPermission } from "../middlewares/checkPermission"

const router = express.Router();

router.get("/categories", getAll)
router.get("/categories/:id", get);
router.post("/categories", checkPermission, create);

export default router
