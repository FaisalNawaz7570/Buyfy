import React, { useEffect } from "react";
import CategoryListItem from "../CategoryListItem/CategoryListItem";
import { connect } from "react-redux";
import { categorizeProducts } from "./../../Utility/products";
import { fetchProducts } from "./../../Redux/product/productActions";
import "./CategoryList.css";

const CategoryList = ({ fetchProducts, categories }) => {
  console.log(categories);
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="category-list">
      {/* <h1>categoryList</h1> */}
 

      {categories.map((category) => (
        
        <CategoryListItem key={category.category} {...category} />
      ))}
    </div>
  );
};
var actions = {
  fetchProducts,
};
var mapState = (state) => ({
  categories: categorizeProducts(state.products),
});

export default connect(mapState, actions)(CategoryList);
