import CartContainer from "./components/cart/CartContainer";
import Login from "./components/login/Login";

function App() {
  return (
    <>
      <div className="container mt-5">
        <Login />
        <CartContainer />
      </div>
    </>
  );
}

export default App;
