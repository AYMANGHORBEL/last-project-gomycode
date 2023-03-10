import React from "react";
import { Link } from "react-router-dom";
import "./product.css";
const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <Link to={`product/${product._id}`}>
        <div>
          <img
            className="image"
            src={product.imageUrl}
            alt=""
            width={300}
            height={300}
          />
          <h3>{product.title}</h3>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
