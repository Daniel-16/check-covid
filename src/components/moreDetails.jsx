import React, { useState, useEffect } from "react";

const Details = () => {
  const [toggle, setToggle] = useState(false);
  const [items, setItems] = useState({
    active: [],
    affectedCountries: [],
    cases: [],
    critical: [],
    deaths: [],
    population: [],
    recovered: [],
    tests: [],
    todayCases: [],
    todayDeaths: [],
    todayRecovered: [],
  });
  const toggleCard = () => {
    setToggle(!toggle);
  };
  useEffect(() => {
    fetch(`https://disease.sh/v3/covid-19/all`)
      .then((res) => res.json())
      .then((res) => {
        setItems(res);
      })
      .catch((err) => {
        console.log("Not able to fetch the data");
      });
  }, []);
  return (
    <div className="container mt-2">
      <div className="card shadow-none border">
        <div className="card-body">
          <h6
            className="text-center"
            onClick={toggleCard}
            style={{ cursor: "pointer" }}
          >
            See more details
            <span
              className={
                toggle === false
                  ? "fa fa-arrow-down ml-2"
                  : "fa fa-arrow-up ml-2"
              }
            ></span>
          </h6>
          <div
            style={
              toggle === false ? { display: "none" } : { display: "block" }
            }
          >
            <p className="card-text text-center">
              <strong style={{ fontSize: 20 }}>Worldwide Data</strong>
              <br />
              Active Cases: {items.active.toLocaleString("en-US")}
              <br />
              Affected Countries:{" "}
              {items.affectedCountries.toLocaleString("en-US")}
              <br />
              Total Confirmed: {items.cases.toLocaleString("en-US")}
              <br />
              Critical: {items.critical.toLocaleString("en-US")}
              <br />
              Total Deaths: {items.deaths.toLocaleString("en-US")}
              <br />
              Population: {items.population.toLocaleString("en-US")}
              <br />
              Total Recovered: {items.recovered.toLocaleString("en-US")}
              <br />
              Tests: {items.tests.toLocaleString("en-US")}
              <br />
              Today cases: {items.todayCases.toLocaleString("en-US")}
              <br />
              Today deaths: {items.todayDeaths.toLocaleString("en-US")}
              <br />
              Today recovered: {items.todayRecovered.toLocaleString("en-US")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
