import Rating from "../models/Rating.js";

export const rateOrder = async (req, res) => {
  const { userId, orderId, rating, comment } = req.body;

  const newRating = new Rating({
    userId,
    orderId,
    rating,
    comment,
  });

  try {
    const savedRating = await newRating.save();
    res.status(201).json(savedRating);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const getUserRatings = async (req, res) => {
  const { userId } = req.params;

  try {
    const ratings = await Rating.find({ userId });
    res.json(ratings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
