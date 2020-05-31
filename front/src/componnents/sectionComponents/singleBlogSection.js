import React from "react";
import { BLOGS } from "../../sampleData/blogDetails";

const SingleBlogSection = (props) => {
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
          <div className="row">x </div>
        </div>
      </section>
    </>
  );
};

export default SingleBlogSection;
