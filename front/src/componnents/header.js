import React from "react";
import { Link } from "react-router-dom";
import { menuBar, logoUrl } from "../sampleData/forHeaderFooter";
import { EMAIL, PHONENUMBER } from "../sampleData/collegeDetails";

const Header = (props) => {
  const handleForm = (e) => {
    e.preventDefault();
    return;
  };
  return (
    <>
      <div className="bg-top navbar-light">
        <div className="container">
          <div className="row no-gutters d-flex align-items-center align-items-stretch">
            <div className="col-md-4 d-flex align-items-center py-4">
              <Link className="navbar-brand" to="/">
                <img src={logoUrl} alt="Logo" height="50px" />
              </Link>
            </div>
            <div className="col-lg-8 d-block">
              <div className="row d-flex">
                <div className="col-md d-flex topper align-items-center align-items-stretch py-md-4">
                  <div className="icon d-flex justify-content-center align-items-center">
                    <span className="icon-paper-plane" />
                  </div>
                  <div className="text">
                    <span>Email</span>
                    <span>{EMAIL}</span>
                  </div>
                </div>
                <div className="col-md d-flex topper align-items-center align-items-stretch py-md-4">
                  <div className="icon d-flex justify-content-center align-items-center">
                    <span className="icon-phone2" />
                  </div>
                  <div className="text">
                    <span>Call</span>
                    <span>Call Us: {PHONENUMBER}</span>
                  </div>
                </div>
                <LoginButton {...props} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ftco-navbar-light" id="ftco-navbar">
        <div className="container d-flex align-items-center px-4">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#ftco-nav"
            aria-controls="ftco-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="oi oi-menu" /> Menu
          </button>
          <form onSubmit={handleForm} className="searchform order-lg-last">
            <div className="form-group d-flex">
              <input type="text" className="form-control pl-3" placeholder="Search" />
              <button type="submit" className="form-control search">
                <span className="ion-ios-search" />
              </button>
            </div>
          </form>
          <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav mr-auto">
              {menuBar.map((elem, id) => (
                <li key={id} className="nav-item">
                  <Link to={elem.link} className="nav-link">
                    {elem.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

const LoginButton = (props) => {
  const userUpdater = props.userUpdate;
  return (
    <>
      <div className="col-md topper d-flex align-items-center justify-content-end">
        <p>
          {props && props.user ? (
            <div
              onClick={() => {
                userUpdater(false);
              }}
              className="btn py-2 px-3 btn-primary d-flex align-items-center justify-content-center"
            >
              <span id="username1">Signout ({JSON.stringify((props.user && props.user.username) || {})})</span>
            </div>
          ) : (
            <Link to="/login" className="btn py-2 px-3 btn-primary d-flex align-items-center justify-content-center">
              <span id="username">Login</span>
            </Link>
          )}
        </p>
      </div>
    </>
  );
};

export default Header;
