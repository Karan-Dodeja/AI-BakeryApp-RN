import React, { useState, useEffect } from 'react';
import axios from '../../api/api';

const Reviews = ({ productId }) => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ rating: 5, comment: '' });

  useEffect(() => {
    const fetchReviews = async () => {
      const { data } = await axios.get(`/products/${productId}/reviews`);
      setReviews(data);
    };
    fetchReviews();
  }, [productId]);

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`/products/${productId}/review`, newReview);
    setNewReview({ rating: 5, comment: '' });
  };

  return (
    <div>
      <h3>Reviews</h3>
      <ul>
        {reviews.map((review) => (
          <li key={review._id}>
            <strong>{review.user.name}</strong>
            <span>{review.rating} ★</span>
            <p>{review.comment}</p>
          </li>
        ))}
      </ul>
      <form onSubmit={handleReviewSubmit}>
        <label>
          Rating:
          <select value={newReview.rating} onChange={(e) => setNewReview({ ...newReview, rating: e.target.value })}>
            {[1, 2, 3, 4, 5].map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </label>
        <label>
          Comment:
          <textarea value={newReview.comment} onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })} />
        </label>
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
};

export default Reviews;
