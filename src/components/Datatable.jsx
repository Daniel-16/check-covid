import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Datatable = ({ data }) => {
  const [search, setSearch] = useState("");
  return (
    <div>
      <div className="container">
        <input
          type="text"
          className="form-control mb-3"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          placeholder="Search country"
        />
      </div>
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead style={{ backgroundColor: "red", color: "white" }}>
            <tr>
              <th>Country</th>
              <th>Confirmed</th>
              <th>Deaths</th>
              <th>Recovered</th>
              <th>Population</th>
            </tr>
          </thead>
          <tbody>
            {data
              // eslint-disable-next-line
              .filter((country) => {
                if (search === "") {
                  return country;
                } else if (
                  country.country.toLowerCase().includes(search.toLowerCase())
                ) {
                  return country;
                }
              })
              .map((country) => {
                return (
                  <tr key={uuidv4()}>
                    <td className="td-responsive">
                      <img
                        src={country.countryInfo.flag}
                        alt="Flag"
                        className="img-fluid mr-2"
                        style={{ width: 17, height: 13 }}
                      />
                      {country.country.toLocaleString("en-US")}
                    </td>
                    <td>{country.cases.toLocaleString("en-US")}</td>
                    <td>{country.deaths.toLocaleString("en-US")}</td>
                    <td>{country.recovered.toLocaleString("en-US")}</td>
                    <td>{country.population.toLocaleString("en-US")}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Datatable;
