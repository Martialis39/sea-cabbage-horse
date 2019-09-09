import styled from "styled-components";

export const ModalDiv = styled.div`
  .modal__container {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    position: fixed;
    display: flex;
    background: rgba(0, 0, 0, 0.3);
    justify-content: center;
    align-items: center;
  }

  .modal__inner {
    background: white;
    position: relative;
    z-index: 1;
  }
  .modal__close {
    top: 8px;
    right: 8px;
  }
`;
