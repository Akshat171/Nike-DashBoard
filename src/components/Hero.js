import React from "react";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-contain">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="hero-button">
          <button>Shop-Now</button>
          <button className="secondary-btn">Category</button>
        </div>

        <div className="shopping">
          <p>Also Available on</p>
          <div className="brand-icons">
            <img src="/assets/amazon.png" alt="amazon" />
            <img src="/assets/flipkart.png" alt="flipkart" />
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="/assets/shoe.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
