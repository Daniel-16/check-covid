import React from "react";
import { v4 as uuidv4 } from "uuid";

const NewsPosts = ({ news }) => {
  const cardStyles = {
    borderRadius: "15px 15px 0px 0px",
  };

  return (
    <div>
      {news.map((articles) => (
        <div key={uuidv4()} className="card mb-3" style={cardStyles}>
          <img
            src={articles.urlToImage}
            alt="News"
            className="card-img-top"
            style={cardStyles}
          />
          <div className="card-body">
            <h5 className="text-center card-title">{articles.title}</h5>
            <p className="card-text text-center">{articles.description}</p>
            <a
              href={articles.url}
              target="_blank"
              className="btn btn-primary btn-sm"
              rel="noreferrer"
            >
              Read More
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsPosts;
