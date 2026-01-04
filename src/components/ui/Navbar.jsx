import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand small" to="/">
            Shopify Lite
          </Link>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link small" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link small" to="/products">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link small" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link small" to="/cart">
                Cart
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
