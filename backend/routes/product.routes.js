import { Router } from "express";
import {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductsDetails,
} from "../controller/product.controller.js";
import { authorizeRoles, isAuthenticatedUser } from "../middleware/auth.js";

const router = Router();

router.route("/products").get(getAllProducts);
router
  .route("/admin/product/create")
  .post(isAuthenticatedUser, authorizeRoles("admin"), createProduct);
router
  .route("/admin/product/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateProduct)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteProduct)

  router.route("/product/:id").get(getProductsDetails);


export default router;
