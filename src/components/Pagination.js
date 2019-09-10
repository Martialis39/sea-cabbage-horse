import React, { useState } from "react";
import { StyledButton } from "./Pagination.style";

function Pagination({ children }) {
  const [activePage, setActivePage] = useState(0);
  const itemsPerPage = 10;

  const childrenToBeShown = children.slice(
    activePage * itemsPerPage,
    activePage * itemsPerPage + itemsPerPage
  );

  const isFirstPage = activePage === 0;
  const isLastPage =
    activePage === Math.ceil(children.length / itemsPerPage - 1);

  return (
    <>
      {childrenToBeShown}

      <StyledButton
        disabled={isFirstPage}
        onClick={() => {
          setActivePage(activePage - 1);
        }}
      >
        {" "}
        prev
      </StyledButton>

      <StyledButton
        disabled={isLastPage}
        onClick={() => {
          setActivePage(activePage + 1);
        }}
      >
        {" "}
        next
      </StyledButton>
    </>
  );
}

export default Pagination;
