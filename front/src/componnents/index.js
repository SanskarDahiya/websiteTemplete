import React from "react";
import { Router, Route, Link } from "react-router";
import HeadingImageSection from "./sectionComponents/headingImageSection";
import BriefIntroOfCollege from "./sectionComponents/briefIntroOfCollegeSection";
import WhatWeOfferSection from "./sectionComponents/whatWeOfferSection";
import CollegeVideoAndFigures from "./sectionComponents/collegeVideoAndFigures";
import CourcesSection from "./sectionComponents/courcesSection";
const Index = (props) => {
  return (
    <>
      <div>
        <HeadingImageSection />
        <BriefIntroOfCollege />
        <WhatWeOfferSection />
        <CollegeVideoAndFigures />
        <CourcesSection limit={4} />
        {/* TEACHER SECTION */}

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
              <div className="col-md-6 col-lg-3 ">
                <div className="staff">
                  <div className="img-wrap d-flex align-items-stretch">
                    <div className="img align-self-stretch" style={{ backgroundImage: "url(static/images/teacher-1.jpg)" }} />
                  </div>
                  <div className="text pt-3 text-center">
                    <h3>Er. Vivek Sharma</h3>
                    <span className="position mb-2">Dean CS &amp; IT Services</span>
                    <div className="faded">
                      <p>I am an ambitious workaholic, but apart from that, pretty simple person.</p>
                      <ul className="ftco-social text-center">
                        <li className="">
                          <a href="#">
                            <span className="icon-twitter" />
                          </a>
                        </li>
                        <li className="">
                          <a href="#">
                            <span className="icon-facebook" />
                          </a>
                        </li>
                        <li className="">
                          <a href="#">
                            <span className="icon-google-plus" />
                          </a>
                        </li>
                        <li className="">
                          <a href="#">
                            <span className="icon-instagram" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 ">
                <div className="staff">
                  <div className="img-wrap d-flex align-items-stretch">
                    <div className="img align-self-stretch" style={{ backgroundImage: "url(static/images/teacher-2.jpg)" }} />
                  </div>
                  <div className="text pt-3 text-center">
                    <h3>Dr. Gaurav Sharma</h3>
                    <span className="position mb-2">HOD CSE</span>
                    <div className="faded">
                      <p>I am an ambitious workaholic, but apart from that, pretty simple person.</p>
                      <ul className="ftco-social text-center">
                        <li className="">
                          <a href="#">
                            <span className="icon-twitter" />
                          </a>
                        </li>
                        <li className="">
                          <a href="#">
                            <span className="icon-facebook" />
                          </a>
                        </li>
                        <li className="">
                          <a href="#">
                            <span className="icon-google-plus" />
                          </a>
                        </li>
                        <li className="">
                          <a href="#">
                            <span className="icon-instagram" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 ">
                <div className="staff">
                  <div className="img-wrap d-flex align-items-stretch">
                    <div className="img align-self-stretch" style={{ backgroundImage: "url(static/images/teacher-3.jpg)" }} />
                  </div>
                  <div className="text pt-3 text-center">
                    <h3>Er. Rajeev Bansal</h3>
                    <span className="position mb-2">AP CSE</span>
                    <div className="faded">
                      <p>I am an ambitious workaholic, but apart from that, pretty simple person.</p>
                      <ul className="ftco-social text-center">
                        <li className="">
                          <a href="#">
                            <span className="icon-twitter" />
                          </a>
                        </li>
                        <li className="">
                          <a href="#">
                            <span className="icon-facebook" />
                          </a>
                        </li>
                        <li className="">
                          <a href="#">
                            <span className="icon-google-plus" />
                          </a>
                        </li>
                        <li className="">
                          <a href="#">
                            <span className="icon-instagram" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 ">
                <div className="staff">
                  <div className="img-wrap d-flex align-items-stretch">
                    <div className="img align-self-stretch" style={{ backgroundImage: "url(static/images/teacher-10.jpg)" }} />
                  </div>
                  <div className="text pt-3 text-center">
                    <h3>Ms. Shilpi</h3>
                    <span className="position mb-2">AP CSE</span>
                    <div className="faded">
                      <p>I am an ambitious workaholic, but apart from that, pretty simple person.</p>
                      <ul className="ftco-social text-center">
                        <li className="">
                          <a href="#">
                            <span className="icon-twitter" />
                          </a>
                        </li>
                        <li className="">
                          <a href="#">
                            <span className="icon-facebook" />
                          </a>
                        </li>
                        <li className="">
                          <a href="#">
                            <span className="icon-google-plus" />
                          </a>
                        </li>
                        <li className="">
                          <a href="#">
                            <span className="icon-instagram" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="ftco-section ftco-consult ftco-no-pt ftco-no-pb"
          style={{ backgroundImage: "url(static/images/bg_5.jpg)" }}
          data-stellar-background-ratio="0.5"
        >
          <div className="overlay" />
          <div className="container">
            <div className="row justify-content-end">
              <div className="col-md-6 py-5 px-md-5">
                <div className="py-md-5">
                  <div className="heading-section heading-section-white  mb-5">
                    <h2 className="mb-4">Request A Quote</h2>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  </div>
                  <form action="#" className="appointment-form ">
                    <div className="d-md-flex">
                      <div className="form-group">
                        <input type="text" className="form-control" placeholder="First Name" />
                      </div>
                      <div className="form-group ml-md-4">
                        <input type="text" className="form-control" placeholder="Last Name" />
                      </div>
                    </div>
                    <div className="d-md-flex">
                      <div className="form-group">
                        <div className="form-field">
                          <div className="select-wrap">
                            <div className="icon">
                              <span className="ion-ios-arrow-down" />
                            </div>
                            <select name id className="form-control">
                              <option value>Select Your Course</option>
                              <option value>Art Lesson</option>
                              <option value>Language Lesson</option>
                              <option value>Music Lesson</option>
                              <option value>Sports</option>
                              <option value>Other Services</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="form-group ml-md-4">
                        <input type="text" className="form-control" placeholder="Phone" />
                      </div>
                    </div>
                    <div className="d-md-flex">
                      <div className="form-group">
                        <textarea name id cols={30} rows={2} className="form-control" placeholder="Message" defaultValue={""} />
                      </div>
                      <div className="form-group ml-md-4">
                        <input type="submit" defaultValue="Request A Quote" className="btn btn-primary py-3 px-4" />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="ftco-section bg-light">
          <div className="container">
            <div className="row justify-content-center mb-5 pb-2">
              <div className="col-md-8 text-center heading-section ">
                <h2 className="mb-4">
                  <span>Recent</span> Blog
                </h2>
                <p>
                  Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a
                  paradisematic country
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-4 ">
                <div className="blog-entry">
                  <a
                    href="blog-single.html"
                    className="block-20 d-flex align-items-end"
                    style={{ backgroundImage: 'url("{{ url_for("static", filename="images/image_1.jpg") }}")' }}
                  >
                    <div className="meta-date text-center p-2">
                      <span className="day">26</span>
                      <span className="mos">June</span>
                      <span className="yr">2019</span>
                    </div>
                  </a>
                  <div className="text bg-white p-4">
                    <h3 className="heading">
                      <a href="#">Skills To Develop Your Child Memory</a>
                    </h3>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <div className="d-flex align-items-center mt-4">
                      <p className="mb-0">
                        <a href="#" className="btn btn-primary">
                          Read More
                          <span className="ion-ios-arrow-round-forward" />
                        </a>
                      </p>
                      <p className="ml-auto mb-0">
                        <a href="#" className="mr-2">
                          Admin
                        </a>
                        <a href="#" className="meta-chat">
                          <span className="icon-chat" /> 3
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 ">
                <div className="blog-entry">
                  <a
                    href="blog-single.html"
                    className="block-20 d-flex align-items-end"
                    style={{ backgroundImage: 'url("{{ url_for("static", filename="images/image_2.jpg") }}")' }}
                  >
                    <div className="meta-date text-center p-2">
                      <span className="day">26</span>
                      <span className="mos">June</span>
                      <span className="yr">2019</span>
                    </div>
                  </a>
                  <div className="text bg-white p-4">
                    <h3 className="heading">
                      <a href="#">Skills To Develop Your Child Memory</a>
                    </h3>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <div className="d-flex align-items-center mt-4">
                      <p className="mb-0">
                        <a href="#" className="btn btn-primary">
                          Read More
                          <span className="ion-ios-arrow-round-forward" />
                        </a>
                      </p>
                      <p className="ml-auto mb-0">
                        <a href="#" className="mr-2">
                          Admin
                        </a>
                        <a href="#" className="meta-chat">
                          <span className="icon-chat" /> 3
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 ">
                <div className="blog-entry">
                  <a
                    href="blog-single.html"
                    className="block-20 d-flex align-items-end"
                    style={{ backgroundImage: 'url("{{ url_for("static", filename="images/image_3.jpg") }}")' }}
                  >
                    <div className="meta-date text-center p-2">
                      <span className="day">26</span>
                      <span className="mos">June</span>
                      <span className="yr">2019</span>
                    </div>
                  </a>
                  <div className="text bg-white p-4">
                    <h3 className="heading">
                      <a href="#">Skills To Develop Your Child Memory</a>
                    </h3>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <div className="d-flex align-items-center mt-4">
                      <p className="mb-0">
                        <a href="#" className="btn btn-primary">
                          Read More
                          <span className="ion-ios-arrow-round-forward" />
                        </a>
                      </p>
                      <p className="ml-auto mb-0">
                        <a href="#" className="mr-2">
                          Admin
                        </a>
                        <a href="#" className="meta-chat">
                          <span className="icon-chat" /> 3
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="ftco-section testimony-section">
          <div className="container">
            <div className="row justify-content-center mb-5 pb-2">
              <div className="col-md-8 text-center heading-section ">
                <h2 className="mb-4">Student Says About Us</h2>
                <p>
                  Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a
                  paradisematic country
                </p>
              </div>
            </div>
            <div className="row  justify-content-center">
              <div className="col-md-12">
                <div className="carousel-testimony owl-carousel">
                  <div className="item">
                    <div className="testimony-wrap d-flex">
                      <div className="user-img mr-4" style={{ backgroundImage: "url(static/images/teacher-1.jpg)" }} />
                      <div className="text ml-2">
                        <span className="quote d-flex align-items-center justify-content-center">
                          <i className="icon-quote-left" />
                        </span>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <p className="name">Racky Henderson</p>
                        <span className="position">Father</span>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="testimony-wrap d-flex">
                      <div className="user-img mr-4" style={{ backgroundImage: "url(static/images/teacher-2.jpg)" }} />
                      <div className="text ml-2">
                        <span className="quote d-flex align-items-center justify-content-center">
                          <i className="icon-quote-left" />
                        </span>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <p className="name">Henry Dee</p>
                        <span className="position">Mother</span>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="testimony-wrap d-flex">
                      <div className="user-img mr-4" style={{ backgroundImage: "url(static/images/teacher-3.jpg)" }} />
                      <div className="text ml-2">
                        <span className="quote d-flex align-items-center justify-content-center">
                          <i className="icon-quote-left" />
                        </span>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <p className="name">Mark Huff</p>
                        <span className="position">Mother</span>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="testimony-wrap d-flex">
                      <div className="user-img mr-4" style={{ backgroundImage: "url(static/images/teacher-4.jpg)" }} />
                      <div className="text ml-2">
                        <span className="quote d-flex align-items-center justify-content-center">
                          <i className="icon-quote-left" />
                        </span>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <p className="name">Rodel Golez</p>
                        <span className="position">Mother</span>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="testimony-wrap d-flex">
                      <div className="user-img mr-4" style={{ backgroundImage: "url(static/images/teacher-1.jpg)" }} />
                      <div className="text ml-2">
                        <span className="quote d-flex align-items-center justify-content-center">
                          <i className="icon-quote-left" />
                        </span>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <p className="name">Ken Bosh</p>
                        <span className="position">Mother</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="ftco-gallery">
          <div className="container-wrap">
            <div className="row no-gutters">
              <div className="col-md-3 ">
                <a
                  href="images/image_1.jpg"
                  className="gallery image-popup img d-flex align-items-center"
                  style={{ backgroundImage: "url(static/images/course-1.jpg)" }}
                >
                  <div className="icon mb-4 d-flex align-items-center justify-content-center">
                    <span className="icon-instagram" />
                  </div>
                </a>
              </div>
              <div className="col-md-3 ">
                <a
                  href="images/image_2.jpg"
                  className="gallery image-popup img d-flex align-items-center"
                  style={{ backgroundImage: "url(static/images/image_2.jpg)" }}
                >
                  <div className="icon mb-4 d-flex align-items-center justify-content-center">
                    <span className="icon-instagram" />
                  </div>
                </a>
              </div>
              <div className="col-md-3 ">
                <a
                  href="images/image_3.jpg"
                  className="gallery image-popup img d-flex align-items-center"
                  style={{ backgroundImage: "url(static/images/image_3.jpg)" }}
                >
                  <div className="icon mb-4 d-flex align-items-center justify-content-center">
                    <span className="icon-instagram" />
                  </div>
                </a>
              </div>
              <div className="col-md-3 ">
                <a
                  href="images/image_4.jpg"
                  className="gallery image-popup img d-flex align-items-center"
                  style={{ backgroundImage: "url(static/images/image_4.jpg)" }}
                >
                  <div className="icon mb-4 d-flex align-items-center justify-content-center">
                    <span className="icon-instagram" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Index;
