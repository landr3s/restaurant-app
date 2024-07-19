import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  items: [
    {
      dish: { type: mongoose.Schema.Types.ObjectId, ref: "Dish" },
      quantity: Number,
    },
  ],
  total: Number,
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Order", OrderSchema);
