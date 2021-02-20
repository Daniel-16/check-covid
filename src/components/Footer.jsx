import React from "react";

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <footer className="mt-5" style={{ backgroundColor: "lightgrey" }}>
      <div className="container">
        <p className="text-center">Terms and Conditions Apply</p>
        <div className="flex-center">
          <small className="text-muted">&copy; {year} Check Covid</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
