import React from "react";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="p-3 mb-4 bg-light rounded-3">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">Oops! Something went wrong.</h1>
        <p className="col-md-8 fs-4">Navigate back to Home</p>
        <Link className="btn btn-primary btn-lg" to="/">
          Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
