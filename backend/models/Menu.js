import mongoose from "mongoose";

const menuSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
});

export default mongoose.model("Menu", menuSchema);
