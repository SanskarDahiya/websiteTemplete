import React from "react";
import { TEACHERSDATA } from "../../sampleData/teachersDetail";

const TeachersSection = (props) => {

  const DataToBeDisplayed = TEACHERSDATA.filter((_, index) => {
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
        <div className="container-fluid px-4">
          <div className="row justify-content-center mb-5 pb-2">
            <div className="col-md-8 text-center heading-section ">
              <h2 className="mb-4">Certified Teachers</h2>
              <p>
                Faculty members are passionate and curious individuals, highly accessible Professors also make themselves available to students
                outside of the classroom.
              </p>
            </div>
          </div>
          <div className="row">
            {DataToBeDisplayed.map((elem, index) => (
              <div key={index} className="col-md-6 col-lg-3 ">
                <div className="staff">
                  <div className="img-wrap d-flex align-items-stretch">
                    <div className="img align-self-stretch" style={{ backgroundImage: `url(${elem.image})` }} />
                  </div>
                  <div className="text pt-3 text-center">
                    <h3>{elem.name}</h3>
                    <span className="position mb-2">{elem.position}</span>
                    <div className="faded">
                      <p>{elem.intro}</p>
                      <ul className="ftco-social text-center">
                        <li className="">
                          <a href={elem.twitter || "#"}>
                            <span className="icon-twitter" />
                          </a>
                        </li>
                        <li className="">
                          <a href={elem.facebook || "#"}>
                            <span className="icon-facebook" />
                          </a>
                        </li>
                        <li className="">
                          <a href={elem.google || "#"}>
                            <span className="icon-google-plus" />
                          </a>
                        </li>
                        <li className="">
                          <a href={elem.instagram || "E"}>
                            <span className="icon-instagram" />
                          </a>
                        </li>
                      </ul>
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

export default TeachersSection;
