import React from "react";

const HomePage = () => {
  return (
    <div className="p-3 mb-4 bg-light rounded-3">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">Welcome to ShopApp</h1>
        <p className="col-md-8 fs-4">
          Discover amazing products at unbeatable prices. Browse our collection
          and find exactly what you need.
        </p>
        <button className="btn btn-primary btn-lg" type="button">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default HomePage;
