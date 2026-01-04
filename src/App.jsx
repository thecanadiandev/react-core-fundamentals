import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import Navbar from "./components/ui/Navbar";
import LoginPage from "./pages/LoginPage";
import CartPage from "./pages/CartPage";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
