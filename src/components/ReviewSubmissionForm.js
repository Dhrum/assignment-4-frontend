import React, { useState } from 'react';
import './ReviewSubmissionForm.css';

const ReviewSubmissionForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', review: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <section className="review-submission">
      <h2>Submit Your Review</h2>
      <form className="review-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="review"
          placeholder="Your Review"
          value={formData.review}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Submit Review</button>
      </form>
    </section>
  );
};

export default ReviewSubmissionForm;
