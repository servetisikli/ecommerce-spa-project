import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <ChakraProvider>
        <Navbar />
        <Home />
        <Footer />
      </ChakraProvider>
    </>
  );
}

export default App;
