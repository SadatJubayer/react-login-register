import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles.css";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Home from "./components/layout/Home";
import Navbar from "./components/layout/Navbar";
import About from "./components/layout/About";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="container">
          <Switch>
            {/* <PrivateRoute exact path="/" component={Home} /> */}
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}
