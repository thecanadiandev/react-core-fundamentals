import { useState, useMemo } from "react";
import { useFetch } from "../../hooks/useFetch";
import { ProductContext } from "./ProductContext";

const PER_PAGE = 10;

const ProductProvider = ({ children }) => {
  const [page, setPage] = useState(1);
  const API_URL = import.meta.env.VITE_API_URL;

  // fetch entire list once so we can paginate client-side when server headers aren't available
  const {
    data: allData,
    loading,
    error,
    refetch,
  } = useFetch(`${API_URL}/products`);

  const total = Array.isArray(allData) ? allData.length : 0;

  const products = useMemo(() => {
    const list = Array.isArray(allData) ? allData : [];
    const start = (page - 1) * PER_PAGE;
    const pageData = list.slice(start, start + PER_PAGE);
    return {
      data: pageData,
      prev: page > 1,
      next: page * PER_PAGE < total,
    };
  }, [allData, page, total]);

  const fetchProducts = () => refetch?.();

  return (
    <ProductContext.Provider
      value={{ products, loading, error, page, setPage, fetchProducts }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
