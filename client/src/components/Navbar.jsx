import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

const Navbar = () => {
  return (
    <div className="nav">
      <div>
        <span>
          <Link to="/" className="link" id="logo">
            BestPriceShop
          </Link>
        </span>
      </div>
      <div className="links">
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/About" className="link">
          About
        </Link>
        <Link to="/Signin" className="link">
          Sign in
        </Link>
        <Link to="/register" className="link">
          Sign up
        </Link>
        <Link to="/profile" className="link" id="logo">
          Profile
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
