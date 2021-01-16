import React, { useState } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavLink,
  MDBNavItem,
  MDBNavbarToggler,
  MDBCollapse,
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Router>
      <div className="sticky-top">
        <MDBNavbar className="bg-white shadow-md" color="" light expand="md">
          <MDBNavbarBrand className="mx-auto" style={{ fontSize: 27 }}>
            {/* <div style={{ width: 95 }}> */}
            <strong className="text-secondary">C</strong>
            <strong className="text-danger">he</strong>
            <strong className="text-success mr-2">ck</strong>
            <strong className="text-warning">Co</strong>
            <strong className="text-info">vid</strong>
            {/* </div> */}
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={toggle} />
          <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
            <MDBNavbarNav right>
              <MDBNavItem>
                <MDBNavLink to="/">Home</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/news">News</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="#">Contact</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="#">About</MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </div>
    </Router>
  );
};

export default Navbar;
