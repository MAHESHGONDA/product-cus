import React from "react";
import _ from "lodash";

const Pagination = (props) => {
  const { productsCount, productsPerPage, onPageChange, activePage } = props;
  var pages = Math.ceil(productsCount / productsPerPage);
  if (pages === 1) return null;
  const aPages = _.range(1, pages + 1);
  debugger;
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {aPages.map((page) => {
          console.log(page);
          return (
            <li
              className={page === activePage ? "page-item active" : "page-item"}
            >
              <a
                role="button"
                className="page-link"
                onClick={() => onPageChange(page)}
              >
                {page}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Pagination;
