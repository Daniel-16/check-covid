// import React from "react";

// const TablePagination = ({ dataPerPage, totalData, paginate, currentPage }) => {
//   const pageNumbers = [];

//   for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
//     pageNumbers.push(i);
//   }

//   return (
//     <div className="container">
//       <nav className="flex-center">
//         <ul className="pagination pagination-responsive pagination-sm">
//           {pageNumbers.map((number) => (
//             <li
//               key={number}
//               className={
//                 currentPage === number ? "page-item active" : "page-item"
//               }
//             >
//               <span
//                 className="page-link"
//                 onClick={() => {
//                   paginate(number);
//                   window.scrollTo({ top: 0, behavior: "smooth" });
//                 }}
//                 style={{ cursor: "pointer" }}
//               >
//                 {number}
//               </span>
//             </li>
//           ))}
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default TablePagination;
