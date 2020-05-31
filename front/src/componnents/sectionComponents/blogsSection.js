import React from "react";
import { TESTINOMIALDATA } from "../../sampleData/testimonialsData";
import { BLOGS } from "../../sampleData/blogDetails";
import { Link } from "react-router-dom";

const fadeProperties = {
  duration: 2000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  onChange: (oldIndex, newIndex) => {
    // console.log(`fade transition from ${oldIndex} to ${newIndex}`);
  },
};
const BlogSections = (props) => {
  const CUSTOMBLOGS = BLOGS.filter((_, index) => {
    if (props.limit) {
      if (props.limit > index) {
        return true;
      }
      return false;
    }
    return true;
  });
  return (
    <>
      <section className="ftco-section bg-light">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-2">
            <div className="col-md-8 text-center heading-section ">
              <h2 className="mb-4">
                <span>Recent</span> Blog
              </h2>
              <p>
                Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a
                paradisematic country
              </p>
            </div>
          </div>
          <div className="row">
            {CUSTOMBLOGS.map((elem, index) => (
              <div key={index} className="col-md-6 col-lg-4 ">
                <div className="blog-entry">
                  <Link to={elem.link} className="block-20 d-flex align-items-end" style={{ backgroundImage: `url(${elem.image})` }}>
                    <div className="meta-date text-center p-2">
                      <span className="day">{elem.date[0] || "day"}</span>
                      <span className="mos">{elem.date[1] || "month"}</span>
                      <span className="yr">{elem.date[2] || "year"}</span>
                    </div>
                  </Link>
                  <div className="text bg-white p-4">
                    <h3 className="heading">
                      <Link to={elem.link}>{elem.title}</Link>
                    </h3>
                    <p>{elem.description.substr(0, 90) + "........."}</p>
                    <div className="d-flex align-items-center mt-4">
                      <p className="mb-0">
                        <Link to={elem.link} className="btn btn-primary">
                          Read More
                          <span className="ion-ios-arrow-round-forward" />
                        </Link>
                      </p>
                      <p className="ml-auto mb-0">
                        <Link to={elem.link} className="mr-2">
                          {elem.author}
                        </Link>
                        <Link to={elem.link} className="meta-chat">
                          <span className="icon-chat" /> {(elem.comments && elem.comments.length) || 0}
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogSections;
