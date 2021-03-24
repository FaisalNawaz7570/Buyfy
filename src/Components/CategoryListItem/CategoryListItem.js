import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";

const CategoryListItem = ({ category, products }) => {
  
  return (
    <div>
      --------------------------------------------
      <h2 >{category}</h2>
      --------------------------------------------
      {products.map((product) => <ProductCard key={product.title}{...product}/>)}
        <Link to={`/category-products/${category}`}><button>View more</button></Link> <br/>
    </div>
  );
};

export default CategoryListItem;
