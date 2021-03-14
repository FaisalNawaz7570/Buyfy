import { v4 as uuid } from "uuid";
import { firestore, serverTimestamp, storage } from "./../../Firebase/Firebase";


export var uploadProduct = (productObj) => async () => {
  try {
    // console.log(productObj);
    //1- send file to storage and get download url
    var imageRef = storage.child(`products/img:${uuid()}`);
    var fileListener = imageRef.put(productObj.coverPhoto);
    //filelistener.on(
    // event_type,
    // callback - file state,
    // callback - error,
    // callback - will triger after file upload)
    fileListener.on(
      "state_changed",
      (snapshot) => {
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
      },
      (error) => {
        console.log(error);
      },
      async () => {
        //will triger after complition
        var downloadURL = await imageRef.getDownloadURL();
        //2- modify product Object with coverPhoto url and createdAt
        productObj.coverPhoto = downloadURL
        productObj.createdAt = serverTimestamp()
        productObj.cost = parseFloat(productObj.cost)
        productObj.quantity = parseFloat(productObj.quantity)
        console.log(productObj)
        //3- create doc in firestore
        await firestore.collection("products").add(productObj)
      }
    );
  } catch (error) {
    console.log(error);
  }
};
