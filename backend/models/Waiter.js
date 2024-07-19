import mongoose from "mongoose";

const WaiterSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rating: { type: Number, default: 0 },
  ratingsCount: { type: Number, default: 0 },
});

export default mongoose.model("Waiter", WaiterSchema);
