import { useEffect, useState } from "react";
import CartContainer from "./CartPage";
const API_URL = import.meta.env.VITE_API_URL;

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${API_URL}/products?_page=${page}`);
        if (!response.ok) {
          throw new Error("Failed to fetch product data");
        }
        const data = await response.json();

        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [page]);

  const handlePrevPage = () => {
    if (products.prev) {
      setPage(page - 1);
    }
  };
  const handleNextPage = () => {
    if (products.next) {
      setPage(page + 1);
    }
  };

  if (loading) {
    return (
      <div className="alert alert-light" role="alert">
        Loading..
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-danger" role="alert">
        Error: {error}
      </div>
    );
  }

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mt-4 px-3">
        <button
          disabled={!products.prev}
          onClick={handlePrevPage}
          className="btn btn-outline-primary"
        >
          &lt;
        </button>

        <button
          disabled={!products.next}
          onClick={handleNextPage}
          className="btn btn-outline-primary"
        >
          &gt;
        </button>
      </div>
      <CartContainer cartData={products.data} />
    </div>
  );
};

export default Product;
