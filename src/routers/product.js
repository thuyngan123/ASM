import express from "express";
import { getAll, get, create, remove, update } from "../controllers/product";
import { checkPermission } from "../middlewares/checkPermission";

const router = express.Router();

router.get("/product", getAll);
router.get("/product/:id", get);
router.post("/product", create);
router.delete("/product/:id", remove);
router.put("/product/:id", update);

export default router;