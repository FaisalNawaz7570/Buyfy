import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import "./CategoryListItem.css";
const CategoryListItem = ({ category, products }) => {
  return (
    <div className="category-list-item">
      <h2 className="category-text"><Link to={`/category-products/${category}`}>{category}</Link></h2>
      {products.map((product) => (
        <ProductCard key={product.title} {...product} />
      ))}
      {/* <Link to={`/category-products/${category}`}><button>View more</button></Link> <br/> */}
    </div>
  );
};

export default CategoryListItem;
