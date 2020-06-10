import React from "react";
import SubPagesTopSection from "./sectionComponents/subPagesTopSection";
import BlogSections from "./sectionComponents/blogsSection";
import { Route, Redirect, Switch } from "react-router";
import SingleBlogSection from "./sectionComponents/singleBlogSection";
import CreateBLog from "./sectionComponents/createBlog";
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
const MultiBlogs = (props) => {
  return (
    <>
      <Switch>
        <Route path="/blog" exact>
          <SubPagesTopSection {...values1} />
          <BlogSections {...props} />
        </Route>
        <Route path="/blog/single/:id" exact render={(zz) => <SingleBlogSection {...props} {...zz} />} />
        <Route path="/blog/addBlog" exact render={(zz) => <CreateBLog {...props} {...zz} />} />
        <Redirect from="*" to="/blog" />
      </Switch>
    </>
  );
};

export default MultiBlogs;
