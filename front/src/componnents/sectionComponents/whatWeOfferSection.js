import React from "react";
import { whatWeOfferSubject, whatWeOfferBackgroundImage } from "../../sampleData/homePageData";

const WhatWeOfferSection = () => {
  return (
    <section className="ftco-section ftco-no-pt ftc-no-pb">
      <div className="container">
        <div className="row d-flex">
          <div className="col-md-5 order-md-last wrap-about wrap-about d-flex align-items-stretch">
            <div className="img" style={{ backgroundImage: `url(${whatWeOfferBackgroundImage})` }} />
          </div>
          <div className="col-md-7 wrap-about py-5 pr-md-4 ">
            <h2 className="mb-4">What We Offer</h2>
            <p>
              Department of Computer Science and Engineering, JMIT provides an online plateform ELearning for learning various courses through video
              tutorials, lecture notes delievered by our faculty.
            </p>
            <div className="row mt-5">
              {whatWeOfferSubject.map((elem) => (
                <div className="col-lg-6">
                  <div className="services-2 d-flex">
                    <div className="icon mt-2 d-flex justify-content-center align-items-center">
                      <span className={elem.icon || "flaticon-security"} />
                    </div>
                    <div className="text pl-3">
                      <h3>{elem.title}</h3>
                      <p>{elem.description}</p>
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

export default WhatWeOfferSection;
