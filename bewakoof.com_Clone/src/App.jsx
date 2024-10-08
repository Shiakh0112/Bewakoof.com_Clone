import { Routes, Route } from "react-router-dom";
import CatProduct from "./components/catProductPages/categoryProduct/CatProduct";
import Categories from "./components/catProductPages/Catgories/Categories";
import Home from "./pages/Home/Home";
import Navbar from "./pages/Home/Navbar/Navbar";
import ProductPage from "./components/carts/ProductPage";
import CartPage from "./pages/Cart/CartPage";
import FooterPart from "./components/Footer/FooterPart";
import Login from "./pages/Login Signup/Login";
import SignUp from "./pages/Login Signup/SignUp";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
// import ProductPage2 from "./components/carts/ProductPage2";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          {/* Dynamic Route for category pages */}
          <Route path="/category/:categoryName" element={<CatProduct />} />
          <Route path="/product/:id" element={<ProductPage />} />
          {/* <Route path="/product/:id" element={<ProductPage2 />} /> */}
        </Routes>
        <FooterPart />
      </div>
      <h1></h1>
    </>
  );
}

export default App;
