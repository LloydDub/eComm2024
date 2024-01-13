import React from "react";

function Product({ product }) {
  return (
    <div>
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
    </div>
  );
}

export default Product;
