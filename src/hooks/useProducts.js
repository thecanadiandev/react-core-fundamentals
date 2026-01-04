import { useHttp } from "./useFetch";
const API_URL = import.meta.env.VITE_API_URL;

export function useProducts(page = 1) {
  const url = `${API_URL}/products?_page=${page}`;
  const { data, loading, error } = useHttp(url);
   return { products: data, loading, error };
}