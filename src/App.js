import React from "react";
import "./App.css";
import Navbar from "./components/Navbar.js";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/home" exact component={Home}>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
