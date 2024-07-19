import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";

import dishRoutes from "./routes/dishes.js";
import orderRoutes from "./routes/orders.js";
import userRoutes from "./routes/users.js";
import waiterRoutes from "./routes/waiters.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose
  .connect("mongodb://localhost:27017/restaurant", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.use("/api/dishes", dishRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/users", userRoutes);
app.use("/api/waiters", waiterRoutes);

const port = 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
