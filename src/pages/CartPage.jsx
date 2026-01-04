import { useState, useEffect } from "react";
import CardDetail from "../components/cart/CardDetail";
import Cart from "../components/cart/Cart";
import CartModal from "../components/cart/CartModal";
import AddForm from "../components/cart/AddCartItem";

function CartContainer({ cartData }) {
  const [items, setItems] = useState([...cartData]);
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem("cartItems");
    return storedCart ? JSON.parse(storedCart) : [];
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const handleAddToCart = (item) => {
    if (cartItems.length === 0) {
      setCartItems((prevCartItems) => [...prevCartItems, item]);
    } else {
      const itemExists = cartItems.find((cartItem) => cartItem.id === item.id);
      if (itemExists) {
        setCartItems((prevCartItems) =>
          prevCartItems.map((cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          )
        );
      } else {
        setCartItems((prevCartItems) => [...prevCartItems, item]);
      }
    }
  };

  const addNewItem = () => {
    setItems((prevItems) => [
      ...prevItems,
      { name: "Gorilla glass", price: 19.99, isAvailable: true },
    ]);
  };

  const deleteFromCart = (itemId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((cartItem) => cartItem.id !== itemId)
    );
  };

  const increaseQuantity = (itemId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((cartItem) =>
        cartItem.id === itemId
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      )
    );
  };

  const decreaseQuantity = (itemId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((cartItem) =>
        cartItem.id === itemId && cartItem.quantity > 1
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      )
    );
  };

  const checkoutCart = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCartItems([]);
  };

  const handleAddNewItem = (newData) => {
    const newItem = {
      id: items.length + 1,
      name: newData.name,
      price: parseFloat(newData.price),
      isAvailable: newData.isAvailable,
      quantity: 1,
    };
    setItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <>
      <div className="container mt-5">
        <Cart
          items={items}
          onAddToCart={handleAddToCart}
          onAddNewItem={addNewItem}
        />
        {cartItems.length > 0 && (
          <CardDetail
            cartItems={cartItems}
            onDeleteFromCart={deleteFromCart}
            onIncreaseQuantity={increaseQuantity}
            onDecreaseQuantity={decreaseQuantity}
            onCheckout={checkoutCart}
          />
        )}
        {isModalOpen && (
          <CartModal closeModal={closeModal}>
            <p> Proceeding to checkout page. </p>
          </CartModal>
        )}
        <AddForm onAddNewItem={handleAddNewItem} />
      </div>
    </>
  );
}

export default CartContainer;
