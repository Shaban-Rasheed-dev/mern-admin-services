import express from "express";
import {
  aboutPage,
  homePage,
  loginPage,
  registerPage,
  userGet,
} from "../controllers/authController.js";
import { validateSchema } from "../middlewares/validateMiddleware.js";
import { loginSchema, signupSchema } from "../validators/authValidatore.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
export const authRouter = express.Router();
authRouter.get("/", homePage);
authRouter.get("/api/about", aboutPage);

authRouter.post(
  "/api/auth/register",
  validateSchema(signupSchema),
  registerPage,
);
authRouter.post("/api/auth/login", validateSchema(loginSchema), loginPage);
authRouter.get("/api/auth/user", authMiddleware, userGet);
