import { Router } from "express";
import { getAllProducts,createProduct, updateProduct, deleteProduct, getProductsDetails } from "../controller/product.controller.js";
import { authorizeRoles, isAuthenticatedUser } from "../middleware/auth.js";

const router = Router();

router.route("/products").get(getAllProducts)
router.route("/product/create").post(isAuthenticatedUser,authorizeRoles("admin"),createProduct)
router.route("/product/:id").put(updateProduct).delete(deleteProduct).get(getProductsDetails)

export default router;
