import styled from "styled-components";

export const StyledPersonsList = styled.div`
  padding: 20px 20px;
  list-style: none;
  & > * {
    margin-bottom: 8px;
  }
`;

export const StyledTitle = styled.div`
  padding: 20px 20px;
  box-shadow: 0px 1px 3px #00000030;
  font-weight: 700;
`;

export const StyledButton = styled.button`
  background: white;
  border: none;
  border-radius: 2px;
  font-weight: 700;
  font-family: "Open Sans", sans-serif;
  margin-top: 20px;
  margin-left: 20px;
  padding: 10px 25px;
  border: 1px solid #26292c70;
  cursor: pointer;
`;
