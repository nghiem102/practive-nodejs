import { create, get, getAll, productByCategory, remove, update } from "../controllers/category";
import { Router } from "express";


const router = Router()

router.get("/category",getAll)
router.get("/category/:id",get)
router.post("/category",create)
router.delete("/category/:id",remove)
router.put("/category/:id",update)
router.get("/category/products/:id",productByCategory)

export default router