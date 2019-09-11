import React from "react";
import logo from "../assets/logo.svg";
import { StyledHeader } from "./Header.style";

function Header() {
  return (
    <StyledHeader>
      <img style={{ width: "173px" }} src={logo} alt="Pipedrive" />
    </StyledHeader>
  );
}

export default Header;
