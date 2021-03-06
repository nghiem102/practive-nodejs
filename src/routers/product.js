import { create, get, getAll, limit, remove, search, update } from "../controllers/product";
import { userById } from "../controllers/user";
import { isAdmin, isAuth, requiredSignin } from "../middlewares/auth";

const { Router } = require("express");

const router = Router()

router.get("/products",getAll)
router.get("/products/:id",get)
router.post("/products/:userId",requiredSignin,isAuth,isAdmin, create)
router.delete("/products/:id",remove)
router.put("/products/:id",update)
router.get("/search",search)
router.get("/limit",limit)

router.param('userId',userById)

export default router