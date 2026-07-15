import express from "express";
import { authRouter } from "./routes/authRouter.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import cors from "cors";
import { errorMiddleware } from "./middlewares/errorMiddleware.js";
import { contactRouter } from "./routes/contactRoutes.js";
import { serviceRouter } from "./routes/serviceRoutes.js";
import { adminRouter } from "./routes/adminRoutes.js";
dotenv.config();
const app = express();

app.use(express.json());
let corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET,PUT,PATCH,POST,DELETE",
  Credentials: true,
};
app.use(cors(corsOptions));
// console.log(cors);

app.use(authRouter);
app.use(contactRouter);
app.use(serviceRouter);
app.use(adminRouter);

app.use(errorMiddleware);
const PORT = process.env.PORT || 6000;
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`server is running on port http://localhost:${PORT}`);
  });
});
