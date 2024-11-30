import React from "react";

const Slider = () => {
  return (
    <div>
      <div className="hero_area">
        <div className="hero_bg_box">
          <div className="bg_img_box">
            <img src="images/hero-bg.png" alt="" />
          </div>
        </div>
        <section className="slider_section">
          <div
            id="customCarousel1"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="detail-box">
                        <h1>
                          Expertise <br />
                          in Cost Management
                        </h1>
                        <p>
                          Vadivel CMA is a seasoned and accomplished Cost
                          Accountant with a wealth of professional
                          experience in the field of cost and management
                          accounting. As a Partner at Starp & Associates,
                          Vadivel has been instrumental in delivering
                          comprehensive financial and accounting solutions
                          to clients across various industries.
                        </p>
                        <div className="btn-box">
                          <a href="" className="btn1">
                            {" "}
                            Read More{" "}
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="img-box">
                        <img src="images/slider-img1.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="detail-box">
                        <h1>
                          Driving <br />
                          Financial Excellence
                        </h1>
                        <p>
                          With several years of hands-on expertise, Vadivel
                          has specialized in areas such as cost analysis,
                          financial planning, management reporting,
                          compliance with statutory requirements, and
                          strategic cost management. His dedication to
                          accuracy, efficiency, and value-driven services
                          has earned him a reputation for excellence in the
                          profession.
                        </p>
                        <div className="btn-box">
                          <a href="" className="btn1">
                            {" "}
                            Read More{" "}
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="img-box">
                        <img src="images/slider-img2.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="detail-box">
                        <h1>
                          Strategic <br />
                          Cost Analysis
                        </h1>
                        <p>
                          As a practicing member of the Institute of Cost
                          Accountants of India (ICAI), Vadivel stays
                          updated on the latest industry trends and
                          regulatory changes, ensuring his clients receive
                          the most current and effective guidance. His
                          commitment to professional growth and ethical
                          practices underscores his leadership role within
                          Starp & Associates.
                        </p>
                        <div className="btn-box">
                          <a href="" className="btn1">
                            {" "}
                            Read More{" "}
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="img-box">
                        <img src="images/slider-img3.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ol className="carousel-indicators">
              <li
                data-target="#customCarousel1"
                data-slide-to="0"
                className="active"
              ></li>
              <li data-target="#customCarousel1" data-slide-to="1"></li>
              <li data-target="#customCarousel1" data-slide-to="2"></li>
            </ol>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Slider;
