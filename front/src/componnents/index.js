import React from "react";
import HeadingImageSection from "./sectionComponents/headingImageSection";
import BriefIntroOfCollege from "./sectionComponents/briefIntroOfCollegeSection";
import WhatWeOfferSection from "./sectionComponents/whatWeOfferSection";
import CollegeVideoAndFigures from "./sectionComponents/collegeVideoAndFigures";
import CourcesSection from "./sectionComponents/courcesSection";
import TeachersSection from "./sectionComponents/teachersSection";
import CampusGallery from "./sectionComponents/campusGallery";
import StudentTestimonials from "./sectionComponents/studentTestimonialsSection";
import BlogSections from "./sectionComponents/blogsSection";

const Index = (props) => {
  return (
    <>
      <div>
        <HeadingImageSection />
        <BriefIntroOfCollege />
        <WhatWeOfferSection />
        <CollegeVideoAndFigures />
        <CourcesSection limit={4} {...props}/>
        <TeachersSection limit={4} />
        <BlogSections limit={3} {...props} />
        <StudentTestimonials />
        <CampusGallery />
      </div>
    </>
  );
};

export default Index;
