import React, { useState, useEffect } from "react";
import { GETBLOGS } from "../../sampleData/blogDetails";
import { Link } from "react-router-dom";

const BlogSections = (props) => {
  const [CUSTOMBLOGS, CUSTOMBLOGSUPDATER] = useState([]);
  const getBlogData = async () => {
    let blogs = await GETBLOGS(props.limit || false);
    CUSTOMBLOGSUPDATER(blogs);
  };
  useEffect(() => {
    getBlogData();
  }, []);
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
                College is one of the most important stages in our life. We make friends for life, work towards our carrer, and learn life lessons.
              </p>
            </div>
          </div>
          <div className="row justify-content-center mb-5 pb-2">
            <h3 className="heading">
              {props && props.user ? <Link to="/blog/addBlog">CLICK TO WRITE YOUR BLOG</Link> : <Link to="/login"> LOGIN TO WRITE YOUR BLOG</Link>}
            </h3>
          </div>
          <div className="row">
            {CUSTOMBLOGS && CUSTOMBLOGS.length ? (
              CUSTOMBLOGS.map((elem, index) => (
                <div key={index} className="col-md-6 col-lg-4 ">
                  <div className="blog-entry">
                    <Link
                      to={"blog/single/" + elem._id}
                      className="block-20 d-flex align-items-end"
                      style={{ backgroundImage: `url(${elem.image})`, backgroundRepeat: "no-repeat", backgroundSize: "contain" }}
                    >
                      <div className="meta-date text-center p-2">
                        <span className="day">{(elem.date && elem.date[0]) || "day"}</span>
                        <span className="mos">{(elem.date && elem.date[1]) || "month"}</span>
                        <span className="yr">{(elem.date && elem.date[2]) || "year"}</span>
                      </div>
                    </Link>
                    <div className="text bg-white p-4">
                      <h3 className="heading">
                        <Link to={"blog/single/" + elem._id}>{elem.title}</Link>
                      </h3>
                      <p>{elem.description.substr(0, 90) + "........."}</p>
                      <div className="d-flex align-items-center mt-4">
                        <p className="mb-0">
                          <Link to={"blog/single/" + elem._id} className="btn btn-primary">
                            Read More
                            <span className="ion-ios-arrow-round-forward" />
                          </Link>
                        </p>
                        <p className="ml-auto mb-0">
                          <Link to={"blog/single/" + elem._id} className="mr-2">
                            {elem.author}
                          </Link>
                          <Link to={"blog/single/" + elem._id} className="meta-chat">
                            <span className="icon-chat" /> {(elem.comments && elem.comments.length) || 0}
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <>NO BLOGS AVAILABLE</>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogSections;
