import React from 'react'

const Footer = () => {
  return (
    <div>
        
        <section className="footer_section">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-6">
            <p>
              &copy; <span id="displayYear"></span> All Rights Reserved by
              <a href="https://html.design/" target="_blank"
                >Vadivel & Co</a
              >
            </p>
          </div>
          <div className="col-md-6 text-md-end">
            <p>
              Designed by
              <a href="https://www.rmsinfotech.com/" target="_blank"
                >RMS Infotech</a
              >
            </p>
          </div>
        </div>
      </div>
    </section>

    </div>
  )
}

export default Footer