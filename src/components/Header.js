import React from "react";
import logo from "../assets/logo.svg";

function Header() {
  return (
    <header style={{ backgroundColor: "#000" }}>
      <img style={{ width: "173px" }} src={logo} alt="Pipedrive" />
    </header>
  );
}

export default Header;
