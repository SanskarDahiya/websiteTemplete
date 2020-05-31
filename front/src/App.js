import React from "react";
import "./App.css";
import Header from "./componnents/header";
import Footer from "./componnents/footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Index from "./componnents";
import About from "./componnents/about";
import Course from "./componnents/Cources";
import Staff from "./componnents/staff";
import MultiBlogs from "./componnents/multiBlog";
import Contacts from "./componnents/contacts";
import PAGENOTFOUND from "./componnents/pageNotFound";

const App = (props) => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Index} />
        <Route path="/about" exact component={About} />
        <Route path="/courses" exact component={Course} />
        <Route path="/staff" exact component={Staff} />
        <Route path="/blog" component={MultiBlogs} />
        <Route path="/contact" exact component={Contacts} />
        <Route path="*" component={PAGENOTFOUND} />
      </Switch>

      <Footer />
    </Router>
  );
};

export default App;
