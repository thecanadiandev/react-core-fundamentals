import { useState } from "react";
import CartItem from "./CartItem";

const Cart = ({ items, onAddToCart, onAddNewItem, onDeleteFromCart, onIncreaseQuantity, onDecreaseQuantity, onCheckout }) => {
  
  const [title] = useState("Shopping Cart"); // optional to use this as a state
  

  return (
    <div>
      <div className="card shadow-sm">
        <div className="card-header bg-primary text-white">
          <h4 className="mb-0">{title}</h4>
        </div>
        <div className="card-body">
          <ul className="list-group list-group-flush mb-3">
            {items.map((item, index) => (
              <CartItem
                key={index}
                item={item}
                onAddToCart={onAddToCart}
                onDeleteFromCart={onDeleteFromCart}
                onIncreaseQuantity={onIncreaseQuantity}
                onDecreaseQuantity={onDecreaseQuantity}
                onCheckout={onCheckout}
              />
            ))}
          </ul>
          <button onClick={onAddNewItem} className="btn btn-success w-100">Add Item</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
