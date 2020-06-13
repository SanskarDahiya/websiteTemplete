import React, { useState, useEffect } from "react";
import { getSingleBlog, UpdateBlog } from "../../sampleData/blogDetails";
import SubPagesTopSection from "./subPagesTopSection";
const emptyBlog = {
  title: "BLOG TITLE",
  date: ["--", "--", "----"],
  description: "LOADING .... .... ....",
  comments: [
    {
      name: "----",
      message: "--- --- ---",
    },
  ],
  author: "----",
  tags: "---",
};

const SingleBlogSection = (props) => {
  const [singleBlog, singleBlogUpdater] = useState(emptyBlog);
  const [notFound, notFoundUpdater] = useState(false);

  const getBlogData = async (_id = false) => {
    try {
      let blog = await getSingleBlog(_id);
      singleBlogUpdater(blog);
      notFoundUpdater(false);
    } catch (err) {
      singleBlogUpdater({ ...emptyBlog, title: "NO BLOG FOUND", description: "---" });
      notFoundUpdater(true);
    }
  };

  useEffect(() => {
    getBlogData(props.match.params.id || false);
  }, []);

  const values2 = {
    headingName: (singleBlog && singleBlog.title) || "",
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
        link: props.location.pathname,
      },
    ],
  };
  return (
    <>
      <SubPagesTopSection {...values2} />
      <section className="ftco-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 ">
              <img
                style={{
                  position: "absolute",
                  right: 0,
                  top: 0,
                  border: "1px solid red",
                  width: 200,
                  height: 200,
                }}
                src={singleBlog && singleBlog.image}
                alt="BLOG IMAGE"
                className="block-20 d-flex align-items-end"
              />

              <h2 className="mb-3">{(singleBlog && singleBlog.title) || "TITLE"}</h2>

              {!notFound && (
                <>
                  <p
                    style={{
                      width: "75%",
                      lineHeight: 1.5,
                    }}
                  >
                    {(singleBlog && singleBlog.description) || "BLOG DETAILS"}
                  </p>
                  <div className="tag-widget post-tag-container mb-5 mt-5">
                    <div className="tagcloud">{singleBlog && (singleBlog.tags ? "TAGS: " + singleBlog.tags : "")}</div>
                  </div>
                  <div className="about-author d-flex p-4 bg-light">
                    <div className="desc">
                      <h3>BY: {singleBlog && singleBlog.author}</h3>
                    </div>
                  </div>
                  <div className="pt-5 mt-5">
                    <h3 className="mb-5 h4 font-weight-bold">{(singleBlog && singleBlog.comments && singleBlog.comments.length) || "0"} Comments</h3>
                    <ul className="comment-list">
                      {singleBlog &&
                        singleBlog.comments &&
                        singleBlog.comments.length > 0 &&
                        singleBlog.comments.map((elem, index) => (
                          <li className="comment" key={index}>
                            {/* <div className="vcard bio">
                          <img src="images/teacher-1.jpg" alt="Image placeholder" />
                        </div> */}
                            <div className="comment-body">
                              <h3>{index + 1 + "> From: " + elem.name}</h3>
                              <div className="meta mb-2">{elem.date || new Date().toString()}</div>
                              <p>{elem.message}</p>
                              <p>{/* <a href="#" className="reply">
                              Reply
                            </a> */}</p>
                            </div>
                          </li>
                        ))}
                    </ul>

                    <AddComment updater={singleBlogUpdater} blog={singleBlog} />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleBlogSection;

const AddComment = (props) => {
  const [name, nameUpdater] = useState("");
  const [message, messageUpdater] = useState("");
  const [alertzz, alertUpdater] = useState(false);
  const setName = (e) => {
    e.preventDefault();
    alertUpdater(false);
    nameUpdater(e.target.value);
  };
  const setMessage = (e) => {
    e.preventDefault();
    alertUpdater(false);
    messageUpdater(e.target.value);
  };
  const formHandle = async (e) => {
    e.preventDefault();
    alertUpdater(false);
    if (!name || !name.trim() || !message || !message.trim()) {
      alertUpdater(true);
      return;
    }
    if (!props.blog || !props.updater) {
      alert("Network Error");
      return;
    }
    const newComment = {
      name,
      message,
    };
    let { comments } = props.blog;
    comments.push(newComment);
    props.updater({
      ...props.blog,
      comments,
    });
    UpdateBlog({
      ...props.blog,
      comments,
    });
    nameUpdater("");
    messageUpdater("");
    return;
  };
  return (
    <>
      <div className="comment-form-wrap pt-5">
        <h3 className="mb-5 h4 font-weight-bold">Leave a comment</h3>
        <form onSubmit={formHandle} className="p-5 bg-light">
          <div className="form-group">
            <label htmlFor="name">Name *</label>
            <input type="text" className="form-control" id="name" onChange={setName} value={name} />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message *</label>
            <textarea id="message" className="form-control" value={message} onChange={setMessage} />
          </div>
          <div className="form-group">
            {alertzz && "Please fill all * fields"}
            <br />
            <input type="submit" value="Post Comment" className="btn py-3 px-4 btn-primary" />
          </div>
        </form>
      </div>
    </>
  );
};
