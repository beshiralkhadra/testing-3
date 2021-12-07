import React from "react";
import "./landingpage.css";
import { Link } from "react-router-dom";

function Landingpage() {
  return (
    <div
      className="landing-page"
      style={{
        background: ` rgba(0, 0, 0, 0.7) url("/car.jpg")`,
        backgroundSize: "cover",
      }}
    >
      <nav className="navbar-landing">
        <img src="/bkalkhadra97png.png" />

        <ul>
          <li>
            <button className="login-btn">Login</button>
          </li>
          <li>
            <button className="signup-btn">Signup</button>
          </li>
        </ul>
      </nav>
      <div className="landing-container">
        <h1 className="title-about">About Us</h1>

        <article className="text-about">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat
        </article>
        <div className="about-btns">
          <button className="sign-btn" style={{ backgroundColor: "#EA0A0B" }}>
            Contact Us
          </button>
          <button className="sign-btn">Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default Landingpage;
