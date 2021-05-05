import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="homeLeft center">
        <h1>home left</h1>
      </div>
      <div className="homeRight center">
        <div className="product1 product"></div>
        <div className="product2 product"></div>
        {/* <div className="product3 product"></div>
        <div className="product4 product"></div> */}
      </div>
    </div>
  );
};

export default Home;
