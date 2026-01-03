import { useForm } from "react-hook-form";

export default function AddForm({ onAddNewItem }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      price: "",
      isAvailable: true,
    },
  });

  const onSubmit = (data) => {
    onAddNewItem(data);
    reset();
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
                className={`form-control ${errors.name ? "is-invalid" : ""}`}
                id="name"
                placeholder="Enter product name"
                {...register("name", {
                  required: "Product name is required",
                  minLength: {
                    value: 3,
                    message: "Name must be at least 3 characters",
                  },
                })}
              />
              {errors.name && (
                <div className="invalid-feedback d-block">
                  {errors.name.message}
                </div>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="price" className="form-label">
                Price
              </label>
              <input
                type="number"
                className={`form-control ${errors.price ? "is-invalid" : ""}`}
                id="price"
                {...register("price", {
                  required: "Price is required",
                  min: { value: 0.01, message: "Price must be greater than 0" },
                  max: { value: 10000, message: "Price cannot exceed $10,000" },
                })}
                placeholder="0.00"
                step="0.01"
              />
              {errors.price && (
                <div className="invalid-feedback d-block">
                  {errors.price.message}
                </div>
              )}
            </div>

            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="isAvailable"
                {...register("isAvailable")}
              />
              <label className="form-check-label" htmlFor="isAvailable">
                Available in Stock
              </label>
            </div>

            <button
              type="button"
              className="btn btn-success w-100"
              onClick={handleSubmit(onSubmit)}
            >
              Add Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
