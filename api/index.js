import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import userAuth from "./routes/auth.route.js";
dotenv.config();
const app = express();
mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("DB CONNECTD"))
  .catch((err) => {
    console.log(err);
  });

//allows input as a json to the backend
app.use(express.json());

app.listen(3000, () => {
  console.log("Server Listening on 3000");
});

app.use("/api/user", userRoutes);
app.use("/api/auth", userAuth);
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal server error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
