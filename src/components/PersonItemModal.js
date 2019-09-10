import React from "react";
import { StyledDiv } from "./PersonItemModal.style";

function PersonItemModal(props) {
  const imagePlaceholder =
    props.first_char.toUpperCase() + props.last_name.slice(0, 1);

  return (
    <StyledDiv>
      <div className="header">
        <p>Person Information</p>
        <button
          onClick={() => {
            props.setModalRender(null);
          }}
          className="header__btn"
        >
          X
        </button>
      </div>
      <div className="body">
        <div className="face">
          <div className="image">{imagePlaceholder}</div>
          <p className="name">{props.name}</p>
          <p className="phone">{props.phone[0].value}</p>
        </div>
        <div className="details">
          <table>
            <tbody>
              <tr>
                <td>Email</td>
                <td>{props.email[0].value}</td>
              </tr>
              <tr>
                <td>Location</td>
                <td>{props.org_id.address}</td>
              </tr>
              <tr>
                <td>Group</td>
                <td>{props.fa8a12c37c765a344f5793b83266f07827649153}</td>
              </tr>
              <tr>
                <td>Assistant</td>
                <td>{props.e57a0a20b6796a43597a65f44882a4d8cd65f3a8}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="footer">
        <button
          onClick={() => {
            props.setModalRender(null);
          }}
          className="footer__btn"
        >
          Back
        </button>
      </div>
    </StyledDiv>
  );
}

export default PersonItemModal;
