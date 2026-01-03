import CartItem from "./components/CartItem";

function App() {
  const title = "Shopping Cart";
  const items = [
    { name: "Wireless Headphones", price: 59.99, isAvailable: true },
    { name: "USB-C Cable", price: 12.99, isAvailable: false },
    { name: "Phone Case", price: 24.99, isAvailable: true },
    { name: "Screen Protector", price: 9.99, isAvailable: true },
  ];
  const handleAddToCart = (item) => {
    console.log(`Added ${item.name} to cart.`);
  };

  return (
    <>
      <div className="container mt-5">
        <div className="card shadow-sm">
          <div className="card-header bg-primary text-white">
            <h4 className="mb-0">{title}</h4>
          </div>
          <div className="card-body">
            <ul className="list-group list-group-flush mb-3">
              {items.map((item, index) => (
                <CartItem key={index} item={item} handleAddToCart={handleAddToCart} /> 
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
