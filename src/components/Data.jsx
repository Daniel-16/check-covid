import React, { useEffect, useState } from "react";

const CovidDataProvider = () => {
  const [items, setItems] = useState({
    deaths: {},
    cases: {},
    recovered: {},
  });
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://disease.sh/v3/covid-19/all`)
      .then((res) => res.json())
      .then((res) => {
        setItems(res);
        setIsLoaded(true);
        console.log(res);
      })
      .catch((error) => {
        setIsLoaded(true);
        setError(error);
      });
  }, []);

  if (error) {
    return (
      <div className="container">
        <h1 className="text-center">Worldwide Data</h1>
        <hr />
        <div className="row">
          <div className="col-6">
            <div className="card bg-danger h-100 white-text">
              <div className="card-body">
                <h6 className="text-center">Total Deaths</h6>
                <h4 className="text-center">Error Loading Data</h4>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="card bg-success h-100 white-text">
              <div className="card-body">
                <h6 className="text-center">Total Recovered</h6>
                <h4 className="text-center">Error Loading Data</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col">
            <div className="card bg-warning h-100">
              <div className="card-body">
                <h6 className="text-center">Total Confirmed</h6>
                <h4 className="text-center">Error Loading Data</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (!isLoaded) {
    return (
      <div className="container">
        <h1 className="text-center">Worldwide Data</h1>
        <hr />
        <div className="row">
          <div className="col-6">
            <div className="card bg-danger h-100 white-text">
              <div className="card-body">
                <h6 className="text-center">Total Deaths</h6>
                <div className="flex-center">
                  <div className="spinner-border text-dark"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="card bg-success h-100 white-text">
              <div className="card-body">
                <h6 className="text-center">Total Recovered</h6>
                <div className="flex-center">
                  <div className="spinner-border text-dark"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col">
            <div className="card bg-warning h-100">
              <div className="card-body">
                <h6 className="text-center">Total Confirmed</h6>
                <div className="flex-center">
                  <div className="spinner-border text-dark"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container">
        <h1 className="text-center">Worldwide Data</h1>
        <hr />
        <div className="row">
          <div className="col-6">
            <div className="card bg-danger h-100 white-text">
              <div className="card-body">
                <h6 className="text-center">Total Deaths</h6>
                <h4 className="text-center h4-responsive">
                  {items.deaths.toLocaleString("en-US")}
                </h4>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="card bg-success h-100 white-text">
              <div className="card-body">
                <h6 className="text-center">Total Recovered</h6>
                <h4 className="text-center h4-responsive">
                  {items.recovered.toLocaleString("en-US")}
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col">
            <div className="card bg-warning h-100">
              <div className="card-body">
                <h6 className="text-center">Total Confirmed</h6>
                <h4 className="text-center h4-responsive">
                  {items.cases.toLocaleString("en-US")}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default CovidDataProvider;
