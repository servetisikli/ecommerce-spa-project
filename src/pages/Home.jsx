import React from "react";
import Carousel from "../components/Carousel";
import ProductList from "../components/ProductList";

const Home = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Carousel />
      <ProductList />
    </div>
  );
};

export default Home;
