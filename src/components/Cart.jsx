import { useState } from "react";
import CartItem from "./CartItem";

const Cart = () => {
  const [items, setItems] = useState([
    { name: "Wireless Headphones", price: 59.99, isAvailable: true },
    { name: "USB-C Cable", price: 12.99, isAvailable: false },
    { name: "Phone Case", price: 24.99, isAvailable: true },
    { name: "Screen Protector", price: 9.99, isAvailable: true },
  ]);
  const [title] = useState("Shopping Cart"); // optional to use this as a state
  const handleAddToCart = (item) => {
    console.log(`Added ${item.name} to cart.`);
  };

  const addNewItem = () => {
    setItems((prevItems) => [
      ...prevItems,
      { name: "Gorilla glass", price: 19.99, isAvailable: true },
    ]);
  }

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
                handleAddToCart={handleAddToCart}
              />
            ))}
          </ul>
          <button onClick={addNewItem} className="btn btn-success w-100">Add Item</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
