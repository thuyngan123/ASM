import express from "express";
import { getAll, get, create, remove, update } from "../controllers/product";
import { checkPermission } from "../middlewares/checkPermission";

const router = express.Router();

router.get("/product", getAll);
router.get("/product/:id", get);
router.post("/product", checkPermission, create);
router.delete("/product/:id", checkPermission, remove);
router.put("/product/:id", checkPermission, update);

export default router;