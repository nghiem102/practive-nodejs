import { Router } from "express";
import { search } from "../controllers/product";

const router = Router()

router.get('/search?q=value',search)

export default router