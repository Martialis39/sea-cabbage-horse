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
          <div
            className="modal__container"
            onClick={() => setModalRender(null)}
          >
            <div className="modal__inner">
              <div className="modal__header">
                <button
                  className="modal__close"
                  onClick={() => setModalRender(null)}
                >
                  X
                </button>
              </div>

              {render()}
              <div className="modal__footer">
                <button
                  className="modal__close modal__close--footer"
                  onClick={() => setModalRender(null)}
                >
                  Back
                </button>
              </div>
            </div>
          </div>
        </ModalDiv>,
        container
      )
    : null;
}

export default Modal;
