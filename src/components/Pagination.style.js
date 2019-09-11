import styled from "styled-components";

export const StyledButton = styled.button`
  background: white;
  border: none;
  border-radius: 2px;
  font-weight: 700;
  font-family: "Open Sans", sans-serif;
  padding: 10px 25px;
  border: 1px solid #26292c70;
  cursor: pointer;
  &:disabled {
    cursor: default;
  }

  &:not(:first-child) {
    margin-left: 10px;
  }
`;
