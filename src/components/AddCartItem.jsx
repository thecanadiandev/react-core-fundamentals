import { useState } from "react";

export default function AddForm({ onAddNewItem }) {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    isAvailable: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddNewItem(formData);

    setFormData({
      name: "",
      price: "",
      isAvailable: true,
    });
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-sm">
        <div className="card-header bg-primary text-white">
          <h4 className="mb-0">Add New Product</h4>
        </div>
        <div className="card-body">
          <div>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Product Name
              </label>
              <input
                type="text"
                autoComplete="off"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter product name"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="price" className="form-label">
                Price
              </label>
              <input
                type="number"
                className="form-control"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="0.00"
                step="0.01"
                min="0"
                required
              />
            </div>

            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="isAvailable"
                name="isAvailable"
                checked={formData.isAvailable}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="isAvailable">
                Available in Stock
              </label>
            </div>

            <button
              type="button"
              className="btn btn-success w-100"
              onClick={handleSubmit}
            >
              Add Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
