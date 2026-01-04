import { useFetch } from "./useFetch";
const API_URL = import.meta.env.VITE_API_URL;

const PER_PAGE = 10;

export function useProducts(page = 1) {
  const url = `${API_URL}/products?_page=${page}&_limit=${PER_PAGE}`;
  const { data, loading, error, refetch } = useFetch(url);

  const dataLength = Array.isArray(data) ? data.length : 0;
  const hasMoreByCount = dataLength === PER_PAGE;

  const products = {
    data: data ?? [],
    prev: page > 1,
    next: hasMoreByCount,
  };

  return { products, loading, error, refetch };
}