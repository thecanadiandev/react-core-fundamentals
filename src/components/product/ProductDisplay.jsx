import { useState, useContext } from "react";
import ProductItem from "./ProductItem";
import { CartContext } from "../../context/cart/CartContext";

const ProductDisplay = ({ items, onAddNewItem }) => {
  const [title] = useState("Shopping Cart");
  const { addItemsToCart } = useContext(CartContext);

  // debug logs removed
  return (
    <div>
      <div className="card shadow-sm">
        <div className="card-header bg-primary text-white">
          <h4 className="mb-0">{title}</h4>
        </div>
        <div className="card-body">
          <ul className="list-group list-group-flush mb-3">
            {items.map((item) => (
              <ProductItem
                key={item.id}
                item={item}
                addItemsToCart={addItemsToCart}
              />
            ))}
          </ul>
          <button onClick={onAddNewItem} className="btn btn-success w-100">
            Add Item
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
