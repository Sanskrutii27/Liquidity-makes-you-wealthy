import React from "react";
import "./Footor.css";
import { Link } from "react-router-dom";

const Footor = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div>
      <section className="info_section layout_padding2" id="our_home">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-3 info_col">
              <div className="info_contact">
                <h4>Address</h4>
                <div className="contact_link_box">
                  <Link to="">
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    <span>Pune</span>
                  </Link>
                  <Link to="">
                    <i className="fa fa-phone" aria-hidden="true"></i>
                    <span>Call +91 7821923588</span>
                  </Link>
                  <Link to="">
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                    <span>blackbullwave5@gmail.com</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 info_col">
              <div className="info_detail">
                <h4>Info</h4>
                <p>
                  Outline the range of services provided, such as trading platforms, investment products, 
                  research, and educational resources.
                  Display real-time market data and analysis.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-2 mx-auto info_col">
              <div className="info_link_box">
                <h4>Links</h4>
                <div className="info_links">
                  <Link to="/" className="active" onClick={() => scrollToSection('our_home')}>Home</Link>
                  <Link to="/" className="" onClick={() => scrollToSection('about_us')}>About</Link>
                  <Link to="/" className="" onClick={() => scrollToSection('our_servises')}>Services</Link>
                  <Link to="/" className="" onClick={() => scrollToSection('why_us')}>Why Us</Link>
                  <Link to="/" className="" onClick={() => scrollToSection('our_team')}>Team</Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 info_col ">
              <h4>Subscribe</h4>
              <form action="#">
                <input type="text" placeholder="Enter email" />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footor;
