import jwt from "jsonwebtoken";
import { User } from "../models/userModel.js";

export const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    res.status(401).json({ msg: "Unauthorized http , Token not provided" });
  }
  const jwtToken = token.replace("Bearer ", " ").trim();
  console.log("token from log", jwtToken);

  try {
    const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET);
    const userData = await User.findOne({ email: isVerified.email }).select({
      password: 0,
    });
    console.log(userData);
    req.user = userData;
    req.token = token;
    req.userId = userData._id.toString();
    // req.user(userData);
    // console.log(userData);
    // req.user = userData;

    next();
  } catch (error) {
    res.status(401).json({ msg: "Unauthorized http , Inavlid Token" });
  }
};
