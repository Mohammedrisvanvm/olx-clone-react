import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import Home from "./Pages/Home";
import SignupPage from "./Pages/Signup";

function App() {
  return (
    <div>
     <Router>
      <Route>

      <Home exact path='/'/>
      </Route>
      <Route>
        <SignupPage path='/Signup'/>
      </Route>
     </Router>
    </div>
  );
}

export default App;
