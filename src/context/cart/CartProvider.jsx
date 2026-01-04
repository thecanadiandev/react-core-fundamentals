import { CartContext } from "./CartContext";
import { useCart } from "../../hooks/useCart";
const API_URL = import.meta.env.VITE_API_URL;

const CartProvider = ({ children }) => {
  const { data, refetch } = useCart();
  const cartItems = data ?? [];

  const addItemsToCart = async (productId, quantity = 1) => {
    try {
      const existingItem = cartItems.find(
        (item) => item.productId === productId
      );
      if (existingItem) {
        const newQty = existingItem.quantity + quantity;
        if (newQty > 0) {
          await fetch(`${API_URL}/cart/${existingItem.id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ quantity: newQty }),
          });
        } else {
          // quantity reached zero or less -> delete item
          await fetch(`${API_URL}/cart/${existingItem.id}`, {
            method: "DELETE",
          });
        }
        refetch?.();
      } else {
        // only create when quantity is positive
        if (quantity > 0) {
          await fetch(`${API_URL}/cart`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ productId, quantity }),
          });
          refetch?.();
        }
      }
    } catch (error) {
      // error handling
    }
  };

  const removeItem = async (cartId) => {
    try {
      await fetch(`${API_URL}/cart/${cartId}`, {
        method: "DELETE",
      });
      // refresh cart after deletion
      refetch?.();
    } catch (error) {
      // error handling
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, addItemsToCart, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
