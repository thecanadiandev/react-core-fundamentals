import { createContext } from "react";

export const ProductContext = createContext({
    products: { data: [], prev: false, next: false },
    loading: false,
    error: null,
    page: 1,
    setPage: () => {},
});