import React from "react";
import { menuBar } from "../sampleData/forHeaderFooter";
import { Link } from "react-router-dom";
import { EMAIL, PHONENUMBER, ADDRESS } from "../sampleData/collegeDetails";

const Footer = (props) => {
  return (
    <>
      <footer className="ftco-footer ftco-bg-dark ftco-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-6 col-lg-3">
              <div className="ftco-footer-widget mb-5">
                <h2 className="ftco-heading-2">Have a Questions?</h2>
                <div className="block-23 mb-3">
                  <ul>
                    <li>
                      <span className="icon icon-map-marker" />
                      <span className="text">{ADDRESS}</span>
                    </li>
                    <li>
                      <span className="icon icon-phone" />
                      <span className="text">{PHONENUMBER}</span>
                    </li>
                    <li>
                      <span className="icon icon-envelope" />
                      <span className="text">{EMAIL}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="ftco-footer-widget mb-5 ml-md-4">
                <h2 className="ftco-heading-2">Links</h2>
                <ul className="list-unstyled">
                  {menuBar.map((elem, id) => (
                    <li key={id}>
                      <Link to={elem.link}>
                        <span className="ion-ios-arrow-round-forward mr-2" />
                        {elem.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="ftco-footer-widget mb-5">
                <h2 className="ftco-heading-2">Subscribe Us!</h2>
                <form action="#" className="subscribe-form">
                  <div className="form-group">
                    <input type="text" className="form-control mb-2 text-center" placeholder="Enter email address" />
                    <input type="submit" defaultValue="Subscribe" className="form-control submit px-3" />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <Bottom {...props} />
        </div>
      </footer>
    </>
  );
};

export default Footer;

const Bottom = (props) => {
  const { location: { pathname = "" } = {} } = props || {};
  return (
    <>
      <div className="row">
        <div className="col-md-12 text-center">
          <p>
            This Website Is Made With&nbsp;
            <i className="icon-heart" aria-hidden="true" />
            &nbsp;
            {(pathname.search("sanskar") > 0 || pathname.search("sourav") > 0) && "by Sourav and Sanskar"}
          </p>
        </div>
      </div>
    </>
  );
};
