import Review from '../models/Review.js';

export const addReview = async (req, res) => {
  const { productId, rating, comment } = req.body;

  try {
    const review = await Review.create({
      product: productId,
      user: req.user._id,
      rating,
      comment,
    });

    res.status(201).json(review);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProductReviews = async (req, res) => {
  try {
    const reviews = await Review.find({ product: req.params.id }).populate('user', 'name');
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
