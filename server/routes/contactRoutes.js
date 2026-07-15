import express from "express";
import { contactForm } from "../controllers/contactController.js";
import { validateSchema } from "../middlewares/validateMiddleware.js";
import { contactSchema } from "../validators/authValidatore.js";

export const contactRouter = express.Router();
contactRouter.post(
  "/api/form/contact",
  validateSchema(contactSchema),
  contactForm,
);
