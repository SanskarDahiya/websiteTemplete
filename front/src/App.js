import React, { useState,useEffect } from "react";
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
const localStoragename = 'loginCredentials'
// // setter
// localStorage.setItem('myData', data);
 
// // getter
// localStorage.getItem('myData');
 
// // remove
// localStorage.removeItem('myData');
 
// // remove all
// localStorage.clear();

const App = (props) => {
  // { _id: "5ee0f4e5e081ebe6a207e6f7", username: "admin" }
  const [loginDetails, loginUpdater] = useState(false);


  const setLoginDetails = (data) => {
    // used for login as well as logout
    loginUpdater(data);
    if(data){
    localStorage.setItem(localStoragename, JSON.stringify(data));
  } else {
    localStorage.removeItem(localStoragename);
  }
  };


  useEffect(()=>{
    let data = localStorage.getItem(localStoragename);
    if(data){
      data = JSON.parse(""+data)
      loginUpdater(data)
    }
  },[])
  return (
    <Router>
      <Route path="/" render={(zz) => <Header {...zz} user={loginDetails} userUpdate={setLoginDetails} />} />
      <Switch>
        <Route path="/" exact render={(myProps) => <Index {...myProps} user={loginDetails} userUpdate={setLoginDetails} />} />
        <Route path="/login" exact render={(myProps) => <Login {...myProps} user={loginDetails} userUpdate={setLoginDetails} />} />
        <Route path="/about" exact component={About} />
        <Route path="/courses" exact render={(myProps) => <Course {...myProps} user={loginDetails} userUpdate={setLoginDetails} />} />
        <Route path="/staff" exact component={Staff} />
        <Route path="/blog" render={(myProps) => <MultiBlogs {...myProps} user={loginDetails} userUpdate={setLoginDetails} />} />
        <Route path="/contact" exact component={Contacts} />
        <Route path="*" component={PAGENOTFOUND} />
      </Switch>
      <Route path="/" component={Footer} />
    </Router>
  );
};

export default App;
