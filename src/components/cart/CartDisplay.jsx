import React, { useMemo, useContext } from "react";
import { CartContext } from "../../context/cart/CartContext";

const CartDisplay = ({ items = [] }) => {
  const subtotal = useMemo(() => {
    if (!Array.isArray(items)) return 0;
    return items.reduce((sum, item) => {
      const price = Number(item.price) || 0;
      const qty = Number(item.quantity) || 0;
      return sum + price * qty;
    }, 0);
  }, [items]);
  const { removeItem, addItemsToCart } = useContext(CartContext);
  return (
    <div className="container mt-5">
      <div className="card shadow-sm">
        <div className="card-header bg-success text-white">
          <h4 className="mb-0">Your shopping Cart</h4>
        </div>
        <div className="card-body">
          {items.length === 0 ? (
            <p className="text-muted">Your cart is empty.</p>
          ) : (
            items.map((item, idx) => (
              <div
                key={item.cartId ?? item.id ?? idx}
                className="border rounded p-3 mb-3"
              >
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h5 className="mb-0">{item.name}</h5>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => removeItem && removeItem(item.cartId)}
                  >
                    Delete
                  </button>
                </div>
                <p className="text-muted mb-2">Unit Price: ${item.price}</p>

                <div className="d-flex align-items-center gap-3 mb-2">
                  <label className="fw-bold">Quantity:</label>
                  <div className="btn-group" role="group">
                    <button
                      className="btn btn-outline-secondary btn-sm"
                      onClick={() =>
                        addItemsToCart && addItemsToCart(item.id, -1)
                      }
                    >
                      -
                    </button>
                    <button
                      className="btn btn-outline-secondary btn-sm"
                      disabled
                    >
                      {item.quantity}
                    </button>
                    <button
                      className="btn btn-outline-secondary btn-sm"
                      onClick={() =>
                        addItemsToCart && addItemsToCart(item.id, 1)
                      }
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
          <div className="d-flex justify-content-between align-items-center mt-3 pt-3 border-top">
            <span className="fw-bold">Subtotal:</span>
            <span className="fs-5 text-success fw-bold">
              ${subtotal.toFixed(2)}
            </span>
          </div>
          <button className="btn btn-primary w-100 mt-3">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartDisplay;
