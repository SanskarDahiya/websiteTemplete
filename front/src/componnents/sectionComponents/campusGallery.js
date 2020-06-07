import React from "react";

const GALARYIMAGES = [
  { url: "/images/gal4.jpg", image: "/images/gal4.jpg" },
  { url: "/images/gal7.jpg", image: "/images/gal7.jpg" },
  { url: "/images/gal3.jpg", image: "/images/gal3.jpg" },
  { url: "/images/gal12.jpg", image: "/images/gal2.jpg" },
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
