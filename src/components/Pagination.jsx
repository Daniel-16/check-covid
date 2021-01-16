import React from "react";

const Pagination = ({ newsPerPage, totalNews, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalNews / newsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav className="flex-center">
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item active">
            <a
              onClick={() => {
                paginate(number);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="page-link"
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
