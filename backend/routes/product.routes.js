import { Router } from "express";
import { getAllProducts,createProduct } from "../controller/product.controller.js";

const router = Router();

router.route("/products").get(getAllProducts)
router.route("/product/create").post(createProduct)

export default router;
