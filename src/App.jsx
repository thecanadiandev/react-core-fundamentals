import { useState } from "react";
import CardDetail from "./components/CardDetail";
import Cart from "./components/Cart";
import CartModal from "./components/CartModal";
import AddForm from "./components/AddCartItem";

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Wireless Headphones",
      price: 59.99,
      isAvailable: true,
      quantity: 1,
    },
    {
      id: 2,
      name: "USB-C Cable",
      price: 12.99,
      isAvailable: false,
      quantity: 1,
    },
    { id: 3, name: "Phone Case", price: 24.99, isAvailable: true, quantity: 1 },
    {
      id: 4,
      name: "Screen Protector",
      price: 9.99,
      isAvailable: true,
      quantity: 1,
    },
  ]);
  const [cartItems, setCartItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

export default App;
