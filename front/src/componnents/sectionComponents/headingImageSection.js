import React from "react";
import { Link } from "react-router-dom";
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
const HeadingImageSection = (props) => {
  return (
    <>
      <div>
        <div className="home-slider slide-container">
          <Fade {...fadeProperties}>
            {headingImages.map((item, id) => (
              <div
                className="each-fade container slider-item"
                style={{ display: "flex", width: "100%", justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0,0,0,0.2)" }}
              >
                <div className="image-container overlay">
                  <img src={item.imageUrl} style={{ height: 500, backgroundColor: "rgba(200,100,150,0.2)", opacity: 0.7 }} />
                </div>
                <div className="col-md-6">
                  <h1 className="mb-4">{item.title}</h1>
                  <p>{item.desc}</p>
                  {item.button.map((button, id) => (
                    <p id={id}>
                      <Link to={button.link} className="btn btn-primary px-4 py-3 mt-3">
                        {button.title}
                      </Link>
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </Fade>
        </div>
      </div>
    </>
  );
};

export default HeadingImageSection;
