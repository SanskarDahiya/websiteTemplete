import React from "react";
import { COLLEGENAME, COLLEGEDESCRIPTION, COLLEGEVIDEOURL, COLLEGEVIDEOOVERLAYIMAGE, COLLEGEFIGURES } from "../../sampleData/collegeDetails";
const BACKGROUNDIMAGE = process.env.PUBLIC_URL + "/images/gal9.jpg";

const CollegeVideoAndFigures = () => {
  return (
    <section
      className="ftco-section ftco-counter img"
      id="section-counter"
      style={{ backgroundImage: `url(${BACKGROUNDIMAGE})` }}
      data-stellar-background-ratio="0.5"
    >
      <div className="container">
        <div className="row justify-content-center mb-5 pb-2 d-flex">
          <div className="col-md-6 align-items-stretch d-flex">
            <div className="img img-video d-flex align-items-center" style={{ backgroundImage: `url(${COLLEGEVIDEOOVERLAYIMAGE})` }}>
              <div className="video justify-content-center">
                <a href={COLLEGEVIDEOURL} className="icon-video popup-vimeo d-flex justify-content-center align-items-center">
                  <span className="ion-ios-play" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 heading-section heading-section-white  pl-lg-5 pt-md-0 pt-5">
            <h2 className="mb-4">{COLLEGENAME}</h2>
            <p>{COLLEGEDESCRIPTION}</p>
          </div>
        </div>
        <div className="row d-md-flex align-items-center justify-content-center">
          <div className="col-lg-12">
            <div className="row d-md-flex align-items-center">
              {COLLEGEFIGURES.map((elem) => (
                <div className="col-md d-flex justify-content-center counter-wrap ">
                  <div className="block-18">
                    <div className="icon">
                      <span className="flaticon-doctor" />
                    </div>
                    <div className="text">
                      <strong className="number" data-number={287}>
                        {elem.value}
                      </strong>
                      <span>{elem.name}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollegeVideoAndFigures;
