import React from "react";
import { Router, Route, Link } from "react-router-dom";
import { headingImages } from "../../sampleData/homePageData";
import { Fade } from "react-slideshow-image";
const fadeProperties = {
  duration: 2000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  onChange: (oldIndex, newIndex) => {
    // console.log(`fade transition from ${oldIndex} to ${newIndex}`);
  },
};
const SubPagesTopSection = (props) => {
  let subPageLink = props.subPageLink || [];

  return (
    <>
      <section className="hero-wrap hero-wrap-2" style={{ backgroundImage: 'url("/images/bg_1.jpg")' }}>
        <div className="overlay" />
        <div className="container">
          <div className="row no-gutters slider-text align-items-center justify-content-center">
            <div className="col-md-9  text-center">
              <h1 className="mb-2 bread">{props.headingName || ""}</h1>
              <p className="breadcrumbs">
                {subPageLink.map((elem, index) => (
                  <span className="mr-2" key={index}>
                    <Link to={elem.link}>
                      {elem.name} <i className="ion-ios-arrow-forward" />
                    </Link>
                  </span>
                ))}
                {/* <span>
                  {last.name || ""} <i className="ion-ios-arrow-forward" />
                </span> */}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SubPagesTopSection;
