import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container flex flex-col md:flex-row items-center max-w-6xl mx-auto px-4">
          <div className="banner md:w-2/5 mb-8 md:mb-0">
            <img src="about.png" alt="Restaurant interior" className="w-full h-auto" />
          </div>
          <div className="banner md:w-3/5 md:pl-12">
            <div className="top">
              <h1 className="heading text-4xl font-serif mb-4">Welcome to Indian Spices</h1>
            </div>
            <p className="mid mb-6 font-['Jost',sans-serif] text-base">
              Our restaurant is more than just a palace to eat-it's a destination
              where every dish is crafted with care and every experience is
              designed to delight. We pride ourselves on offering a menu
              that brings together the finest ingredients, innovative recipes,
              and a touch of creativity to create dishes that are as memorable
              as they are delicious.
            </p>
            <Link 
              to="/about-read-more"
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded mt-4"
            >
              Read More
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
