import { User } from "../models/userModel.js";
// import bcrypt from "bcrypt";
export const homePage = (req, res) => {
  try {
    res.status(200).send("Welcome to the home page");
  } catch (error) {
    res.status(404).send("Page Not Found");
  }
};
export const aboutPage = (req, res) => {
  try {
    res.status(200).send("About Page");
  } catch (error) {
    res.status(404).send("Page Not Found");
  }
};

//register page controller
export const registerPage = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;

    const ExistingUser = await User.findOne({ email });

    if (ExistingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      username,
      email,
      phone,
      password,
    });
    res.status(201).json({
      message: "User Registered",
      token: await newUser.generateAuthToken(),
      userId: newUser._id.toString(),
    });
  } catch (error) {
    // res.status(500).send("Internal Server Error");
    console.log(error);
    next(error);
  }
};

//login page controller
export const loginPage = async (req, res) => {
  try {
    const { email, password } = req.body;

    const existingUSer = await User.findOne({ email });

    if (!existingUSer) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    // const userMatch = await bcrypt.compare(password, existingUSer.password);
    const userMatch = await existingUSer.comparePassword(password);

    if (userMatch) {
      res.status(200).json({
        message: "Login Successful",
        token: await existingUSer.generateAuthToken(),
        userId: existingUSer._id.toString(),
      });
    } else {
      res.status(401).json({ message: "Invalid Credentials" });
    }
  } catch (error) {
    // res.status(500).send("Internal Server Error");
    next(error);
  }
};

//get the user data controller
export const userGet = async (req, res) => {
  try {
    const userData = req.user;
    console.log(userData);

    res.status(200).json({ userData });
  } catch (error) {
    console.log(error);
  }
};
