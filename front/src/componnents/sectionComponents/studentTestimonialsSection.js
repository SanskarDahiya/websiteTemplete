import React from "react";
import { TESTINOMIALDATA } from "../../sampleData/testimonialsData";
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
const StudentTestimonials = (props) => {
  return (
    <>
      <section className="ftco-section testimony-section">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-2">
            <div className="col-md-8 text-center heading-section ">
              <h2 className="mb-4">Student Says About Us</h2>
              <p>
                A Castle can be built only if the foundation is strong. To all the juniors i have just one message, perseverance is the key to success.
              </p>
            </div>
          </div>
          <div className="row  justify-content-center">
            <div className="col-md-12">
              <div className="carousel-testimony" style={{ margin: "0 5%" }}>
                <Fade {...fadeProperties}>
                  {TESTINOMIALDATA.map((elem, index) => (
                    <div key={index} className="item">
                      <div className="testimony-wrap d-flex">
                        <div className="user-img mr-4" style={{ backgroundImage: `url(${elem.image})` }} />
                        <div className="text ml-2">
                          <span className="quote d-flex align-items-center justify-content-center">
                            <i className="icon-quote-left" />
                          </span>
                          <p>{elem.comment}</p>
                          <p className="name">{elem.name}</p>
                          <span className="position"></span>
                        </div>
                      </div>
                    </div>
                  ))}
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StudentTestimonials;
