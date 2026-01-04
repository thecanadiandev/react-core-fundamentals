import { useContext } from "react";
import CartDisplay from "../components/cart/CartDisplay";
import { CartContext } from "../context/cart/CartContext";
import { ProductContext } from "../context/product/ProductContext";

const CartPage = () => {
  const { cartItems } = useContext(CartContext);
  const { products } = useContext(ProductContext);

  const cartsToDisplay = () => {
    const cartItemsToDisplay = cartItems.map((cartItem) => {
      const product =
        products.data.find((prod) => prod.id === cartItem.productId) || {};
      return {
        ...product,
        quantity: cartItem.quantity,
        cartId: cartItem.id,
      };
    });
    return cartItemsToDisplay;
  };

  return (
    <div>
      <CartDisplay items={cartsToDisplay()} />
    </div>
  );
};

export default CartPage;
