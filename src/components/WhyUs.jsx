import React from "react";

const WhyUs = () => {
  return (
    <div>
      <section className="why_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>
              Why Choose <span>Us</span>
            </h2>
          </div>
          <div className="why_container">
            {/* One Stop Solution for Corporates */}
            <div className="box">
              <div className="img-box">
                <img src="images/oneStop.gif" alt="One Stop Solution" />
              </div>
              <div className="detail-box">
                <h5>One Stop Solution For Corporates</h5>
                <p>
                  We offer a comprehensive range of services, including
                  Income Tax, GST, MSME Registration, ESI, PF, FSSAI, Pay
                  Roll, Accounting Services, ROC, and TDS&TCS compliance.
                  Our all-in-one approach streamlines your business
                  operations.
                </p>
              </div>
            </div>
            {/* Virtual CFO Services */}
            <div className="box">
              <div className="img-box">
                <img src="images/CFO.gif" alt="Virtual CFO Services" />
              </div>
              <div className="detail-box">
                <h5>Virtual CFO Services</h5>
                <p>
                  Our Virtual CFO services offer expert guidance in
                  Corporate Training, Tax Planning, Treasury Management,
                  MIS Reporting, and Budgeting, ensuring your financial
                  strategy is always aligned with business goals.
                </p>
              </div>
            </div>
            {/* Corporate Services */}
            <div className="box">
              <div className="img-box">
                <img src="images/corporate.gif" alt="Corporate Services" />
              </div>
              <div className="detail-box">
                <h5>Corporate Services</h5>
                <p>
                  We provide essential services such as Secretarial
                  Services, Legal Services, Corporate Training, Manpower
                  Deployment, and Maintenance of Statutory Books, helping
                  your business run smoothly and stay compliant.
                </p>
              </div>
            </div>
            {/* Bank Related Activities */}
            <div className="box">
              <div className="img-box">
                <img
                  src="images/bankGIF.gif"
                  alt="Bank Related Activities"
                />
              </div>
              <div className="detail-box">
                <h5>Bank Related Activities</h5>
                <p>
                  We assist with Bank Audits, Debtor Audits, Inventory
                  Audits, Loan Management, and Financial Projections,
                  ensuring your banking operations are efficient and in
                  line with best practices.
                </p>
              </div>
            </div>
          </div>
          <div className="btn-box">
            <a href=""> Read More </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyUs;
