import React from "react";
import { Link } from "react-router-dom"; 
import "./SubscribeSection.css";

const SubscribeSection = () => {
  return (
    <div className="subscribe-section">
      <h2 className="subscribe-title">Get News & Offers</h2>
      <Link to="/contact-us">
        <button className="subscribe-button">Contact Us</button>
      </Link>
    </div>
  );
};

export default SubscribeSection;
