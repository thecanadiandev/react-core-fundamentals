import React from "react";
import { Link } from "react-router";

const ProductItem = ({ item, addItemsToCart }) => {
  return (
    <div>
      <li
        className={`list-group-item d-flex justify-content-between align-items-center ${
          item.isAvailable ? "" : "text-muted"
        }`}
      >
        <Link to={`/products/${item.id}`} className="text-decoration-none">
          <span>{item.name}</span>
        </Link>
        <div className="d-flex align-items-center gap-2">
          <span className="badge bg-secondary rounded-pill">
            ${item.price.toFixed(2)}
          </span>
          <button
            disabled={!item.isAvailable}
            onClick={() => addItemsToCart(item.id, 1)}
            className={
              item.isAvailable
                ? "btn btn-sm btn-success"
                : "btn btn-sm btn-secondary"
            }
          >
            +
          </button>
        </div>
      </li>
    </div>
  );
};

export default ProductItem;
