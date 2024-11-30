import React from 'react'

const About = () => {
  return (
    <div>
        
        <section className="about_section layout_padding">
      <div className="container">
        <div className="heading_container heading_center">
          <h2>About <span>Us</span></h2>
          <p>
            We are a team of seasoned professionals, committed to providing
            exceptional financial services tailored to meet the unique
            needs of our clients.
          </p>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="img-box">
              <img src="images/about-img.png" alt="About Us" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="detail-box">
              <h3>We Are Vadivel & Co</h3>
              <p style={{textAlign: "justify"}}>
                At Vadivel & Co, we specialize in providing expert services
                in GST compliance, internal auditing, cost management, and
                taxation. Our team brings years of experience and a
                thorough understanding of the latest industry regulations
                to offer solutions that not only ensure compliance but also
                drive operational efficiency and cost savings.
              </p>
              <p style={{textAlign: "justify"}}>
                We pride ourselves on delivering tailored services
                including GST Audits, Refunds, Assessments, Internal
                Control assessments, Cost Audits, and more. We work closely
                with businesses across industries to streamline their
                processes, mitigate risks, and unlock value in every aspect
                of financial management.
              </p>
              <a href=""> Read More </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    </div>
  )
}

export default About