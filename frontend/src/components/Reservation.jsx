import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Reservation = () => {
  const [fullName, setFullName] = useState(""); // Use a single state for full name
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [numberOfSeats, setNumberOfSeats] = useState(0); // New state for number of seats
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleReservation = async (e) => {
    e.preventDefault();
    const [firstName, lastName] = fullName.split(" "); // Split full name into first and last
    try {
      const { data } = await axios.post(
        "http://localhost:5173/reservation/send",
        { firstName, lastName, email, phone, date, numberOfSeats }, // Use the correct state variable
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success(data.message);
      // Clear form fields
      setFullName("");
      setEmail("");
      setNumberOfSeats(0);
      setPhone("");
      setDate("");
      navigate("/success");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <section className="reservation" id="reservation">
      <div className="container">
        <div className="banner">
          <img src="/reservation.png" alt="res" />
        </div>
        <div className="banner">
          <div className="reservation_form_box">
            <h1>MAKE A RESERVATION</h1>
            <form>
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="date"
                  placeholder="Date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
                <input
                  type="number"
                  placeholder="Number of Seats"
                  value={numberOfSeats} // Use numberOfSeats state
                  onChange={(e) => setNumberOfSeats(e.target.value)} // Update the state correctly
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="email_tag"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="tel" // Change type to "tel" for phone input
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <button type="submit" onClick={handleReservation}>
                Make a Reservation{" "}
               
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
