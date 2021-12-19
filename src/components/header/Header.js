import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <div>
      <nav className="navbar-header">
        <Link to="/">
          {" "}
          <img src="/bkalkhadra97png.png" />
        </Link>
      </nav>
    </div>
  );
}

export default Header;
