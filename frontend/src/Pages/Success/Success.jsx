import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 
 // Import useNavigate from react-router-dom

const Success = () => {
  const [countdown, setCountdown] = useState(10);
  const navigate = useNavigate(); // Hook for navigation
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const timeoutId = setInterval(() => {
      setCountdown((preCount) => {
        if (preCount === 1) {
          clearInterval(timeoutId);
          setShowMessage(true);
          setTimeout(() => {
            navigate("/home"); // Redirect to the '/home' page after 3 seconds
          }, 3000); // Redirect after showing success message for 3 seconds
        }
        return preCount - 1;
      });
    }, 1000);
    return () => clearInterval(timeoutId);
  }, [navigate]);

  // Function to handle navigation to the homepage
  const handleBackToHome = () => {
    navigate("/home"); // Navigate to the home route on button click
  };

  return (
    <section className="notFound">
      <div className="container">
        <img src="/sandwich.png" alt="success" />
        <h1>Booking Successful!</h1>
        {showMessage ? (
          <p>Your booking has been confirmed. Thank you for choosing us!</p>
        ) : null}
        {/* Button to navigate back to the homepage */}
        <button onClick={handleBackToHome}>
          Back to Home
        </button>
      </div>
    </section>
  );
};

export default Success;
