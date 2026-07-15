import express from "express";
import { serviceController } from "../controllers/serviceController.js";

export const serviceRouter = express.Router();
serviceRouter.get("/api/services", serviceController);
