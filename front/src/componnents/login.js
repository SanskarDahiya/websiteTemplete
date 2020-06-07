import React, { Component, useState } from "react";
import { Link } from "react-router-dom";

const Login = (props) => {
  console.warn(props);

  console.log("PUSHED TO", props.user);
  if (props && props.user) {
    console.log("PUSHED TO", props.history.push);

    props.history.push("/");
  }
  const userUpdater = props.userUpdate;
  const [author, authorUpdater] = useState("");
  const [message, messageUpdater] = useState("");
  const [alertzz, alertUpdater] = useState(false);

  const setAuthor = (e) => {
    e.preventDefault();
    alertUpdater(false);
    authorUpdater(e.target.value);
  };

  const setMessage = (e) => {
    e.preventDefault();
    alertUpdater(false);
    messageUpdater(e.target.value);
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    alertUpdater(false);
    if (!author || author.trim().length <= 0 || !message || message.trim().length <= 0) {
      alertUpdater(true);
      return;
    }
    const newLogin = {
      password: message,
      username: author,
    };
    userUpdater(newLogin);
    return;
  };

  return (
    <>
      <div style={{ alignItems: "center", display: "flex", justifyContent: "center" }}>
        <form style={{ width: "75%" }} onSubmit={handelSubmit}>
          <h3>Sign In</h3>

          <div className="form-group">
            <label>Email address</label>
            <input type="email" className="form-control" placeholder="Enter email" onChange={setAuthor} />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Enter password" onChange={setMessage} />
          </div>

          {/* <div className="form-group">
              <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                <label className="custom-control-label" htmlFor="customCheck1">
                  Remember me
                </label>
              </div>
            </div> */}

          <button type="submit" className="btn btn-primary btn-block">
            Submit
          </button>
          <p className="forgot-password text-right">
            {alertzz && "Please fill all * fields"}
            {"    "}
            Forgot <Link to="/contact">password? Contact Admin</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
const Signup = () => {
  return (
    <div>
      <form>
        <h3>Sign Up</h3>

        <div className="form-group">
          <label>First name</label>
          <input type="text" className="form-control" placeholder="First name" />
        </div>

        <div className="form-group">
          <label>Last name</label>
          <input type="text" className="form-control" placeholder="Last name" />
        </div>

        <div className="form-group">
          <label>Email address</label>
          <input type="email" className="form-control" placeholder="Enter email" />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" placeholder="Enter password" />
        </div>

        <button type="submit" className="btn btn-primary btn-block">
          Sign Up
        </button>
        <p className="forgot-password text-right">
          Already registered <a href="#">sign in?</a>
        </p>
      </form>
    </div>
  );
};
