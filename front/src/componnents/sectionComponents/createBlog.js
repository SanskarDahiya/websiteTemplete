import React, { useState } from "react";
import SubPagesTopSection from "./subPagesTopSection";
import { Link } from "react-router-dom";
const values1 = {
  headingName: "CREATE BLOGS",
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
      name: "CREATE LOG",
      link: "/blog/addBlog",
    },
  ],
};

const CreateBLog = (props) => {
  const [title, titleUpdater] = useState("");
  const [message, messageUpdater] = useState("");
  const [tags, tagsUpdater] = useState("");
  const [author, authorUpdater] = useState("");
  const [alertzz, alertUpdater] = useState(false);
  const setTitle = (e) => {
    e.preventDefault();
    alertUpdater(false);
    titleUpdater(e.target.value);
  };
  const setTags = (e) => {
    e.preventDefault();
    alertUpdater(false);
    tagsUpdater(e.target.value);
  };
  const setAuthor = (e) => {
    e.preventDefault();
    alertUpdater(false);
    authorUpdater(e.target.value);
  };
  const setMessage = (e) => {
    e.preventDefault();
    alertUpdater(false);
    messageUpdater(e.target.value);
  };
  const formHandle = async (e) => {
    e.preventDefault();
    alertUpdater(false);

    if (!title || title.trim().length <= 0 || !author || author.trim().length <= 0 || !message || message.trim().length <= 0) {
      alertUpdater(true);
      return;
    }
    const date = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let d = new Date();
    const newBlog = {
      title,
      description: message,
      comment: [],
      date: [d.getDate(), date[d.getMonth()], d.getFullYear()],
      author,
      image: "/images/image_1.jpg",
    };
    alert(JSON.stringify(newBlog));
    var z = { title: "mkgl", description: ",m,,n", comment: [], date: [31, "May", 2020], author: "n,mn,mn,m", image: "/images/image_1.jpg" };
    return;
  };
  return (
    <>
      <SubPagesTopSection {...values1} />
      <section className="ftco-section bg-light">
        <div className="container">
          <form onSubmit={formHandle} className="p-5 bg-light">
            <div className="row justify-content-center mb-5 pb-2">
              <div className="col-md-8 text-center heading-section ">
                <h2 className="mb-4">
                  <span>Write</span> Your Own Blog
                </h2>
                <p>---WRITE HERE---</p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8 ">
                <h2 className="mb-3">
                  <div className="form-group">
                    <label htmlFor="name">TITLE *</label>
                    <input type="text" className="form-control" id="title" onChange={setTitle} value={title} />
                  </div>
                </h2>
                <p>
                  <div className="form-group">
                    <label htmlFor="message">DESCRIPTION *</label>
                    <textarea id="message" cols={50} rows={10} className="form-control" value={message} onChange={setMessage} />
                  </div>
                </p>
                <div className="tag-widget post-tag-container mb-5 mt-5">
                  <div className="tagcloud">
                    <div className="form-group">
                      <label htmlFor="name">TAGS (if any)</label>
                      <input type="text" className="form-control" id="tags" onChange={setTags} value={tags} />
                    </div>
                  </div>
                </div>
                <div className="about-author d-flex p-4 bg-light">
                  <div className="desc">
                    <h3>
                      <div className="form-group">
                        <label htmlFor="name">AUTHOR *</label>
                        <input type="text" className="form-control" id="author" onChange={setAuthor} value={author} />
                      </div>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-group">
              {alertzz && "Please fill all * fields"}
              <br />
              <input type="submit" value="Post Blog" className="btn py-3 px-4 btn-primary" />
            </div>
          </form>
        </div>
      </section>
    </>
  );
};
export default CreateBLog;
