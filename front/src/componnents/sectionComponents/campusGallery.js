import React from "react";

const GALARYIMAGES = [
  { url: "/images/image_1.jpg", image: "/images/image_1.jpg" },
  { url: "/images/image_2.jpg", image: "/images/image_2.jpg" },
  { url: "/images/image_3.jpg", image: "/images/image_3.jpg" },
  { url: "/images/image_4.jpg", image: "/images/image_4.jpg" },
];

const CampusGallery = (props) => {
  return (
    <>
      <section className="ftco-gallery">
        <div className="container-wrap">
          <div className="row no-gutters">
            {GALARYIMAGES.map((elem, index) => (
              <div key={index} className="col-md-3 ">
                <a
                  href={elem.url || "#"}
                  className="gallery image-popup img d-flex align-items-center"
                  style={{ backgroundImage: `url(${elem.image})` }}
                >
                  <div className="icon mb-4 d-flex align-items-center justify-content-center">
                    <span className="icon-instagram" />
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CampusGallery;
