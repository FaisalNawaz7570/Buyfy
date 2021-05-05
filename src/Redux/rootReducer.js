import { combineReducers } from "redux";
import authReducer from "./auth/authReducer";
import cartReducer from "./cart/carReducer";
import modalReducer from "./modal/modalReducer";
import productReducer from "./product/productReducer";

var rootReducer = combineReducers({
  auth: authReducer,
  products: productReducer,
  cart: cartReducer,
  modal: modalReducer,
});

export default rootReducer;
