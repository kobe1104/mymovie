import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";

const Pagination = ({ itemCount, pageSize, handlePageChange, currentPage }) => {
  const pagesCount = Math.ceil(itemCount / pageSize);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);
  const getActiveClass = (page) => {
    return currentPage === page ? "page-item active" : "page-item";
  };
  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li className={getActiveClass(page)} key={page}>
            <div className="page-link" onClick={() => handlePageChange(page)}>
              {page}
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
};
Pagination.propTypes = {
  itemCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  handlePageChange: PropTypes.func.isRequired,
};
export default Pagination;
