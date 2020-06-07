import React from "react";
import CollegeVideoAndFigures from "./sectionComponents/collegeVideoAndFigures";
import CampusGallery from "./sectionComponents/campusGallery";
import StudentTestimonials from "./sectionComponents/studentTestimonialsSection";
import SubPagesTopSection from "./sectionComponents/subPagesTopSection";
const values = {
  headingName: "ABOUT US",
  subPageLink: [
    {
      name: "HOME",
      link: "/",
    },
    {
      name: "ABOUT",
      link: "/about",
    },
  ],
};
const About = (props) => {
  return (
    <>
      <div>
        <SubPagesTopSection {...values} />
        <CollegeBriefIntro />
        <CollegeVideoAndFigures />
        <StudentTestimonials />
        <CampusGallery />
      </div>
    </>
  );
};

export default About;

const CollegeBriefIntro = (props) => {
  return (
    <section className="ftco-section ftco-no-pt ftc-no-pb">
      <div className="container">
        <div className="row d-flex">
          <div className="col-md-5 order-md-last wrap-about wrap-about d-flex align-items-stretch">
            <div className="img" style={{ backgroundImage: "url(images/test.jpg)" }} />
          </div>
          <div className="col-md-7 wrap-about py-5 pr-md-4 ">
            <h2 className="mb-4">Computer Science Engineering</h2>
            <p>
              Computer Science is the study of the theoretical foundations of information and computation, and of practical techniques for their
              implementation and applications in computer systems.
            </p>
            <p>
              It is frquently described as the systematic study of algorithmic processes that create, describe and transform information. The vision
              of the department is to produce a blend of creativity and ethical engineering graduates.
            </p>
            <p>
              The major objective of the department is to provide efficient and effective computer education and to inculcate modern technique values
              among the students. Various add on classes are conducted under Earn While Learn scheme in the department. There are a number of
              laboratories like Graphics Lab, Aptitude Lab, R&amp;D Lab, Virtual Lab, Mat Lab, Programming Lab, Database Lab, Operating System Lab,
              Hardware/Networking Lab, Software Engg.Project Lab.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
