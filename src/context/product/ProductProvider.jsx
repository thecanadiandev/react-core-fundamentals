import { useState } from "react";
import { useProducts } from "../../hooks/useProducts";
import { ProductContext } from "./ProductContext";

export function ProductProvider({ children }) {
  const [page, setPage] = useState(1);
  const { products, loading, error } = useProducts(page);
  return (
    <ProductContext.Provider
      value={{
        products,
        loading,
        error,
        page,
        setPage,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
