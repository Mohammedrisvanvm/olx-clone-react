import React, { useContext, useEffect, useState } from 'react';

import './View.css';
import { viewContext } from '../../store/viewContext';
import { FirebaseContext } from '../../store/Context';
function View() {
  const [userDetails,setUserDetails]=useState()
  const {viewDetails} =useContext(viewContext)
  const {firebase}=useContext(FirebaseContext)
  useEffect(()=>{
    const {userId} =viewDetails
    firebase.firestore().collection('newuser').where('id','==',userId).get().then((response)=>{
      response.forEach(doc => {
        setUserDetails(doc.data())
      });
    })
  })
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={viewDetails.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {viewDetails.price} </p>
          <span>{viewDetails.name}</span>
          <p>{viewDetails.category}</p>
          <span>{viewDetails.createdAt}</span>
        </div>
        <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails.userName}</p>
          <p>{userDetails.phoneNumber}</p>
        </div>
      </div>
    </div>
  );
}
export default View;
