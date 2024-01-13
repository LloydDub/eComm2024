import React from "react";

// a comment to test my git
function Product({ product }) {
  return (
    <div>
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>Price: {product.price} CAD</p>
    </div>
  );
}

export default Product;
