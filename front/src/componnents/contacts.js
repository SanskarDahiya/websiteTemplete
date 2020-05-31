import React from "react";
import SubPagesTopSection from "./sectionComponents/subPagesTopSection";
import { ADDRESS, EMAIL, PHONENUMBER, WEBSITEURL } from "../sampleData/collegeDetails";

const values = {
  headingName: "CONTACT US",
  subPageLink: [
    {
      name: "HOME",
      link: "/",
    },
    {
      name: "CONTACT",
      link: "/contact",
    },
  ],
};
const Contacts = (props) => {
  return (
    <>
      <div>
        <SubPagesTopSection {...values} />
        <ConntactDetails />
        <CollegeQuery />
      </div>
    </>
  );
};

export default Contacts;

const CollegeQuery = () => {
  return (
    <>
      <section className="ftco-section ftco-no-pt ftco-no-pb contact-section">
        <div className="container">
          <p style={{ marginLeft: "5px" }}>
            For any type of information about admission etc. Please contact given below address or phone numbers. And for online information please
            click on the E-Mail link given below and send a mail.
          </p>
          <div className="row d-flex align-items-stretch no-gutters">
            <div className="col-md-6 p-4 p-md-5 order-md-last bg-light">
              <form action="#">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Your Name" />
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Your Email" />
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Subject" />
                </div>
                <div className="form-group">
                  <textarea name id cols={30} rows={7} className="form-control" placeholder="Message" />
                </div>
                <div className="form-group">
                  <input type="submit" defaultValue="Send Message" className="btn btn-primary py-3 px-5" />
                </div>
              </form>
            </div>
            <div
              className="col-md-6 d-flex align-items-stretch"
              style={{
                position: "relative",
              }}
            >
              <iframe
                style={{ border: 0, marginRight: "5%" }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d863.5034747275803!2d77.1604046918894!3d30.03645910891607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390e58fe0f7630b9%3A0x25907b84aeed8606!2sSeth+Jai+Parkash+Mukand+Lal+Institute+Of+Engineering+And+Technology+(JMIT)!5e0!3m2!1sen!2sin!4v1453097109077"
                allowFullScreen="allowfullscreen"
                width="100%"
                height="100%"
                frameBorder={0}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const ConntactDetails = () => {
  return (
    <>
      <section className="ftco-section contact-section">
        <div className="container">
          <div className="row d-flex contact-info">
            <div className="col-md-3 d-flex">
              <div className="bg-light align-self-stretch box p-4 text-center">
                <h3 className="mb-4">Address</h3>
                <p>{ADDRESS}</p>
              </div>
            </div>
            <div className="col-md-3 d-flex">
              <div className="bg-light align-self-stretch box p-4 text-center">
                <h3 className="mb-4">Contact Number</h3>
                <p>{PHONENUMBER}</p>
              </div>
            </div>
            <div className="col-md-3 d-flex">
              <div className="bg-light align-self-stretch box p-4 text-center">
                <h3 className="mb-4">Email Address</h3>
                <p>{EMAIL}</p>
              </div>
            </div>
            <div className="col-md-3 d-flex">
              <div className="bg-light align-self-stretch box p-4 text-center">
                <h3 className="mb-4">Website</h3>
                <p>
                  <a href={WEBSITEURL}>{WEBSITEURL}</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
