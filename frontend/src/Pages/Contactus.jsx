import React, { useState } from "react";
import "./ContactForm.css"; // Import the CSS file

const Contactus = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false); // For controlling the popup

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    
    // Simulate form submission success
    setIsSubmitted(true);

    // Clear form fields
    setFormData({
      name: "",
      email: "",
      number: "",
      message: "",
    });

    // Remove the popup after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="contact-page">
      <div className="contact-header">
        <img
          src="tastyfood.png" 
          alt="Header logo"
          className="header-image"
        />
        <h2>CONTACT US</h2>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <h3>SAY SOMETHING!</h3>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="enter your name"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="enter your email"
        />
        <input
          type="text"
          name="number"
          value={formData.number}
          onChange={handleChange}
          placeholder="enter your number"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="enter your message"
        ></textarea>
        <button type="submit">Send Message</button>
      </form>

      {/* Popup Message */}
      {isSubmitted && (
        <div className="popup">
          <div className="popup-content">
            <p>Message Sent Successfully!</p>
            <button onClick={() => setIsSubmitted(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contactus;
