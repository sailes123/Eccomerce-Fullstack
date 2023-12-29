import { Router } from "express";
import { forgotPassword, logOut, loginUser, registerUser, resetPassword } from "../controller/userController.js";

const router = Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").post(logOut);

router.route("/password/forgot").post(forgotPassword);
router.route("/password/reset/:id").put(resetPassword);

export default router;
