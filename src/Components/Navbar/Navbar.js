import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
        <div className="logo">
      <Link to="/">
          <h2>Logo</h2>
      </Link>
        </div>
      <div className="navItemsContainer">
        <Link to="/category">
          <div className="navItem">
            <h3>Categories</h3>
          </div>
        </Link>
        <Link to="/authentication">
          <div className="navItem">
            <h3>Auth</h3>
          </div>
        </Link>
        <Link to="/test">
          <div className="navItem">
            <h3>Test</h3>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
