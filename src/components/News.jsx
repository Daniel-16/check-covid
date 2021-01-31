import React, { useState, useEffect } from "react";
import NewsPosts from "./NewsPosts";
import Pagination from "./Pagination";
import Navbar from "./Navbar";

const NewsPage = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [newsPerPage] = useState(10);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/everything?q=covid&apiKey=af6ea2fbc2e0458bb5c21426bf030ce2`
    )
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
          <h1 className="text-center mt-5 h1-responsive">
            Oops! It seems like there was an error while loading the data
          </h1>
        </div>
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
          <h2 className="text-center">
            Welcome to the news section for my website called Check Covid
          </h2>
          <NewsPosts news={currentPosts} />
          <Pagination
            newsPerPage={newsPerPage}
            totalNews={news.length}
            paginate={paginate}
          />
        </div>
      </div>
    );
  }
};

export default NewsPage;
