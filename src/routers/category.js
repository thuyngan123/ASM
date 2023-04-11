import express from "express";
import { get, create, getAll, remove } from "../controllers/category";
import { checkPermission } from "../middlewares/checkPermission"

const router = express.Router();

router.get("/categories", getAll)
router.get("/categories/:id", get);
router.post("/categories", create);
router.delete("/categories/:id", remove)

export default router
