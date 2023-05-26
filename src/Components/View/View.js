import React, { useContext, useEffect, useState } from "react";

import "./View.css";

import { FirebaseContext } from "../../store/Context";
import { ViewContext } from "../../store/viewContext";
function View() {
  const [userDetails, setUserDetails] = useState();
  const { ViewDetails } = useContext(ViewContext);
  const { firebase } = useContext(FirebaseContext);
  useEffect(() => {
    const { userId } = ViewDetails;
    console.log(userId);
    firebase
      .firestore()
      .collection("newuser")
      .where("id", "==", userId)
      .get()
      .then((response) => {
        response.forEach(doc => {
          
          setUserDetails(doc.data());
        });
      });
  });
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img src={ViewDetails.url} alt="" />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {ViewDetails.price} </p>
          <span>{ViewDetails.name}</span>
          <p>{ViewDetails.category}</p>
          <span>{ViewDetails.createdAt}</span>
        </div>
      { userDetails &&  <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails.userName}</p>
          <p>{userDetails.phoneNumber}</p>
        </div> }
      </div>
    </div>
  );
}
export default View;
