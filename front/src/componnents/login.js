import React from "react";
import { Link } from "react-router-dom";

const Login = (props) => {
  return (
    <div className="col-md topper d-flex align-items-center justify-content-end">
      <p>
        <Link to="#" className="btn py-2 px-3 btn-primary d-flex align-items-center justify-content-center">
          <span id="username">Login</span>
        </Link>
      </p>
    </div>
  );
};

export default Login;
