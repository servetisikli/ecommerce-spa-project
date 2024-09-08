import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { CartProvider } from "./contexts/cart/CartContext";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <CartProvider>
        <ChakraProvider>
          <Navbar />
          <Home />
          <Footer />
          <Cart />
        </ChakraProvider>
      </CartProvider>
    </>
  );
}

export default App;
