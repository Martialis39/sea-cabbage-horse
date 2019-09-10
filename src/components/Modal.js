import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { ModalDiv } from "./Modal.style";

function Modal({ render, setModalRender }) {
  const [container, setContainer] = useState(null);
  useEffect(() => {
    let modalDiv = document.getElementById("reactAppModalContainer");
    if (!modalDiv) {
      modalDiv = document.createElement("div");
      modalDiv.setAttribute("id", "reactAppModalContainer");
      document.body.appendChild(modalDiv);
      document.body.style.overflow = "hidden";
    }

    setContainer(modalDiv);
    return () => {
      setContainer(null);
      document.body.removeChild(modalDiv);
      document.body.style.overflow = "auto";
    };
  }, []);

  return container
    ? createPortal(
        <ModalDiv>
          <div className="modal__container">
            <div className="modal__inner">{render()}</div>
          </div>
        </ModalDiv>,
        container
      )
    : null;
}

export default Modal;
