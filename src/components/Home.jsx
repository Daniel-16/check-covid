import React from "react";
// import { MDBView, MDBMask } from "mdbreact";
// import logo from "../image/image.jpg";
import CovidDataProvider from "./Data";
import LocationData from "./LocationData";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Prevention from "./Prevention";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      {/* <MDBView>
        <img src={logo} className="img-fluid" alt="Laptop" />
        <MDBMask className="flex-center" overlay="black-strong">
          <div className="container animated fadeInUp">
            <h3 className="text-center white-text">What is Coronavirus?</h3>
            <p className="white-text">
              Coronaviruses are a large family of viruses that are known to
              cause illnesses ranging from the common cold to more severe
              diseasese such as Middle East Respiratory Syndrome (MERS) and
              Severe Acute Respiratory Syndrome (SARS)
            </p>
          </div>
        </MDBMask>
      </MDBView> */}
      <div className="jumbotron lighten-5 blue-grey z-depth-0">
        <h3>What is Coronavirus?</h3>
        <p>
          Coronaviruses are a large family of viruses that are known to cause
          illnesses ranging from the common cold to more severe diseasese such
          as Middle East Respiratory Syndrome (MERS) and Severe Acute
          Respiratory Syndrome (SARS)
        </p>
      </div>
      <CovidDataProvider />
      <LocationData />
      <Prevention />
      <Footer />
    </div>
  );
};

export default HomePage;
