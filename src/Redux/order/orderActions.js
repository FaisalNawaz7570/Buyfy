import { firestore, serverTimestamp } from "./../../Firebase/Firebase";
import myhistory from './../../myhistory/myhistory';

export var generateOrder = () => async (dispatch, getState) => {
  try {
    var { auth, cart: products } = getState();
    var orderInfo = {
      ...auth,
      products,
      createdAt: serverTimestamp(),
      orderStatus: "pending",
    };
    var order = await firestore.collection("orders").add(orderInfo);
    myhistory.push(`/checkout/${order.id}`)
  } catch (error) {
    console.log(error);
  }
};
