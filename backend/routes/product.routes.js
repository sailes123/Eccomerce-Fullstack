import { Router } from "express";
import { getAllProducts,createProduct, updateProduct } from "../controller/product.controller.js";

const router = Router();

router.route("/products").get(getAllProducts)
router.route("/product/create").post(createProduct)
router.route("/product/:id").put(updateProduct)

export default router;
