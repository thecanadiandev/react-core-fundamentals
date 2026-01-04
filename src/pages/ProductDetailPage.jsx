import { useParams, useNavigate } from "react-router";
import { useFetch } from "../hooks/useFetch";
import Spinner from "../components/ui/Spinner";

const API_URL = import.meta.env.VITE_API_URL;

export default function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    data: product,
    loading,
    error,
  } = useFetch(`${API_URL}/products/${id}`);

  if (loading) {
    return (
      <div className="container mt-5">
        <Spinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mt-5">
        <div className="alert alert-danger">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="card shadow-sm">
        <div className="card-body">
          <h2 className="card-title">{product.name}</h2>
          <p className="text-muted">Product ID: {product.id}</p>

          <div className="my-4">
            <h3 className="text-success">${product.price.toFixed(2)}</h3>
          </div>

          <div className="mb-3">
            <span
              className={`badge ${
                product.isAvailable ? "bg-success" : "bg-secondary"
              }`}
            >
              {product.isAvailable ? "In Stock" : "Out of Stock"}
            </span>
          </div>

          <div className="mb-3">
            <strong>Quantity:</strong> {product.quantity}
          </div>

          <div className="d-flex gap-2">
            <button className="btn btn-primary" disabled={!product.isAvailable}>
              Add to Cart
            </button>
            <button
              className="btn btn-outline-secondary"
              onClick={() => navigate("/products")}
            >
              Back to Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
