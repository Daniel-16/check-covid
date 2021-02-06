import React, { useState, useEffect } from "react";
import NewsPosts from "./NewsPosts";
import Pagination from "./Pagination";
import Navbar from "./Navbar";
import Footer from "./Footer";
import errorImage from "../image/errorImage.png";

const NewsPage = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [newsPerPage] = useState(10);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://saurav.tech/NewsAPI/top-headlines/category/health/us.json`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setNews(res.articles);
        setLoading(true);
      })
      .catch((error) => {
        console.log("Error loading data", error);
        setLoading(true);
        setError(error);
      });
  }, []);

  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentPosts = news.slice(indexOfFirstNews, indexOfLastNews);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
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
  } else if (!loading) {
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
        <div className="container">
          <h3 className="text-center mt-2 h3-responsive">
            Latest News related to the Coronavirus/Health related topics.
          </h3>
          <hr />
          <NewsPosts news={currentPosts} />
          <Pagination
            newsPerPage={newsPerPage}
            totalNews={news.length}
            paginate={paginate}
          />
        </div>
        <Footer />
      </div>
    );
  }
};

export default NewsPage;
