import mongoose from "mongoose";

const waiterRatingSchema = new mongoose.Schema({
  waiterName: String,
  rating: Number,
  comment: String,
});

export default mongoose.model("WaiterRating", waiterRatingSchema);
