import React from "react";
import Carousel from "../components/Carousel";
import ProductList from "../components/ProductList";
import Cart from "./Cart";

const Home = () => {
  return (
    <div>
      <Carousel />
      <ProductList />
      <Cart />
    </div>
  );
};

export default Home;
