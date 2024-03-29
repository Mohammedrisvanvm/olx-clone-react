import React, { useContext, useState } from "react";
import {useNavigate } from "react-router-dom";

import Logo from "../../olx-logo.png";
import "./Signup.css";
import { FirebaseContext } from "../../store/Context";

export default function Signup() {
  const Navigate = useNavigate();
  const [Username, setUserName] = useState("");
  const [Email, setEmail] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [password, setpassword] = useState("");
  const { firebase } = useContext(FirebaseContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firebase);
    firebase
      .auth()
      .createUserWithEmailAndPassword(Email, password)
      .then((result) => {
        result.user.updateProfile({ displayName: Username }).then(() => {
          firebase
            .firestore()
            .collection("newuser")
            .add({
              id: result.user.uid,
              userName: Username,
              phoneNumber: phoneNumber,
            })
            .then(() => {
              Navigate("/login");
            });
        });
      });
  };
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            value={Username}
            onChange={(e) => setUserName(e.target.value)}
            name="name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
            value={phoneNumber}
            onChange={(e) => setphoneNumber(e.target.value)}
            name="phone"
            defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a>Login</a>
      </div>
    </div>
  );
}
