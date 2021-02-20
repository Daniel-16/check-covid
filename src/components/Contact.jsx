import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const ContactUs = () => {
  return (
    <div>
      <Navbar />
      <div className="jumbotron lighten-5 blue-grey z-depth-0">
        <h1 className="h1-responsive">Contact Us</h1>
        <p>
          Please note that this is a personal project and therefore the contacts
          given are for your personal health interests.
        </p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="card h-100">
              <div className="card-body">
                <h2 className="card-title">WHO</h2>
                <p className="card-text">
                  WHO headquarters in Geneva
                  <br />
                  Telephone: +41-22-791211
                </p>
                <a
                  className="card-link"
                  href="https://www.who.int"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit the WHO website
                </a>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="card h-100">
              <div className="card-body">
                <h2 className="card-title">CDC</h2>
                <p className="card-text">
                  CDC, 1600 Clifton Road, Atlanta, GA 30329 USA 800-CDC-INFO |
                  (800-232-4636)
                </p>
                <a
                  className="card-link"
                  href="https://www.cdc.gov"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit the CDC website
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3 mb-3">
          <div className="col-6">
            <div className="card h-100">
              <div className="card-body">
                <h2 className="card-title">NCDC</h2>
                <p className="card-text">
                  NCDC Plot 801, Ebitu Ukiwe Street, Jabi, Abuja, Nigeria
                  <br />
                  0800 970000 10 (Toll-Free Call Center)
                </p>
                <a
                  className="card-link"
                  href="https://www.ncdc.gov.ng"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit the NCDC website
                </a>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title">Africa CDC</h2>
                <p className="card-text">
                  Africa CDC, African Union Commission, Roosevelt Street (Old
                  Airport Area), Addis Ababa. Tel: +251 11 551 7700
                </p>
                <a
                  className="card-link"
                  href="https://www.africacdc.org"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit the Africa CDC website
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
