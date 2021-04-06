import React, { useState } from "react";
import { connect } from "react-redux";
import { uploadProduct } from "../../Redux/product/productActions";
import Cart from "../../Components/Cart/Cart";
// import Header from "./../../Components/Header/Header";
// import Paragraph from './../../Components/Paragraph/Paragraph';
// import Button from "../../Components/Button/Button";
import ProductCard from "../../Components/ProductCard/ProductCard";

const Test = ({ uploadProduct }) => {
  var [category, setCategory] = useState("");
  var [title, setTitle] = useState("");
  var [cost, setCost] = useState("");
  var [discription, setDiscription] = useState("");
  var [quantity, setQuantity] = useState("");
  var [coverPhoto, setCoverPhoto] = useState(null);

  var handleSubmit = (e) => {
    e.preventDefault();
    var productObj = {
      category,
      title,
      cost,
      discription,
      quantity,
      coverPhoto,
    };
    uploadProduct(productObj);
    setCategory("");
    setCost("");
    setTitle("");
    setDiscription("");
    setQuantity("");
  };

  return (
    <div style={{fontSize: "62.5%"}}>
      {/* <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setCategory(e.target.value)}
          type="text"
          placeholder="category"
          value={category}
        />
        <br />
        <input
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="title"
          value={title}
        />
        <br />
        <input
          onChange={(e) => setCost(e.target.value)}
          type="text"
          placeholder="cost"
          value={cost}
        />
        <br />
        <textarea
          onChange={(e) => setDiscription(e.target.value)}
          rows="10"
          cols="30"
          placeholder="description"
          value={discription}
        ></textarea>
        <br />
        <input
          onChange={(e) => setQuantity(e.target.value)}
          type="text"
          placeholder="quantity"
          value={quantity}
        />
        <br />
        <input onChange={(e) => setCoverPhoto(e.target.files[0])} type="file" placeholder="cover photo" /> <br />
        <button type="submit">submit</button>
      </form> */}
      <Cart />
      {/* <Header fontSize={32} fontWeight="extraBold" >This is My Header</Header>
      <Header fontSize={16} fontWeight="bold" >This is My Header No 2</Header>
      <Header fontSize={46} fontWeight="semiBold" >This is My Header No 3</Header>
      {/* <Header fontSize={46} fontWeight="regular" color="red" >This is My Header No 3</Header>
      <Header fontSize={38} fontWeight="light" color="grey" >This is My Header No 3</Header>
      <Paragraph fontSize={32} fontWeight="extraBold" >This is My Header</Paragraph>
      <Paragraph fontSize={16} fontWeight="bold" >This is My Header No 2</Paragraph>
      <Paragraph fontSize={46} fontWeight="semiBold" >This is My Header No 3</Paragraph> */}
      {/* <Paragraph fontSize={46} fontWeight="regular" color="red" >This is My Header No 3</Paragraph>
      <Paragraph fontSize={38} fontWeight="light" color="grey" >This is My Header No 3</Paragraph>
      <Button fontSize={32} fontWeight="bold" background="orange">Click Me and Click Me Again</Button> */} 
      {/* <ProductCard /> */}

    </div>
  );
};
var actions = {
  uploadProduct,
};
export default connect(null, actions)(Test);
