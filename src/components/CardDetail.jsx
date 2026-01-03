import React from "react";

const CardDetail = ({ cartItems, onDeleteFromCart, onIncreaseQuantity, onDecreaseQuantity, onCheckout }) => {
  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  return (
    <div className="container mt-5">
      <div className="card shadow-sm">
        <div className="card-header bg-success text-white">
          <h4 className="mb-0">Cart Details</h4>
        </div>
        <div className="card-body">
          {cartItems.map((item) => (
            <div key={item.id} className="border rounded p-3 mb-3">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <h5 className="mb-0">{item.name}</h5>
                <button onClick={() => onDeleteFromCart(item.id)} className="btn btn-sm btn-danger">Delete</button>
              </div>
              <p className="text-muted mb-2">Unit Price: ${item.price}</p>

              <div className="d-flex align-items-center gap-3 mb-2">
                <label className="fw-bold">Quantity:</label>
                <div className="btn-group" role="group">
                  <button className="btn btn-outline-secondary btn-sm" onClick={() => onDecreaseQuantity(item.id)}>
                    -
                  </button>
                  <button className="btn btn-outline-secondary btn-sm" disabled>
                    {item.quantity}
                  </button>
                  <button className="btn btn-outline-secondary btn-sm" onClick={() => onIncreaseQuantity(item.id)}>
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="d-flex justify-content-between align-items-center mt-3 pt-3 border-top">
            <span className="fw-bold">Subtotal:</span>
            <span className="fs-5 text-success fw-bold">${totalAmount.toFixed(2)}</span>
          </div>
          <button onClick={onCheckout} className="btn btn-primary w-100 mt-3">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
