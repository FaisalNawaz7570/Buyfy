import React, { useState } from "react";
import { connect } from 'react-redux';
import { uploadProduct } from './../../Redux/product/productActions';

const Test = ({uploadProduct}) => {
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
    setCategory("")
    setCost("")
    setTitle("")
    setDiscription('')
    setQuantity('')
    setCoverPhoto('')
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
      </form>
    </div>
  );
};
var actions = {
    uploadProduct
}
export default connect(null, actions)(Test);
