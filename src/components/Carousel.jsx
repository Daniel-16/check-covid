import React, { useState } from "react";
import logo from "../image/image.jpg";
import logo2 from "../image/image2.jpg";
import logo3 from "../image/image3.jpg";

const Carousel = () => {
  return (
    <div
      className="carousel slide carousel-fade"
      id="carouselExample"
      data-mdb-ride="carousel"
    >
      <ol className="carousel indicators">
        <li
          data-mdb-target="#carouselExample"
          data-mdb-slide-to="0"
          className="active"
        ></li>
        <li data-mdb-target="#carouselExample" data-mdb-slide-to="0"></li>
        <li data-mdb-target="#carouselExample" data-mdb-slide-to="0"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={logo} className="d-block w-100" alt="logo" />
        </div>
        <div className="carousel-item">
          <img src={logo2} className="d-block w-100" alt="logo" />
        </div>
        <div className="carousel-item">
          <img src={logo3} className="d-block w-100" alt="logo" />
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExample"
        role="button"
        data-mdb-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Prev</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExample"
        role="button"
        data-mdb-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </a>
    </div>
  );
};

export default Carousel;
