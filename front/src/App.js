import React, { useState } from "react";
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
import Login from "./componnents/login";

const App = (props) => {
  const [loginDetails, loginUpdater] = useState(false);
  const setLoginDetails = (data) => {
    loginUpdater(data);
  };
  return (
    <Router>
      <Header user={loginDetails} userUpdate={setLoginDetails} />
      <Switch>
        <Route path="/" exact component={Index} />
        <Route path="/login" exact render={(myProps) => <Login {...myProps} user={loginDetails} userUpdate={setLoginDetails} />} />
        <Route path="/about" exact component={About} />
        <Route path="/courses" exact render={(myProps) => <Course {...myProps} user={loginDetails} userUpdate={setLoginDetails} />} />
        <Route path="/staff" exact component={Staff} />
        <Route path="/blog" render={(myProps) => <MultiBlogs {...myProps} user={loginDetails} userUpdate={setLoginDetails} />} />
        <Route path="/contact" exact component={Contacts} />
        <Route path="*" component={PAGENOTFOUND} />
      </Switch>

      <Footer />
    </Router>
  );
};

export default App;
