import React from "react";

const ArticleContent = ({ news }) => {
  return (
    <div>
      <div className="container">
        <h1 className="text-center">Article Page</h1>
        <h1 className="text-center">Headline</h1>
        <p className="text-center">{news}</p>
      </div>
    </div>
  );
};

export default ArticleContent;
