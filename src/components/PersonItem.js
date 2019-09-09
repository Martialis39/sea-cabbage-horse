import React from "react";
import IconOrganization from "../assets/IconOrganization";
import { PersonItemDiv } from "./PersonItem.style";

function PersonItemModal(props) {
  console.log("props is ", props);
  const imagePlaceholder =
    props.first_char.toUpperCase() + props.last_name.slice(0, 1);
  return (
    <div>
      {imagePlaceholder}
      {props.name}
      {props.phone[0].value}
      {props.email[0].value}
      {props.org_id.address}
      Group: {props.fa8a12c37c765a344f5793b83266f07827649153}
      Assistant: {props.e57a0a20b6796a43597a65f44882a4d8cd65f3a8}
    </div>
  );
}

function PersonItem(props) {
  const imagePlaceholder =
    props.first_char.toUpperCase() + props.last_name.slice(0, 1);
  return (
    <PersonItemDiv
      onClick={() => {
        props.setModalRender(() => {
          return function() {
            return <PersonItemModal {...props} />;
          };
        });
      }}
    >
      <div className="info">
        <div className="name">{props.name}</div>
        <div className="company">
          <div className="icon">
            <IconOrganization height="18" />
          </div>
          {props.org_name}
        </div>
      </div>
      <div className="image">{imagePlaceholder}</div>
    </PersonItemDiv>
  );
}

export default PersonItem;
