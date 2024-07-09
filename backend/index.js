// index.js
import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/authRoutes.js";

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(cookieParser());

// Conexión a MongoDB
mongoose.connect("mongodb://localhost:27017/restaurantDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Rutas
app.use("/api/auth", authRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
