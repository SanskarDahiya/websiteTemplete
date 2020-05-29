import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./componnents/header";
import Footer from "./componnents/footer";
// import { Router } from "react-router";
// import createHistory from "history/createBrowserHistory";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Index from "./componnents";

const App = (props) => {
  return (
    <Router>
      <div>
        <Header />
        <Index />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
