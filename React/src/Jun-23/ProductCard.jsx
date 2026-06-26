import React from "react";
import "./ProductCard.css";

function ProductCard({product}) {
  return (
    <div className="card">
        <img src={product.image} alt={product.title}/>
        <h3>{product.title}</h3>
        <p>{product.desc}</p>
        <h2>{product.price}</h2>
        <button>🛒 Add to Cart</button>
    </div>
  );
}

export default ProductCard;