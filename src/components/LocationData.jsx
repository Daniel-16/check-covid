import React, { useState } from "react";

const LocationData = () => {
  const [search, setSearch] = useState("");
  const [items, setItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [error, setError] = useState(null);
  const [results, setResults] = useState("");

  const handleChange = (event) => {
    setSearch(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`https://disease.sh/v3/covid-19/countries/${search}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setItems(res);
        setIsLoaded(true);
        // if (res.status === 404) {
        //   setItems(res.message);
        // }
      })
      .catch((error) => {
        console.error("Could not fetch data", error);
        setError(error);
      });

    console.log(search);
    setSearchValue(search);
    setSearch("");
  };

  return (
    <div className="container mt-3">
      <h1 className="text-center">Countries Data</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <input
            id="mainInput"
            type="text"
            className="form-control shadow-none"
            placeholder="Search country"
            onChange={handleChange}
            value={search}
          />
          <button
            type="submit"
            className="input-group-text bg-primary text-white"
          >
            <i className="fa fa-search"></i>
          </button>
        </div>
      </form>
      <div className="flex-center">
        {searchValue !== "" ? `Showing results for "${searchValue}"` : ""}
        <br />
      </div>
      <p className="text-center">{searchValue !== "" && items.country}</p>
      <div className="flex-center m-2">
        <img src={items.countryInfo.flag} width="30" height="20" alt="Flag" />
      </div>
      <div className="row">
        <div className="col-6">
          <div className="card bg-danger h-100 white-text">
            <div className="card-body">
              <h6 className="text-center">Total Deaths</h6>
              <h4 className="text-center">
                {error ? "Error Loading Data" : items.deaths}
              </h4>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="card bg-success h-100 white-text">
            <div className="card-body">
              <h6 className="text-center">Total Recovered</h6>
              <h4 className="text-center">
                {error ? "Error Loading Data" : items.recovered}
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
                {error ? "Error Loading data" : items.cases}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationData;
