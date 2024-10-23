import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Success = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 3000); // Redirect to home page after 3 seconds
  }, []);

  return (
    <>
      <section className="success">
        <div className="container">
          <img src="/success.png" alt="success" />
          <h1>Booking Successful!</h1>
          <p>Your booking has been confirmed. Thank you for choosing us!</p>
          <Link to={"/"}>
            Back to Home <HiOutlineArrowNarrowRight />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Success;
