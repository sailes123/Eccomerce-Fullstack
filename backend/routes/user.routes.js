import { Router } from "express";
import { logOut, loginUser, registerUser } from "../controller/userController.js";

const router = Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").post(logOut);

export default router;
