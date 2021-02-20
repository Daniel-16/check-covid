import React from "react";
import { Link } from "react-router-dom";

const LocationData = () => {
  return (
    <div className="container mt-3">
      <h1 className="text-center">Countries data</h1>
      <p className="text-center">
        To view all the countries affected by the Coronavirus, click{" "}
        <Link to="/countries">here</Link>
      </p>
    </div>
  );
};

export default LocationData;
