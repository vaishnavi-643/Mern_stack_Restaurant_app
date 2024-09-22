import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
            At Resto, we bring authentic flavors right to your table, crafted with care and passion. Our commitment to fresh, locally-sourced ingredients and traditional cooking techniques sets us apart, ensuring that each dish offers a vibrant and satisfying experience. Whether you're enjoying a quick bite or a leisurely meal, our menu is designed to cater to all tastes, blending bold flavors with time-honored recipes. At Taco Palace, we believe in creating more than just food—we create unforgettable moments filled with warmth, hospitality, and a love for delicious, handcrafted meals. Come join us for a culinary journey that delights all the senses.
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="/about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;