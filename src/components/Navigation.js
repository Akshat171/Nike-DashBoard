import React from "react";

const Navigation = () => {
  return (
    <nav className="container">
      <div className="logo">
        <img src="/assets/brand_logo.png" alt="logo" />
      </div>
      <ul>
        <li href="/">Home</li>
        <li href="/">About</li>
        <li href="/">Store</li>
        <li href="/">Contact</li>
      </ul>

      <button>Signin</button>
    </nav>
  );
};

export default Navigation;
