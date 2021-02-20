import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="jumbotron z-depth-0 blue-grey lighten-5">
        <h1 className="h1-responsive">About Us</h1>
        <p>
          Check Covid is a web app that was built by Daniel Oloruntoba to
          provide information necessary to know all about the Covid-19 and how
          to prevent contacting the virus. It provides real time information
          from resources such as{" "}
          <a href="https://disease.sh" target="_blank" rel="noreferrer">
            Disease.sh
          </a>{" "}
          and other resources for its News.
        </p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="card h-100">
              <div className="card-body">
                <h2 className="card-title text-center">
                  <span className="fa fa-phone"></span>
                </h2>
                <p className="card-text">
                  To contact me, you can reach me out on my phone{" "}
                  <a href="tel:+2349077234932" className="card-link">
                    here
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="card h-100">
              <div className="card-body">
                <h2 className="card-title text-center">
                  <span className="fab fa-facebook"></span>
                </h2>
                <p className="card-text">
                  You can also reach out to me on Facebook through the link
                  below.
                </p>
                <a
                  href="https://www.facebook.com/Icehood.16"
                  className="card-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Daniel Oloruntoba
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3 mb-3">
          <div className="col-6">
            <div className="card h-100">
              <div className="card-body">
                <h2 className="card-title text-center">
                  <span className="fab fa-twitter"></span>
                </h2>
                <p className="card-text">
                  You can also reach out to me on twitter through the link
                  below.
                </p>
                <a
                  className="card-link"
                  href="https://www.twitter.com/DanielOlorunto6"
                  target="_blank"
                  rel="noreferrer"
                >
                  Daniel Oloruntoba
                </a>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="card h-100">
              <div className="card-body">
                <h2 className="card-title text-center">
                  <span className="fab fa-instagram"></span>
                </h2>
                <p className="card-text">
                  You can as well follow me on Instagram through the link below.
                </p>
                <a
                  className="card-link"
                  href="https://www.instagram.com/danyel_18_/"
                  target="_blank"
                  rel="noreferrer"
                >
                  danyel_18_
                </a>
              </div>
            </div>
          </div>
        </div>
        <h3 className="text-center">More About Check Covid</h3>
        <hr />
        <p>
          Check Covid provides information about all Covid related data. This
          data on the site is not static as it updates frequently. Also Check
          Covid provides real Covid related news that updates frequently. Check
          Covid fetches APIs from resources such as Disease.sh and News API.
          <br />
          <br />
          The self assessment section of Check Covid is meant to determine if
          you are at risk of contacting or may have contacted the virus. Please
          note that the results from the self assessment is not for testing
          purposes neither does it store any information gotten from the
          results.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default About;
