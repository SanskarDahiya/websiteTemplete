import React from "react";
import SubPagesTopSection from "./sectionComponents/subPagesTopSection";
import CourcesSection from "./sectionComponents/courcesSection";
const values = {
  headingName: "COURSES",
  subPageLink: [
    {
      name: "HOME",
      link: "/",
    },
    {
      name: "COURSES",
      link: "/courses",
    },
  ],
};
const Course = (props) => {
  return (
    <>
      <div>
        <SubPagesTopSection {...values} {...props} />
        <CourcesSection {...props} />
      </div>
    </>
  );
};

export default Course;
