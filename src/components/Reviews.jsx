import React, { useState } from 'react';

const sampleReviews = [
  {
    id: 1,
    user: "John Doe",
    rating: 5,
    comment: "Excellent product! Great quality and fast delivery.",
    date: "2024-01-15"
  },
  {
    id: 2,
    user: "Sarah Smith",
    rating: 4,
    comment: "Good value for money. Would recommend to others.",
    date: "2024-01-10"
  },
  {
    id: 3,
    user: "Mike Johnson",
    rating: 5,
    comment: "Amazing quality! Exceeded my expectations.",
    date: "2024-01-08"
  },
  {
    id: 4,
    user: "Emily Davis",
    rating: 4,
    comment: "Nice product, quick shipping. Very satisfied.",
    date: "2024-01-05"
  }
];

export default function Reviews({ productId }) {
  const [showReviews, setShowReviews] = useState(false);
  const [newReview, setNewReview] = useState({ rating: 5, comment: '' });

  const renderStars = (rating) => {
    return '⭐'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  const averageRating = sampleReviews.reduce((sum, review) => sum + review.rating, 0) / sampleReviews.length;

  const handleSubmitReview = (e) => {
    e.preventDefault();
    // In a real app, you'd submit to backend
    alert('Review submitted successfully!');
    setNewReview({ rating: 5, comment: '' });
  };

  return (
    <div className="reviews-section">
      <div className="reviews-header">
        <button 
          className="reviews-toggle-btn"
          onClick={() => setShowReviews(!showReviews)}
        >
          📝 Reviews & Ratings ({sampleReviews.length})
        </button>
        <div className="rating-summary">
          <span className="average-rating">{averageRating.toFixed(1)}</span>
          <span className="stars">{renderStars(Math.round(averageRating))}</span>
        </div>
      </div>

      {showReviews && (
        <div className="reviews-content">
          <div className="reviews-list">
            <h3>Customer Reviews</h3>
            {sampleReviews.map((review) => (
              <div key={review.id} className="review-item">
                <div className="review-header">
                  <span className="reviewer-name">{review.user}</span>
                  <span className="review-date">{review.date}</span>
                </div>
                <div className="review-rating">
                  {renderStars(review.rating)}
                </div>
                <p className="review-comment">{review.comment}</p>
              </div>
            ))}
          </div>

          <div className="add-review">
            <h3>Write a Review</h3>
            <form onSubmit={handleSubmitReview} className="review-form">
              <div className="rating-input">
                <label>Rating:</label>
                <select 
                  value={newReview.rating} 
                  onChange={(e) => setNewReview({...newReview, rating: parseInt(e.target.value)})}
                >
                  <option value={5}>5 Stars ⭐⭐⭐⭐⭐</option>
                  <option value={4}>4 Stars ⭐⭐⭐⭐☆</option>
                  <option value={3}>3 Stars ⭐⭐⭐☆☆</option>
                  <option value={2}>2 Stars ⭐⭐☆☆☆</option>
                  <option value={1}>1 Star ⭐☆☆☆☆</option>
                </select>
              </div>
              <div className="comment-input">
                <label>Comment:</label>
                <textarea
                  value={newReview.comment}
                  onChange={(e) => setNewReview({...newReview, comment: e.target.value})}
                  placeholder="Share your experience..."
                  required
                />
              </div>
              <button type="submit" className="submit-review-btn">Submit Review</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}