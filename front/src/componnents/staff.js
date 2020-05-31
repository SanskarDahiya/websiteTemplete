import React from "react";
import SubPagesTopSection from "./sectionComponents/subPagesTopSection";
import TeachersSection from "./sectionComponents/teachersSection";
const values = {
  headingName: "TEACHERS",
  subPageLink: [
    {
      name: "HOME",
      link: "/",
    },
    {
      name: "STAFF",
      link: "/staff",
    },
  ],
};
const Staff = (props) => {
  return (
    <>
      <div>
        <SubPagesTopSection {...values} />
        <TeachersSection />
      </div>
    </>
  );
};

export default Staff;
