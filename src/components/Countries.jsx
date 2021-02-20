import React, { useState, useEffect } from "react";
import Datatable from "./Datatable";
import Navbar from "./Navbar";
import errorImage from "../image/errorImage.png";
// import TablePagination from "./TablePagination";

const Countries = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  // const [query, setQuery] = useState("");
  // const [currentPage, setCurrentPage] = useState(1);
  // const [dataPerPage] = useState(20);
  useEffect(() => {
    fetch(`https://disease.sh/v3/covid-19/countries`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setData(res);
        setIsLoaded(true);
      })
      .catch((err) => {
        console.error(err);
        setIsLoaded(true);
        setError(err);
      });
  }, []);

  // const indexOfLastPage = currentPage * dataPerPage;
  // const indexOfFirstPage = indexOfLastPage - dataPerPage;
  // const currentPosts = data.slice(indexOfFirstPage, indexOfLastPage);

  // const paginate = (pageNumber) => {
  //   setCurrentPage(pageNumber);
  // };
  if (error) {
    return (
      <div>
        <Navbar />
        <div className="flex-center m-5">
          <img
            src={errorImage}
            alt="error_loading_data"
            className="img-fluid"
            style={{ width: "25rem", height: "20rem" }}
          />
        </div>
        <h1 className="text-center mt-5 h1-responsive">
          Oops! It seems like there was an error while loading the data.
          <br />
          Check your internet connection and try again.
        </h1>
      </div>
    );
  } else if (!isLoaded) {
    return (
      <div>
        <Navbar />
        <div className="flex-center mt-5">
          <div className="spinner-border text-primary"></div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <Navbar />
        <div className="mt-3">
          <h3 className="text-center mt-2">Affected Countries</h3>
          <Datatable data={data} />
          {/* <TablePagination
            currentPage={currentPage}
            dataPerPage={dataPerPage}
            totalData={data.length}
            paginate={paginate}
          /> */}
        </div>
      </div>
    );
  }
};

export default Countries;
