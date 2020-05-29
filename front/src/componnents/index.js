import React from "react";
import { Router, Route, Link } from "react-router";
import { headingImages } from "../sampleData/homePageData";

const Index = (props) => {
  return (
    <>
      <div>
        <section className="home-slider owl-carousel">
          {headingImages.map((item, id) => (
            <div id={id} className="slider-item" style={{ backgroundImage: `url('${item.imageUr})'` }}>
              <div className="overlay" />
              <div className="container">
                <div className="row no-gutters slider-text align-items-center justify-content-start" data-scrollax-parent="true">
                  <div className="col-md-6 ftco-animate">
                    <h1 className="mb-4">{item.title}</h1>
                    <p>{item.desc}</p>
                    {item.button.map((button, id) => (
                      <p id={id}>
                        <a href={button.link} className="btn btn-primary px-4 py-3 mt-3">
                          {button.title}
                        </a>
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
        <section className="ftco-services ftco-no-pb">
          <div className="container-wrap">
            <div className="row no-gutters">
              <div className="col-md-3 d-flex services align-self-stretch py-5 px-4 ftco-animate bg-primary">
                <div className="media block-6 d-block text-center">
                  <div className="icon d-flex justify-content-center align-items-center">
                    <span className="flaticon-teacher" />
                  </div>
                  <div className="media-body p-2 mt-3">
                    <h3 className="heading">Certified Teachers</h3>
                    <p>
                      Faculty members are passionate and curious individuals, highly accessible Professors also make themselves available to students
                      outside of the classroom.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 d-flex services align-self-stretch py-5 px-4 ftco-animate bg-darken">
                <div className="media block-6 d-block text-center">
                  <div className="icon d-flex justify-content-center align-items-center">
                    <span className="flaticon-reading" />
                  </div>
                  <div className="media-body p-2 mt-3">
                    <h3 className="heading">Special Education</h3>
                    <p>
                      The college is committed to achieving excellence by developing skill, and knowledge among its students in the area of
                      technology.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 d-flex services align-self-stretch py-5 px-4 ftco-animate bg-primary">
                <div className="media block-6 d-block text-center">
                  <div className="icon d-flex justify-content-center align-items-center">
                    <span className="flaticon-books" />
                  </div>
                  <div className="media-body p-2 mt-3">
                    <h3 className="heading">Book &amp; Library</h3>
                    <p>
                      The library operates at Open Access System. The Collection of books and other reading materials are being built at a fast rate.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 d-flex services align-self-stretch py-5 px-4 ftco-animate bg-darken">
                <div className="media block-6 d-block text-center">
                  <div className="icon d-flex justify-content-center align-items-center">
                    <span className="flaticon-diploma" />
                  </div>
                  <div className="media-body p-2 mt-3">
                    <h3 className="heading">Sport Clubs</h3>
                    <p>
                      The college has good infrastructue for sports and games. Students are encouraged to participate in Kurukshetra University Games.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ftco-section ftco-no-pt ftc-no-pb">
          <div className="container">
            <div className="row d-flex">
              <div className="col-md-5 order-md-last wrap-about wrap-about d-flex align-items-stretch">
                <div className="img" style={{ backgroundImage: "url(static/images/about.jpg)" }} />
              </div>
              <div className="col-md-7 wrap-about py-5 pr-md-4 ftco-animate">
                <h2 className="mb-4">What We Offer</h2>
                <p>
                  Department of Computer Science and Engineering, JMIT provides an online plateform ELearning for learning various courses through
                  video tutorials, lecture notes delievered by our faculty.
                </p>
                <div className="row mt-5">
                  <div className="col-lg-6">
                    <div className="services-2 d-flex">
                      <div className="icon mt-2 d-flex justify-content-center align-items-center">
                        <span className="flaticon-security" />
                      </div>
                      <div className="text pl-3">
                        <h3>Data Structures</h3>
                        <p>
                          Data structure is a collection of data values, the relationships among them, and the functions or operations that can be
                          applied to the data.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="services-2 d-flex">
                      <div className="icon mt-2 d-flex justify-content-center align-items-center">
                        <span className="flaticon-reading" />
                      </div>
                      <div className="text pl-3">
                        <h3>Automata Theory</h3>
                        <p>
                          Automata theory is the study of abstract machines and automata, as well as the computational problems that can be solved
                          using them.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="services-2 d-flex">
                      <div className="icon mt-2 d-flex justify-content-center align-items-center">
                        <span className="flaticon-diploma" />
                      </div>
                      <div className="text pl-3">
                        <h3>DBMS</h3>
                        <p>
                          Database Management System is a software for storing and retrieving users' data by considering appropriate security
                          measures.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="services-2 d-flex">
                      <div className="icon mt-2 d-flex justify-content-center align-items-center">
                        <span className="flaticon-education" />
                      </div>
                      <div className="text pl-3">
                        <h3>Operating System</h3>
                        <p>
                          An operating system is a software which performs all the basic tasks like file management, memory management, process
                          management etc.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="services-2 d-flex">
                      <div className="icon mt-2 d-flex justify-content-center align-items-center">
                        <span className="flaticon-jigsaw" />
                      </div>
                      <div className="text pl-3">
                        <h3>Python</h3>
                        <p>This course is a great introduction to both fundamental programming concepts and the Python programming language.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="services-2 d-flex">
                      <div className="icon mt-2 d-flex justify-content-center align-items-center">
                        <span className="flaticon-kids" />
                      </div>
                      <div className="text pl-3">
                        <h3>Java</h3>
                        <p>
                          Java can help reduce costs, drive innovation, &amp; improve application services; the #1 programming language for IoT,
                          enterprise architecture.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="ftco-section ftco-counter img"
          id="section-counter"
          style={{ backgroundImage: "url(static/images/bg_3.jpg)" }}
          data-stellar-background-ratio="0.5"
        >
          <div className="container">
            <div className="row justify-content-center mb-5 pb-2 d-flex">
              <div className="col-md-6 align-items-stretch d-flex">
                <div className="img img-video d-flex align-items-center" style={{ backgroundImage: "url(static/images/about-2.jpg)" }}>
                  <div className="video justify-content-center">
                    <a href="https://youtu.be/gDnH4acvmY8" className="icon-video popup-vimeo d-flex justify-content-center align-items-center">
                      <span className="ion-ios-play" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 heading-section heading-section-white ftco-animate pl-lg-5 pt-md-0 pt-5">
                <h2 className="mb-4">Seth Jai Parkash Mukand Lal Institute of Engineering and Technology</h2>
                <p>
                  Seth Jai Parkash Mukand Lal Institute of Engineering and Technology is located in rural pollution-free and green habitat of Radaur
                  at a Distance of 18km from YAMUNA NAGAR and 28km from KURUKSHETRA. The Institute has been approved by AICTE and is affiliated to
                  Kurukshetra University, Kurukshetra.
                </p>
                <p>
                  The college provides many UG &amp; PG Engineering Courses as B.Tech and M.Tech in several disciplines along with BBA, MBA, BCA, and
                  MCA Course so far with a different number of the annual intake of students.
                </p>
              </div>
            </div>
            <div className="row d-md-flex align-items-center justify-content-center">
              <div className="col-lg-12">
                <div className="row d-md-flex align-items-center">
                  <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
                    <div className="block-18">
                      <div className="icon">
                        <span className="flaticon-doctor" />
                      </div>
                      <div className="text">
                        <strong className="number" data-number={287}>
                          0+
                        </strong>
                        <span>Placements</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
                    <div className="block-18">
                      <div className="icon">
                        <span className="flaticon-doctor" />
                      </div>
                      <div className="text">
                        <strong className="number" data-number={1857}>
                          0
                        </strong>
                        <span>Students</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
                    <div className="block-18">
                      <div className="icon">
                        <span className="flaticon-doctor" />
                      </div>
                      <div className="text">
                        <strong className="number" data-number={375}>
                          0
                        </strong>
                        <span>Guest Lecture/Workshops</span>
                      </div>
                    </div>
                  </div>
                  {/* <div
                  class="col-md d-flex justify-content-center counter-wrap ftco-animate"
                >
                  <div class="block-18">
                    <div class="icon">
                      <span class="flaticon-doctor"></span>
                    </div>
                    <div class="text">
                      <strong class="number" data-number="50">0</strong>
                      <span>Awards Won</span>
                    </div>
                  </div>
                </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ftco-section">
          <div className="container-fluid px-4">
            <div className="row justify-content-center mb-5 pb-2">
              <div className="col-md-8 text-center heading-section ftco-animate">
                <h2 className="mb-4">
                  <span>Our</span> Courses
                </h2>
                <p>
                  Department of Computer Science and Engineering, JMIT provides an online plateform ELearning for learning various courses through
                  video tutorials, lecture notes delievered by our faculty.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 course ftco-animate">
                <div className="img" style={{ backgroundImage: "url(static/images/course-1.jpg)" }} />
                <div className="text pt-4">
                  <h3>
                    <a href="#">Data Structures</a>
                  </h3>
                  <p>
                    Data structure is a collection of data values, the relationships among them, and the functions or operations that can be applied
                    to the data.
                  </p>
                  <p>
                    <a href="#" className="btn btn-primary">
                      View More
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-md-3 course ftco-animate">
                <div className="img" style={{ backgroundImage: "url(static/images/course-2.jpg)" }} />
                <div className="text pt-4">
                  <h3>
                    <a href="#">DBMS</a>
                  </h3>
                  <p>Database Management System is a software for storing and retrieving users' data by considering appropriate security measures.</p>
                  <p>
                    <a href="#" className="btn btn-primary">
                      View More
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-md-3 course ftco-animate">
                <div className="img" style={{ backgroundImage: "url(static/images/course-3.jpg)" }} />
                <div className="text pt-4">
                  <h3>
                    <a href="#">Automata Theory</a>
                  </h3>
                  <p>
                    Automata theory is the study of abstract machines and automata, as well as the computational problems that can be solved using
                    them.
                  </p>
                  <p>
                    <a href="#" className="btn btn-primary">
                      View More
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-md-3 course ftco-animate">
                <div className="img" style={{ backgroundImage: "url(static/images/course-4.jpg)" }} />
                <div className="text pt-4">
                  <h3>
                    <a href="#">Operating System</a>
                  </h3>
                  <p>
                    An operating system is a software which performs all the basic tasks like file management, memory management, process management
                    etc.
                  </p>
                  <p>
                    <a href="#" className="btn btn-primary">
                      View More
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* TEACHER SECTION */}
        <section className="ftco-section bg-light">
          <div className="container-fluid px-4">
            <div className="row justify-content-center mb-5 pb-2">
              <div className="col-md-8 text-center heading-section ftco-animate">
                <h2 className="mb-4">Certified Teachers</h2>
                <p>
                  Faculty members are passionate and curious individuals, highly accessible Professors also make themselves available to students
                  outside of the classroom.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-3 ftco-animate">
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
                        <li className="ftco-animate">
                          <a href="#">
                            <span className="icon-twitter" />
                          </a>
                        </li>
                        <li className="ftco-animate">
                          <a href="#">
                            <span className="icon-facebook" />
                          </a>
                        </li>
                        <li className="ftco-animate">
                          <a href="#">
                            <span className="icon-google-plus" />
                          </a>
                        </li>
                        <li className="ftco-animate">
                          <a href="#">
                            <span className="icon-instagram" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 ftco-animate">
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
                        <li className="ftco-animate">
                          <a href="#">
                            <span className="icon-twitter" />
                          </a>
                        </li>
                        <li className="ftco-animate">
                          <a href="#">
                            <span className="icon-facebook" />
                          </a>
                        </li>
                        <li className="ftco-animate">
                          <a href="#">
                            <span className="icon-google-plus" />
                          </a>
                        </li>
                        <li className="ftco-animate">
                          <a href="#">
                            <span className="icon-instagram" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 ftco-animate">
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
                        <li className="ftco-animate">
                          <a href="#">
                            <span className="icon-twitter" />
                          </a>
                        </li>
                        <li className="ftco-animate">
                          <a href="#">
                            <span className="icon-facebook" />
                          </a>
                        </li>
                        <li className="ftco-animate">
                          <a href="#">
                            <span className="icon-google-plus" />
                          </a>
                        </li>
                        <li className="ftco-animate">
                          <a href="#">
                            <span className="icon-instagram" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 ftco-animate">
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
                        <li className="ftco-animate">
                          <a href="#">
                            <span className="icon-twitter" />
                          </a>
                        </li>
                        <li className="ftco-animate">
                          <a href="#">
                            <span className="icon-facebook" />
                          </a>
                        </li>
                        <li className="ftco-animate">
                          <a href="#">
                            <span className="icon-google-plus" />
                          </a>
                        </li>
                        <li className="ftco-animate">
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
                  <div className="heading-section heading-section-white ftco-animate mb-5">
                    <h2 className="mb-4">Request A Quote</h2>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  </div>
                  <form action="#" className="appointment-form ftco-animate">
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
              <div className="col-md-8 text-center heading-section ftco-animate">
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
              <div className="col-md-6 col-lg-4 ftco-animate">
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
              <div className="col-md-6 col-lg-4 ftco-animate">
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
              <div className="col-md-6 col-lg-4 ftco-animate">
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
              <div className="col-md-8 text-center heading-section ftco-animate">
                <h2 className="mb-4">Student Says About Us</h2>
                <p>
                  Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a
                  paradisematic country
                </p>
              </div>
            </div>
            <div className="row ftco-animate justify-content-center">
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
              <div className="col-md-3 ftco-animate">
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
              <div className="col-md-3 ftco-animate">
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
              <div className="col-md-3 ftco-animate">
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
              <div className="col-md-3 ftco-animate">
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
