import React, { useState, useEffect } from "react";
import NewsPosts from "./NewsPosts";
import Pagination from "./Pagination";

const NewsPage = () => {
  const [news, setNews] = useState([]);
  // const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [newsPerPage] = useState(10);

  useEffect(() => {
    fetch(`https://saurav.tech/NewsAPI/top-headlines/category/health/in.json`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setNews(res.articles);
      });
  }, []);

  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentPosts = news.slice(indexOfFirstNews, indexOfLastNews);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
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
  );
};

export default NewsPage;
