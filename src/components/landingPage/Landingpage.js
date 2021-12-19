import React from "react";
import "./landingpage.css";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

function Landingpage({ history }) {
  const handlingOnclick = () => {
    history.push({
      pathname: `/choosing`,
    });
  };
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
            <Link to="/registration">
              {" "}
              <button className="signup-btn">Signup</button>
            </Link>
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
          <button
            className="sign-btn"
            style={{ backgroundColor: "#EA0A0B" }}
            onClick={handlingOnclick}
          >
            Start Your Journey With Us
          </button>
          <button className="sign-btn">Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Landingpage);
