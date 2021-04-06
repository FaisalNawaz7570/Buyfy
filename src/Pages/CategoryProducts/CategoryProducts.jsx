import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  fetchCategoryProducts,
  clearProducts,
} from "./../../Redux/product/productActions";
import ProductCard from "./../../Components/ProductCard/ProductCard";
import "./CategoryProducts.css";

const CategoryProduct = ({
  match: {
    params: { category },
  },
  fetchCategoryProducts,
  products,
  clearProducts,
}) => {
  useEffect(() => {
    //CDM
    fetchCategoryProducts(category);
    return () => {
      clearProducts();
    };
  }, []);
  console.log(products);
  return (
    <div className="category-products">
      <div className="category-product-list">
        <h1 className="category-text additional-category-text">{category}</h1>
        {products.map((product) => (
          <ProductCard key={product.title} {...product} />
        ))}
      </div>
    </div>
  );
};
var actions = {
  fetchCategoryProducts,
  clearProducts,
};
var mapState = (state) => ({
  products: state.products,
});
export default connect(mapState, actions)(CategoryProduct);
