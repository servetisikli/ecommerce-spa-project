import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import ProductCard from "./ProductCard";
import useFetch from "../hooks/useFetch";

function ProductList() {
  const {
    data: products,
    loading,
    error,
  } = useFetch("https://dummyjson.com/products");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <SimpleGrid columns={{ base: 2, sm: 2, md: 3, lg: 4 }} spacing={5}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </SimpleGrid>
  );
}

export default ProductList;
