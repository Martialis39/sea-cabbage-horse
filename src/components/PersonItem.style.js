import styled from "styled-components";

export const PersonItemDiv = styled.div`
  display: flex;
  padding: 8px 20px;
  border: 1px solid #00000030;
  border-radius: 2px;
  align-items: center;
  cursor: pointer;
  transition: transform 200ms ease-in-out;
  &:hover {
    transform: translateY(-2px);
  }

  .image {
    margin-left: auto;
    display: flex;
    align-items: center;
    border-radius: 50%;
    background: #4056ff4a;
    height: 40px;
    width: 40px;
    justify-content: center;
    font-weight: 600;
    color: #2929a2;
  }

  .name {
    margin-bottom: 8px;
  }

  .company {
    display: flex;
    align-items: center;
    color: #1b1b1b;
    font-weight: 300;
    font-size: 14px;
  }

  .icon {
    margin-right: 8px;
  }
`;
