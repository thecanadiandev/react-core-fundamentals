## Add Cart Form

```js
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
          />
          <label className="form-check-label" htmlFor="isAvailable">
            Available in Stock
          </label>
        </div>

        <button type="button" className="btn btn-success w-100">
          Add Product
        </button>
      </div>
    </div>
  </div>
</div>
```
