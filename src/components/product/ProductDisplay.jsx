import { useState } from "react";
import ProductItem from "./ProductItem";

const ProductDisplay = ({ items, onAddNewItem }) => {
  const [title] = useState("Shopping Cart");

  return (
    <div>
      <div className="card shadow-sm">
        <div className="card-header bg-primary text-white">
          <h4 className="mb-0">{title}</h4>
        </div>
        <div className="card-body">
          <ul className="list-group list-group-flush mb-3">
            {items.map((item, index) => (
              <ProductItem key={index} item={item} />
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
