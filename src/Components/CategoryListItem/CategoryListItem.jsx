import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import "./CategoryListItem.css";
const CategoryListItem = ({ category, products }) => {
  // render= (products) => {
  //   for (let product = 0; product < 4; product++) {
  //     // const element = array[index];
  //    return <ProductCard key={product.title} {...product} />
  //   }
  // }
  return (
    <div className="category-list-item">
      <h2 className="category-text"><Link to={`/category-products/${category}`}>{category}</Link></h2>
      

      {products.filter((products, product) => product < 4).map(product => {
            return <ProductCard key={product.title} {...product} />

})}
      {/* {products.map((product) => {
        if (products.length <= 4 && products.length === 4) {
         return <ProductCard key={product.title} {...product} />
        } else {
          console.log("error")
        }
      })} */}
      {/* {products.map((product) => (
        <ProductCard key={product.title} {...product} />
      ))} */}
      {/* <Link to={`/category-products/${category}`}><button>View more</button></Link> <br/> */}
    </div>
  );
};

export default CategoryListItem;
