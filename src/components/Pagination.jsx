import React from "react";

const Pagination = ({ newsPerPage, totalNews, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalNews / newsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav className="flex-center">
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={
              currentPage === number ? "page-item active" : "page-item"
            }
          >
            <span
              onClick={() => {
                paginate(number);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="page-link"
              style={{ cursor: "pointer" }}
            >
              {number}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
