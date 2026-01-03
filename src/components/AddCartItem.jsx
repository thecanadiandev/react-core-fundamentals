import { useForm } from "react-hook-form";
import Input from "./Input";
import Checkbox from "./Checkbox";

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
            <Input
              label="Product Name"
              id="name"
              type="text"
              placeholder="Enter product name"
              autoComplete="off"
              register={register}
              error={errors.name}
              validation={{
                required: "Product name is required",
                minLength: {
                  value: 3,
                  message: "Name must be at least 3 characters",
                },
              }}
            />

            <Input
              label="Price"
              id="price"
              type="number"
              placeholder="0.00"
              step="0.01"
              register={register}
              error={errors.price}
              validation={{
                required: "Price is required",
                min: { value: 0.01, message: "Price must be greater than 0" },
                max: { value: 10000, message: "Price cannot exceed $10,000" },
              }}
            />

            <Checkbox
              label="Available in Stock"
              id="isAvailable"
              register={register}
            />

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
