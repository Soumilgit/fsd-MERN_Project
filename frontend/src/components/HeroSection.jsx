import React from "react";
import TopBar from "./TopBar";
import Navbar from "./Navbar";

const HeroSection = () => {

  
  return (
    <section className="heroSection" id="heroSection">
      <TopBar />
      <Navbar />
      <div className="container">
        <div className="textAndLogo">
          <h1 className="title">The Indian Spice</h1>
          <p className="subtitle">Loved and Trusted by our Customers</p>
           {/* <button className="view-menu-btn">View Our Menu</button> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
