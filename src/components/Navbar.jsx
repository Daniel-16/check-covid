import React, { useState } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
} from "mdbreact";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="sticky-top">
      <MDBNavbar className="bg-white shadow-md" color="" light expand="md">
        <MDBNavbarBrand className="mx-auto" style={{ fontSize: 27 }}>
          {/* <div style={{ width: 95 }}> */}
          <span className="fa fa-virus mr-2" style={{ color: "red" }}></span>
          <strong className="text-secondary">C</strong>
          <strong className="text-danger">he</strong>
          <strong className="text-success mr-2">ck</strong>
          <strong className="" style={{ color: "#FF9900" }}>
            Co
          </strong>
          <strong className="text-info">vid</strong>
          {/* </div> */}
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={toggle} />
        <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
          <MDBNavbarNav right>
            <li
              className="nav-item m-2"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <Link to="/" className="text-dark">
                Home
              </Link>
            </li>
            <li
              className="nav-item m-2"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <Link to="/news" className="text-dark">
                News
              </Link>
            </li>
            <li
              className="nav-item m-2"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <Link to="/selfassessment" className="text-dark">
                Self Assessment
              </Link>
            </li>
            <li
              className="nav-item m-2"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <Link to="/contact" className="text-dark">
                Contact
              </Link>
            </li>
            <li
              className="nav-item m-2"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <Link to="/about" className="text-dark">
                About
              </Link>
            </li>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </div>
  );
};

export default Navbar;
