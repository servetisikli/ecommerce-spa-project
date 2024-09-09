import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Home from "./pages/Home";
import { CartProvider } from "./contexts/cart/CartContext";
import Categories from "./components/Categories";
import MyAccount from "./pages/MyAccount";
import MainLayout from "./layouts/MainLayout";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Contact from "./pages/Contact";
import MinimalLayout from "./layouts/MinimalLayout";
import NotFound from "./pages/NotFound";
import AuthLayout from "./layouts/AuthLayout";
import Cart from "./pages/Cart";
import ProductDetail from "./components/ProductDetail";

function App() {
  return (
    <>
      <CartProvider>
        <ChakraProvider>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="categories" element={<Categories />} />
              <Route path="myaccount" element={<MyAccount />} />
              <Route path="contact" element={<Contact />} />
              <Route path="cart" element={<Cart />} />
              <Route path="product/:productId" element={<ProductDetail />} />
            </Route>

            <Route path="/auth" element={<AuthLayout />}>
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Registration />} />
            </Route>

            <Route path="*" element={<MinimalLayout />}>
              <Route path="*" index element={<NotFound />} />
            </Route>
          </Routes>
        </ChakraProvider>
      </CartProvider>
    </>
  );
}

export default App;
