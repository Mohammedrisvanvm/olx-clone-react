import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./Pages/Home";
import SignupPage from "./Pages/Signup";
import Login from "./Pages/Login";
import { AuthContext, FirebaseContext } from "./store/Context";
import CreatePage from "./Pages/Create";
import ViewPost from "./Pages/ViewPost";

function App() {
  const { setUser } = useContext(AuthContext);
  const { firebase } = useContext(FirebaseContext);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  });
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/create" element={<CreatePage/>} />
          <Route path="/ViewPost/:id" element={<ViewPost/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
