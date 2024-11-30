import React from "react";
import { motion } from "framer-motion";

const serviceData = [
  {
    id: 1,
    imgSrc: "images/GST_audit.png",
    title: "GST Audit",
    description:
      "We provide GST Audit, Refund, Assessment, LUT filing, and Training services to ensure compliance and ease GST management.",
    delay: 0.2,
  },
  {
    id: 2,
    imgSrc: "images/Internal_audit.png",
    title: "Internal Audit",
    description:
      "We offer Internal Control assessments, Department-wise audits, and Statutory Payment checks to enhance operational efficiency and ensure compliance.",
    delay: 0.4,
  },
  {
    id: 3,
    imgSrc: "images/Cost_audit.png",
    title: "Cost Audit",
    description:
      "We assist with Maintenance of Costing Records, Cost Audits, Make or Buy decisions, Automation, and provide Cost Saving ideas.",
    delay: 0.6,
  },
  {
    id: 4,
    imgSrc: "images/Cost_audit.png",
    title: "Income Tax",
    description:
      "We assist with Maintenance of Costing Records, Cost Audits, Make or Buy decisions, Automation, and provide Cost Saving ideas.",
    delay: 0.8,
  },
  {
    id: 5,
    imgSrc: "images/Cost_audit.png",
    title: "Special Audit",
    description:
      "We assist with Maintenance of Costing Records, Cost Audits, Make or Buy decisions, Automation, and provide Cost Saving ideas.",
    delay: 1.0,
  },
];
const SlideLeft = (delay) => {
  return {
    initial: {
      opacity: 0,
      x: 50,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};

const Services = () => {
  return (
    <div>
      <section className="service_section layout_padding">
        <div className="service_container">
          <div className="container">
            <div className="heading_container heading_center">
              <h2>
                Our <span>Services</span>
              </h2>
              <p>
                We provide a comprehensive range of services tailored to
                meet the diverse needs of our clients, ensuring quality,
                precision, and value in every solution we deliver.
              </p>
            </div>
            <div className="row">
              {serviceData.map((service, index) => (
                <motion.div
                  key={service.id}
                  variants={SlideLeft(service.delay)}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  className={`col-md-4 ${
                    index === 3 ? "offset-md-2" : ""
                  }`}
                >
                  <div
                    // className={`col-md-4 ${
                    //   index === 3 ? "offset-md-2" : ""
                    // }`}
                    // key={index}
                  >
                    <div className="box" style={{ minHeight:"300px"}}>
                      <div className="img-box">
                        <img src={service.imgSrc} alt={service.title} />
                      </div>
                      <div className="detail-box">
                        <h5>{service.title}</h5>
                        <p>{service.description}</p>
                        <a href=""> Read More </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="btn-box">
              <a href=""> View All </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
