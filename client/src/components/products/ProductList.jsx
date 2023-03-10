import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../dedux/productActions";
import ProductCard from "./ProductCard";
import "./product.css";

const ProductList = () => {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.productReducer);
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div>
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <div className="list">
          {products.map((el, i) => (
            <ProductCard product={el} key={i} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
