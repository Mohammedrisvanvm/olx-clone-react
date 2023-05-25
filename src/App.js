import React from "react";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";

import "./App.css";
import Home from "./Pages/Home";
import SignupPage from "./Pages/Signup";
import Login from './Pages/Login'

function App() {
  return (
    <div>
      
     <Router>
    
<Routes>


      <Route path='/' element={<Home />} />
      <Route path='/signup' element={<SignupPage />} />
      <Route path='/Login' element={<Login />} />
</Routes>
   
     </Router>
    </div>
  );
}

export default App;
