import React from "react";
import SubPagesTopSection from "./sectionComponents/subPagesTopSection";
import BlogSections from "./sectionComponents/blogsSection";
import { Route } from "react-router";
import SingleBlogSection from "./sectionComponents/singleBlogSection";
const values1 = {
  headingName: "ALL BLOGS",
  subPageLink: [
    {
      name: "HOME",
      link: "/",
    },
    {
      name: "BLOGS",
      link: "/blog",
    },
  ],
};
const values2 = {
  headingName: "SINGLE BLOGS",
  subPageLink: [
    {
      name: "HOME",
      link: "/",
    },
    {
      name: "BLOGS",
      link: "/blog",
    },
    {
      name: "SINGLE BLOG",
      link: "/blog/single",
    },
  ],
};
const MultiBlogs = (props) => {
  return (
    <>
      <div>
        <Route path="/blog" exact>
          <SubPagesTopSection {...values1} />
          <BlogSections />
        </Route>
        <Route path="/blog/single/:id" exact>
          <SubPagesTopSection {...values2} />
          <SingleBlogSection />
        </Route>
      </div>
    </>
  );
};

export default MultiBlogs;
