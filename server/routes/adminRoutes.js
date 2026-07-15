import express from "express";
import {
  deleteContact,
  deleteUser,
  editUser,
  getAllContacts,
  getAllUsers,
  updateUser,
} from "../controllers/adminController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { adminMiddleware } from "../middlewares/adminMiddleware.js";
export const adminRouter = express.Router();
adminRouter.get(
  "/api/admin/users",
  authMiddleware,
  adminMiddleware,
  getAllUsers,
);
adminRouter.get(
  "/api/admin/contacts",
  authMiddleware,
  adminMiddleware,
  getAllContacts,
);

adminRouter.get(
  "/api/admin/users/edit/:id",
  authMiddleware,
  adminMiddleware,
  editUser,
);
adminRouter.put(
  "/api/admin/users/update/:id",
  authMiddleware,
  adminMiddleware,
  updateUser,
);
adminRouter.delete(
  "/api/admin/users/delete/:id",
  authMiddleware,
  adminMiddleware,
  deleteUser,
);
adminRouter.delete(
  "/api/admin/contacts/delete/:id",
  authMiddleware,
  adminMiddleware,
  deleteContact,
);
