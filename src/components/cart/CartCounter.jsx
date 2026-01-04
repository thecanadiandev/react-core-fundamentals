import React from "react";
import { Link } from "react-router";

const CartCounter = () => {
  return (
    <Link className="nav-link small" to="/cart">
      <svg width="24" height="24" fill="white" viewBox="0 0 16 16">
        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
      </svg>
      <span
        className="position-absolute start-90 translate-middle badge rounded-pill bg-danger"
        style={{ fontSize: "0.7rem" }}
      >
        0
      </span>
    </Link>
  );
};

export default CartCounter;
