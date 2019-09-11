import React, { useState, useEffect } from "react";
import { StyledButton } from "./Pagination.style";
import { ItemsPerPage } from "../constants";

function PaginateAndFilter({ children }) {
  const [activePage, setActivePage] = useState(0);
  const [isFirstPage, setIsFirstPage] = useState(true);
  const [isLastPage, setIsLastPage] = useState(false);

  const currentlyDisplayedItems = children.slice(
    activePage * ItemsPerPage,
    activePage * ItemsPerPage + ItemsPerPage
  );

  useEffect(() => {
    setIsFirstPage(activePage === 0);
    setIsLastPage(activePage === Math.ceil(children.length / ItemsPerPage - 1));
  }, [activePage, children]);

  return (
    <>
      <div className="pagination">
        <StyledButton
          disabled={isFirstPage}
          onClick={() => {
            setActivePage(activePage - 1);
          }}
        >
          {" "}
          Previous page
        </StyledButton>
        <StyledButton
          disabled={isLastPage}
          onClick={() => {
            setActivePage(activePage + 1);
          }}
        >
          {" "}
          Next page
        </StyledButton>
      </div>
      {currentlyDisplayedItems}
    </>
  );
}

export default PaginateAndFilter;
