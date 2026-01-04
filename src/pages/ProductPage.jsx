import { useContext } from "react";
import CartContainer from "./CartPage";
import { ProductContext } from "../context/product/ProductContext";

const Product = () => {
  const ProductCtx = useContext(ProductContext);
  const { products, loading, error, page, setPage } = ProductCtx;

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
