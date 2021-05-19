import { combineReducers } from "redux";
import authReducer from "./auth/authReducer";
import cartReducer from "./cart/carReducer";
import modalReducer from "./modal/modalReducer";
import productReducer from "./product/productReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage" //local storage

const persistConfig = {
  key: "root",
  storage,
  whiteList: ['auth' , 'cart']
};
 
var rootReducer = combineReducers({
  auth: authReducer,
  products: productReducer,
  cart: cartReducer,
  modal: modalReducer,
});

export default persistReducer(persistConfig,rootReducer);
