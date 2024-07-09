import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  customerName: String,
  items: [{ type: mongoose.Schema.Types.ObjectId, ref: "Menu" }],
  totalAmount: Number,
});

export default mongoose.model("Order", orderSchema);
