import React from "react";

const CountryData = ({ error, items }) => {
  const { deaths, recovered, cases } = items;
  return (
    <div>
      <div className="row">
        <div className="col-6">
          <div className="card bg-danger h-100 white-text">
            <div className="card-body">
              <h6 className="text-center">Total Deaths</h6>
              <h4 className="text-center">
                {error ? "Error Loading Data" : deaths}
              </h4>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="card bg-success h-100 white-text">
            <div className="card-body">
              <h6 className="text-center">Total Recovered</h6>
              <h4 className="text-center">
                {error ? "Error Loading Data" : recovered}
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-3 mb-3">
        <div className="col">
          <div className="card bg-warning h-100">
            <div className="card-body">
              <h6 className="text-center">Total Confirmed</h6>
              <h4 className="text-center">
                {error ? "Error Loading data" : cases}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryData;
