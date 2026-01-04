import { useFetch } from "./useFetch";
const API_URL = import.meta.env.VITE_API_URL;

export function useCart() {
  const url = `${API_URL}/cart`;
  const { data, loading, error, refetch } = useFetch(url);
  return { data, loading, error, refetch };
}