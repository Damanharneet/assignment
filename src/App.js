import "./assets/css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Products from "./components/Products";
import Cart from "./components/Cart";
import { useDispatch } from "react-redux";
import { getAllProducts, getCartItems } from "./redux/actions";
import { useEffect } from "react";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartItems());
    dispatch(getAllProducts());
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Layout />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
