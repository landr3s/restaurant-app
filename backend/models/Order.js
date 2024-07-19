// models/Order.js
import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  clientEmail: { type: String, required: true },
  dishes: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Dish", required: true },
  ],
  createdAt: { type: Date, default: Date.now },
});

const Order = mongoose.model("Order", OrderSchema);

export default Order;
