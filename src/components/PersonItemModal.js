import React from "react";
import {
  StyledModal,
  StyledModalHeader,
  StyledModalFooter,
  StyledCard,
  StyledCardTop,
  StyledCardBody
} from "./PersonItemModal.style";
import { CustomFields } from "../constants";
import icon_trash from "../assets/icon_trash.svg";

function PersonItemModal(props) {
  const imagePlaceholder =
    props.first_char.toUpperCase() + props.last_name.slice(0, 1);

  return (
    <StyledModal>
      <StyledModalHeader className="header">
        <p>Person Information</p>
        <button
          className="header__btn"
          onClick={() => {
            props.setModalRender(null);
          }}
        >
          X
        </button>
      </StyledModalHeader>
      <StyledCard>
        <StyledCardTop>
          <div className="image">{imagePlaceholder}</div>
          <p className="name">{props.name}</p>
          <p className="phone">{props.phone[0].value}</p>
        </StyledCardTop>
        <StyledCardBody>
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
                <td>{props[CustomFields.group]}</td>
              </tr>
              <tr>
                <td>Assistant</td>
                <td>{props[CustomFields.assistant]}</td>
              </tr>
            </tbody>
          </table>
        </StyledCardBody>
      </StyledCard>
      <StyledModalFooter>
        <button
          className="footer__delete"
          onClick={() => {
            props.handleDelete(props.id);
            props.setModalRender(null);
          }}
        >
          <img src={icon_trash} alt="delete icon" />
        </button>
        <button
          onClick={() => {
            props.setModalRender(null);
          }}
          className="footer__close"
        >
          Back
        </button>
      </StyledModalFooter>
    </StyledModal>
  );
}

export default PersonItemModal;
