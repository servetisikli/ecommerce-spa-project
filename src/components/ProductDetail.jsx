import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

function ProductDetail() {
  const { id } = useParams();
  const { data, loading, error } = useFetch(`https://dummyjson.com/products/${id}`);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <p>Price: ${data.price}</p>
      <p>Brand: {data.brand}</p>
      <p>Category: {data.category}</p>
      <img
        src={data.thumbnail}
        alt={data.title}
        style={{ width: "300px", height: "auto" }}
      />
    </div>
  );
}

export default ProductDetail;
