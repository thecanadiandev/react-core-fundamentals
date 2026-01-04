import { createContext } from "react";

export const ProductContext = createContext({
    products: [],
    loading: false,
    error: null,
    page: 1,
    setPage: () => {},
});