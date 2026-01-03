import React from "react";

const CartItem = ({ item, handleAddToCart }) => {
  return (
    <div>
      <li
        className={`list-group-item d-flex justify-content-between align-items-center ${
          item.isAvailable ? "" : "text-muted"
        }`}
      >
        <span>{item.name}</span>
        <div className="d-flex align-items-center gap-2">
          <span className="badge bg-secondary rounded-pill">
            ${item.price.toFixed(2)}
          </span>
          <button
            onClick={() => handleAddToCart(item)}
            disabled={!item.isAvailable}
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

export default CartItem;
