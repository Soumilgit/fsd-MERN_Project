import React, { useState } from 'react';
import './AboutReadMore.css';

const AboutReadMore = () => {
  const [showMoreContent, setShowMoreContent] = useState(false);

  const toggleContent = () => {
    setShowMoreContent(!showMoreContent);
  };

  return (
    <section className="about-section">
      <div className="about-container">
        {/* Left Side Image */}
        <div className="image-container">
          <img src="about.png" alt="Restaurant interior" className="restaurant-image" />
        </div>

        {/* Right Side Text Content */}
        <div className="about-content">
          <h1 className="welcome-title">Welcome to Indian Spices</h1>
          <p className="intro-paragraph">
            Our restaurant is more than just a place to eat—it's a destination where every dish is crafted with care and every experience is designed to delight. We pride ourselves on offering a menu that brings together the finest ingredients, innovative recipes, and a touch of creativity to create dishes that are as memorable as they are delicious.
          </p>
          <p className="invitation-text">
            We invite you to come and experience our unique blend of flavors, hospitality, and passion. This is where great food and great moments come together. Welcome to Indian Spices, where every visit feels like coming home.
          </p>

          <h2 className="client-reviews-title">CLIENT’S REVIEWS</h2>
          <div className="reviews-container">
            <div className="review-box">
              <img src="rohan.png" alt="Rohan" className="client-photo"/>
              <h3 className="client-name">Rohan</h3>
              <p className="client-review">
                “The ambiance was perfect for a relaxed evening with friends, featuring warm and soft lighting that set the mood just right.”
              </p>
            </div>
            <div className="review-box">
              <img src="anish.png" alt="Anish" className="client-photo"/>
              <h3 className="client-name">Anish</h3>
              <p className="client-review">
                “Their focus on locally sourced ingredients and sustainable dining practice is commendable, making this not just a meal, but a socially conscious experience.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutReadMore;
