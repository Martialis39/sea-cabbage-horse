import styled from "styled-components";

export const StyledModalHeader = styled.div`
  padding: 15px 20px;
  color: #484848;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ededed;
  font-weight: 700;

  .header__btn {
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 5px;
    font-weight: 700;
  }
`;

export const StyledModalFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ededed;
  padding: 10px 20px;

  .footer__close {
    background: white;
    border: none;
    border-radius: 2px;
    font-weight: 700;
    font-family: "Open Sans", sans-serif;
    padding: 10px 25px;
    border: 1px solid #26292c70;
  }

  .footer__delete {
    background: transparent;
    border: none;
    padding: 10px;
    margin-left: -10px;
    cursor: pointer;
  }
`;

export const StyledCard = styled.div`
  padding: 0 20px;
`;

export const StyledCardTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid #26292c1f;
  padding: 40px 0 20px 0;

  .image {
    display: flex;
    align-items: center;
    border-radius: 50%;
    background: #4056ff4a;
    height: 60px;
    width: 60px;
    justify-content: center;
    font-weight: 600;
    color: #2929a2;
    margin-bottom: 15px;
  }

  .name {
    font-weight: 800;
    margin-bottom: 5px;
    color: #484848;
  }

  .phone {
    color: #61c786;
    font-weight: 700;
  }
`;

export const StyledCardBody = styled.div`
  padding: 20px 0;
  td {
    font-size: 14px;
    padding: 0 15px;
    padding-bottom: 15px;
    font-weight: 700;
  }
  td:first-child {
    text-align: right;
    color: #656c7a;
  }

  td:last-child {
    color: #26292c70;
  }
`;

export const StyledModal = styled.div`
  max-width: 480px;
  box-shadow: 0px 3px 5px #00000030;
`;
