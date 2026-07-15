import { Contact } from "../models/contactModel.js";
import { User } from "../models/userModel.js";

export const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find().select({ password: 0 });

    if (!users || users.length === 0) {
      return res.status(404).json({ message: "No user found" });
    }

    return res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

//get all contacts logic part
export const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    if (!contacts || contacts.length === 0) {
      return res.status(404).json({ message: "No user found" });
    }
    res.status(200).json(contacts);
  } catch (error) {
    next(error);
  }
};

//delete user logic part
export const deleteUser = async (req, res, next) => {
  try {
    const id = req.params.id;

    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    return res.status(200).json({
      message: "User deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};

//delet contact logic part
export const deleteContact = async (req, res, next) => {
  try {
    const id = req.params.id;

    const deletedContact = await Contact.findByIdAndDelete(id);
    if (!deletedContact || deletedContact.length === 0) {
      return res.status(404).json({ message: "contact not found found" });
    }
    return res.status(200).json({ message: "Conact deleted succcessfully" });
  } catch (error) {
    next(error);
  }
};

//edit user functionality
export const editUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({ _id: id }, { password: 0 });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

//update user logic
export const updateUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const updateUser = await User.findByIdAndUpdate(id, data, { new: true });
    if (!updateUser) {
      return res.status(404).json({ message: "User not found" });
    }
    return res
      .status(200)
      .json({ message: "User updated successfully", updateUser });
  } catch (error) {
    next(error);
  }
};
